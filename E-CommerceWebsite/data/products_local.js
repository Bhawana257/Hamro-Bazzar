const products = [
    {
        "name": "Men Navy Blue Solid Sweatshirt",
        "description": "Navy blue solid sweatshirt, has a hood, two pockets, long sleeves, straight hem",
        "price": 2599,
        "preview": "img/products/men_navy_blue_solid_sweatshirt_preview.jpg",
        "photos": [
            "img/products/men_navy_blue_solid_sweatshirt_photo_0.jpg",
            "img/products/men_navy_blue_solid_sweatshirt_photo_1.jpg",
            "img/products/men_navy_blue_solid_sweatshirt_photo_2.jpg"
        ],
        "isAccessory": false,
        "category": "Men",
        "brand": "United Colors of Benetton",
        "size": [0, 1, 2, 3]
    },
    {
        "name": "Men Black Action Parkview Lifestyle Shoes",
        "description": "A pair of round-toe black sneakers, has regular styling, lace-up detail",
        "price": 6999,
        "preview": "img/products/men_black_action_parkview_lifestyle_shoes_preview.jpg",
        "photos": [
            "img/products/men_black_action_parkview_lifestyle_shoes_photo_0.jpg",
            "img/products/men_black_action_parkview_lifestyle_shoes_photo_1.jpg",
            "img/products/men_black_action_parkview_lifestyle_shoes_photo_2.jpg"
        ],
        "isAccessory": false,
        "category": "Men",
        "brand": "Adidas",
        "size": [0, 1, 2]
    },
    {
        "name": "Men Chino Trousers",
        "description": "Beige chino trousers, slim fit, cotton blend",
        "price": 1999,
        "preview": "img/products/men_chino_trousers_preview.jpg",
        "photos": [
            "img/products/men_chino_trousers_photo_0.jpg",
            "img/products/men_chino_trousers_photo_1.jpg"
        ],
        "isAccessory": false,
        "category": "Men",
        "brand": "H&M",
        "size": [1, 2, 3]
    },
    {
        "name": "Denim Jacket",
        "description": "Classic blue denim jacket with button closure and chest pockets",
        "price": 3499,
        "preview": "img/products/denim_jacket_preview.jpg",
        "photos": [
            "img/products/denim_jacket_photo_0.jpg",
            "img/products/denim_jacket_photo_1.jpg"
        ],
        "isAccessory": false,
        "category": "Men",
        "brand": "Levis",
        "size": [1, 2, 3]
    },
    {
        "name": "Leather Jacket",
        "description": "Black biker leather jacket",
        "price": 9999,
        "preview": "img/products/leather_jacket_photo.jpg",
        "photos": [
            "img/products/leather_jacket_photo.jpg"
        ],
        "isAccessory": false,
        "category": "Men",
        "brand": "Zara",
        "size": [1, 2]
    },
    {
        "name": "Running Shorts",
        "description": "Grey athletic shorts with pockets",
        "price": 899,
        "preview": "img/products/running_shorts_preview.jpg",
        "photos": [
            "img/products/running_shorts_photo_0.jpg",
            "img/products/running_shorts_photo_1.jpg"
        ],
        "isAccessory": false,
        "category": "Men",
        "brand": "Nike",
        "size": [1, 2]
    },
    {
        "name": "Graphic T-Shirt",
        "description": "Cotton t-shirt with urban graphic print",
        "price": 799,
        "preview": "img/products/graphic_t_shirt_preview.jpg",
        "photos": [
            "img/products/graphic_t_shirt_photo_0.jpg",
            "img/products/graphic_t_shirt_photo_1.jpg"
        ],
        "isAccessory": false,
        "category": "Men",
        "brand": "Puma",
        "size": [0, 1, 2]
    },
    {
        "name": "Men Formal Shirt",
        "description": "Crisp white formal shirt, slim fit",
        "price": 1599,
        "preview": "img/products/men_formal_shirt_preview.jpg",
        "photos": [
            "img/products/men_formal_shirt_photo_0.jpg",
            "img/products/men_formal_shirt_photo_1.jpg"
        ],
        "isAccessory": false,
        "category": "Men",
        "brand": "Raymond",
        "size": [0, 1, 2]
    },
    {
        "name": "Women Summer Dress",
        "description": "Floral print summer dress, knee length",
        "price": 2999,
        "preview": "img/products/women_summer_dress_preview.jpg",
        "photos": [
            "img/products/women_summer_dress_photo_0.jpg",
            "img/products/women_summer_dress_photo_1.jpg"
        ],
        "isAccessory": false,
        "category": "Women",
        "brand": "Zara",
        "size": [1, 2]
    },
    {
        "name": "Women Heels",
        "description": "Classic black heels for formal occasions",
        "price": 5999,
        "preview": "img/products/women_heels_preview.jpg",
        "photos": [
            "img/products/women_heels_photo_0.jpg",
            "img/products/women_heels_photo_1.jpg"
        ],
        "isAccessory": false,
        "category": "Women",
        "brand": "Aldo",
        "size": [1, 2, 3]
    },
    {
        "name": "Women Blouse",
        "description": "White formal blouse with collar",
        "price": 1499,
        "preview": "img/products/women_blouse_preview.jpg",
        "photos": [
            "img/products/women_blouse_photo_0.jpg",
            "img/products/women_blouse_photo_1.jpg"
        ],
        "isAccessory": false,
        "category": "Women",
        "brand": "Mango",
        "size": [0, 1, 2]
    },
    {
        "name": "Women Denim Jeans",
        "description": "High waist blue denim jeans",
        "price": 2299,
        "preview": "img/products/women_denim_jeans_preview.jpg",
        "photos": [
            "img/products/women_denim_jeans_photo_0.jpg",
            "img/products/women_denim_jeans_photo_1.jpg"
        ],
        "isAccessory": false,
        "category": "Women",
        "brand": "Levis",
        "size": [0, 1, 2]
    },
    {
        "name": "Women Red Kurta",
        "description": "Elegant red cotton kurta with embroidery",
        "price": 1299,
        "preview": "img/products/women_red_kurta_preview.jpg",
        "photos": [
            "img/products/women_red_kurta_photo_0.jpg",
            "img/products/women_red_kurta_photo_1.jpg"
        ],
        "isAccessory": false,
        "category": "Women",
        "brand": "Biba",
        "size": [0, 1, 2, 3]
    },
    {
        "name": "Smart Watch",
        "description": "Black Touchscreen Smart Watch with Heart Rate Monitor",
        "price": 4999,
        "preview": "img/products/smart_watch_preview.jpg",
        "photos": [
            "img/products/smart_watch_photo_0.jpg",
            "img/products/smart_watch_photo_1.jpg"
        ],
        "isAccessory": true,
        "category": "Accessories",
        "brand": "Apple",
        "size": [0, 1]
    },
    {
        "name": "Leather Handbag",
        "description": "Premium brown leather handbag with adjustable strap",
        "price": 8999,
        "preview": "img/products/leather_handbag_preview.jpg",
        "photos": [
            "img/products/leather_handbag_photo_0.jpg",
            "img/products/leather_handbag_photo_1.jpg"
        ],
        "isAccessory": true,
        "category": "Women",
        "brand": "H&M",
        "size": [0]
    },
    {
        "name": "Unisex Backpack",
        "description": "Durable travel backpack with laptop compartment",
        "price": 3200,
        "preview": "img/products/unisex_backpack_preview.jpg",
        "photos": [
            "img/products/unisex_backpack_photo_0.jpg",
            "img/products/unisex_backpack_photo_1.jpg"
        ],
        "isAccessory": true,
        "category": "Accessories",
        "brand": "Samsonite",
        "size": [0]
    },
    {
        "name": "Aviator Sunglasses",
        "description": "Classic gold-frame aviator sunglasses",
        "price": 1500,
        "preview": "img/products/aviator_sunglasses_preview.jpg",
        "photos": [
            "img/products/aviator_sunglasses_photo_0.jpg",
            "img/products/aviator_sunglasses_photo_1.jpg"
        ],
        "isAccessory": true,
        "category": "Accessories",
        "brand": "Ray-Ban",
        "size": [0]
    },
    {
        "name": "Minimalist Wallet",
        "description": "Slim leather wallet with card slots",
        "price": 1200,
        "preview": "img/products/minimalist_wallet_preview.jpg",
        "photos": [
            "img/products/minimalist_wallet_photo_0.jpg",
            "img/products/minimalist_wallet_photo_1.jpg"
        ],
        "isAccessory": true,
        "category": "Men",
        "brand": "Fossil",
        "size": [0]
    },
    {
        "name": "Baseball Cap",
        "description": "Black cotton baseball cap with adjustable strap",
        "price": 599,
        "preview": "img/products/baseball_cap_preview.jpg",
        "photos": [
            "img/products/baseball_cap_photo_0.jpg",
            "img/products/baseball_cap_photo_1.jpg"
        ],
        "isAccessory": true,
        "category": "Accessories",
        "brand": "Nike",
        "size": [0]
    },
    {
        "name": "Gold Necklace",
        "description": "Simple elegant gold chain necklace",
        "price": 3500,
        "preview": "img/products/gold_necklace_photo_0.webp",
        "photos": [
            "img/products/gold_necklace_photo_0.webp",
            "img/products/gold_necklace_photo_1.jpg"
        ],
        "isAccessory": true,
        "category": "Women",
        "brand": "Tanishq",
        "size": [0]
    },
    {
        "name": "Wrist Watch",
        "description": "Analog watch with leather strap",
        "price": 2500,
        "preview": "img/products/wrist_watch_preview.jpg",
        "photos": [
            "img/products/wrist_watch_photo_0.jpg",
            "img/products/wrist_watch_photo_1.jpg"
        ],
        "isAccessory": true,
        "category": "Men",
        "brand": "Casio",
        "size": [0]
    },
    {
        "name": "Wireless Earbuds",
        "description": "True wireless earbuds with noise cancellation",
        "price": 5999,
        "preview": "img/products/wireless_earbuds_preview.jpg",
        "photos": [
            "img/products/wireless_earbuds_photo_0.jpg",
            "img/products/wireless_earbuds_photo_1.jpg"
        ],
        "isAccessory": true,
        "category": "Accessories",
        "brand": "Sony",
        "size": [0]
    },
    {
        "name": "Belt",
        "description": "Reversible leather belt",
        "price": 999,
        "preview": "img/products/belt_preview.jpg",
        "photos": [
            "img/products/belt_photo_0.jpg",
            "img/products/belt_photo_1.jpg"
        ],
        "isAccessory": true,
        "category": "Men",
        "brand": "Tommy Hilfiger",
        "size": [1, 2]
    }
];

module.exports = products;