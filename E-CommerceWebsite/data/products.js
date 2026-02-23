const products = [
    // --- MENS CLOTHING ---
    {
        name: 'Men Navy Blue Solid Sweatshirt',
        description: 'Navy blue solid sweatshirt, has a hood, two pockets, long sleeves, straight hem',
        price: 2599,
        preview: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=600&q=80"],
        isAccessory: false,
        category: 'Men',
        brand: 'United Colors of Benetton',
        size: [0, 1, 2, 3]
    },
    {
        name: 'Men Black Action Parkview Lifestyle Shoes',
        description: 'A pair of round-toe black sneakers, has regular styling, lace-up detail',
        price: 6999,
        preview: 'https://images.unsplash.com/photo-1527010154944-f2241763d806?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1527010154944-f2241763d806?auto=format&fit=crop&w=600&q=80"],
        isAccessory: false,
        category: 'Men',
        brand: 'Adidas',
        size: [0, 1, 2]
    },
    {
        name: 'Men Chino Trousers',
        description: 'Beige chino trousers, slim fit, cotton blend',
        price: 1999,
        preview: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80"],
        isAccessory: false,
        category: 'Men',
        brand: 'H&M',
        size: [1, 2, 3]
    },
    {
        name: 'Denim Jacket',
        description: 'Classic blue denim jacket with button closure and chest pockets',
        price: 3499,
        preview: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80"],
        isAccessory: false,
        category: 'Men',
        brand: 'Levis',
        size: [1, 2, 3]
    },
    {
        name: 'Leather Jacket',
        description: 'Black biker leather jacket',
        price: 9999,
        preview: 'https://images.unsplash.com/photo-1551028919-ac66c9a3d999?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1551028919-ac66c9a3d999?auto=format&fit=crop&w=600&q=80"],
        isAccessory: false,
        category: 'Men',
        brand: 'Zara',
        size: [1, 2]
    },
    {
        name: 'Running Shorts',
        description: 'Grey athletic shorts with pockets',
        price: 899,
        preview: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6f?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6f?auto=format&fit=crop&w=600&q=80"],
        isAccessory: false,
        category: 'Men',
        brand: 'Nike',
        size: [1, 2]
    },
    {
        name: 'Graphic T-Shirt',
        description: 'Cotton t-shirt with urban graphic print',
        price: 799,
        preview: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80"],
        isAccessory: false,
        category: 'Men',
        brand: 'Puma',
        size: [0, 1, 2]
    },
    {
        name: 'Men Formal Shirt',
        description: 'Crisp white formal shirt, slim fit',
        price: 1599,
        preview: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80"],
        isAccessory: false,
        category: 'Men',
        brand: 'Raymond',
        size: [0, 1, 2]
    },

    // --- WOMENS CLOTHING ---
    {
        name: 'Women Summer Dress',
        description: 'Floral print summer dress, knee length',
        price: 2999,
        preview: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80"],
        isAccessory: false,
        category: 'Women',
        brand: 'Zara',
        size: [1, 2]
    },
    {
        name: 'Women Heels',
        description: 'Classic black heels for formal occasions',
        price: 5999,
        preview: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80"],
        isAccessory: false,
        category: 'Women',
        brand: 'Aldo',
        size: [1, 2, 3]
    },
    {
        name: 'Women Blouse',
        description: 'White formal blouse with collar',
        price: 1499,
        preview: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=600&q=80"],
        isAccessory: false,
        category: 'Women',
        brand: 'Mango',
        size: [0, 1, 2]
    },
    {
        name: 'Women Denim Jeans',
        description: 'High waist blue denim jeans',
        price: 2299,
        preview: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80"],
        isAccessory: false,
        category: 'Women',
        brand: 'Levis',
        size: [0, 1, 2]
    },
    {
        name: 'Women Red Kurta',
        description: 'Elegant red cotton kurta with embroidery',
        price: 1299,
        preview: 'https://images.unsplash.com/photo-1583391733958-e026b1462fd0?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1583391733958-e026b1462fd0?auto=format&fit=crop&w=600&q=80"],
        isAccessory: false,
        category: 'Women',
        brand: 'Biba',
        size: [0, 1, 2, 3]
    },

    // --- ACCESSORIES ---
    {
        name: 'Smart Watch',
        description: 'Black Touchscreen Smart Watch with Heart Rate Monitor',
        price: 4999,
        preview: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"],
        isAccessory: true,
        category: 'Accessories',
        brand: 'Apple',
        size: [0, 1]
    },
    {
        name: 'Leather Handbag',
        description: 'Premium brown leather handbag with adjustable strap',
        price: 8999,
        preview: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"],
        isAccessory: true,
        category: 'Women', // Accessory but gendered
        brand: 'H&M',
        size: [0]
    },
    {
        name: 'Unisex Backpack',
        description: 'Durable travel backpack with laptop compartment',
        price: 3200,
        preview: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"],
        isAccessory: true,
        category: 'Accessories', // Unisex
        brand: 'Samsonite',
        size: [0]
    },
    {
        name: 'Aviator Sunglasses',
        description: 'Classic gold-frame aviator sunglasses',
        price: 1500,
        preview: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80"],
        isAccessory: true,
        category: 'Accessories',
        brand: 'Ray-Ban',
        size: [0]
    },
    {
        name: 'Minimalist Wallet',
        description: 'Slim leather wallet with card slots',
        price: 1200,
        preview: 'https://images.unsplash.com/photo-1627123424574-181ce5171c98?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1627123424574-181ce5171c98?auto=format&fit=crop&w=600&q=80"],
        isAccessory: true,
        category: 'Men',
        brand: 'Fossil',
        size: [0]
    },
    {
        name: 'Baseball Cap',
        description: 'Black cotton baseball cap with adjustable strap',
        price: 599,
        preview: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80"],
        isAccessory: true,
        category: 'Accessories',
        brand: 'Nike',
        size: [0]
    },
    {
        name: 'Gold Necklace',
        description: 'Simple elegant gold chain necklace',
        price: 3500,
        preview: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=600&q=80"],
        isAccessory: true,
        category: 'Women',
        brand: 'Tanishq',
        size: [0]
    },
    {
        name: 'Wrist Watch',
        description: 'Analog watch with leather strap',
        price: 2500,
        preview: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80"],
        isAccessory: true,
        category: 'Men',
        brand: 'Casio',
        size: [0]
    },
    {
        name: 'Wireless Earbuds',
        description: 'True wireless earbuds with noise cancellation',
        price: 5999,
        preview: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80"],
        isAccessory: true,
        category: 'Accessories',
        brand: 'Sony',
        size: [0]
    },
    {
        name: 'Belt',
        description: 'Reversible leather belt',
        price: 999,
        preview: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
        photos: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"],
        isAccessory: true,
        category: 'Men',
        brand: 'Tommy Hilfiger',
        size: [1, 2]
    }
];

module.exports = products;
