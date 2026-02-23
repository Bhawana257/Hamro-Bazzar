const fs = require('fs');
const path = require('path');
const https = require('https');
const products = require('../data/products');

const imgDir = path.join(__dirname, '../img/products');

if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
}

const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        const filepath = path.join(imgDir, filename);
        if (fs.existsSync(filepath)) {
            console.log(`Skipping existing: ${filename}`);
            return resolve(filepath);
        }

        const file = fs.createWriteStream(filepath);
        https.get(url, response => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${filename}`);
                resolve(filepath);
            });
        }).on('error', err => {
            fs.unlink(filepath, () => { });
            console.error(`Error downloading ${url}: ${err.message}`);
            reject(err);
        });
    });
};

const processProducts = async () => {
    const productsLocal = JSON.parse(JSON.stringify(products));

    for (let i = 0; i < productsLocal.length; i++) {
        const product = productsLocal[i];

        // Generate filename from name
        const safeName = product.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const previewFilename = `${safeName}_preview.jpg`;

        try {
            await downloadImage(product.preview, previewFilename);
            product.preview = `img/products/${previewFilename}`;

            product.photos = await Promise.all(product.photos.map(async (photoUrl, index) => {
                const photoFilename = `${safeName}_photo_${index}.jpg`;
                await downloadImage(photoUrl, photoFilename);
                return `img/products/${photoFilename}`;
            }));

        } catch (err) {
            console.error(`Failed to process ${product.name}`);
        }
    }

    const outputPath = path.join(__dirname, '../data/products_local.js');
    const fileContent = `const products = ${JSON.stringify(productsLocal, null, 4)};\n\nmodule.exports = products;`;

    fs.writeFileSync(outputPath, fileContent);
    console.log(`Updated product data saved to ${outputPath}`);
};

processProducts();
