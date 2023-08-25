// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const products = [
    {
        id: 1,
        name: "iPhone 13 Pro, 256GB, Graphite - Unlocked",
        description: "This Renewed Premium product is shipped and sold by Alltech and has been certified by Alltech to work and look like new. With at least 90% battery life, it comes in deluxe, Alltech-branded packaging and is backed by a one-year warranty and technical support.",
        priceUSD: 877,
        imgUrl: "https://m.media-amazon.com/images/I/61NYF7BxI8L._AC_SX679_.jpg",
        rating: 4,
    },
    {
        id: 2,
        name: "Apple 2022 MacBook Pro M2 Chip (QWERTY English) Space Gray",
        description: "Renewed Premium products are shipped and sold by Alltech and have been certified to work and look like new. They have an increased battery life (min 90% battery capacity) and come with an Alltech-branded box and generic accessories which are in brand new condition. Renewed Premium products are not Apple certified but come with a one-year full satisfaction guarantee.",
        priceUSD: 979,
        imgUrl: "https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_SX679_.jpg",
        rating: 5,
    },
    {
        id: 3,
        name: "Apple iPad Pro 12.9-inch (6th Generation): with M2 chip - Space Gray",
        description: "iPad Pro is the ultimate iPad experience, with the astonishing performance of the M2 chip, superfast wireless connectivity, and next-generation Apple Pencil experience. Plus powerful productivity features in iPadOS.",
        priceUSD: 965,
        imgUrl: "https://m.media-amazon.com/images/I/91Eeym+0E9L._AC_SX679_.jpg",
        rating: 5,
    },
    {
        id: 4,
        name: "Apple AirPods Max - Sky Blue (Renewed)",
        description: "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee",
        priceUSD: 429,
        imgUrl: "https://m.media-amazon.com/images/I/81X+UHkRWdL._AC_SX679_.jpg",
        rating: 3,
    },
    {
        id: 5,
        name: "2021 Apple iMac (24-inch, Apple M1 chip (Renewed)",
        description: "Immersive 24-inch 4.5K Retina display with P3 wide color gamut and 500 nits of brightness",
        priceUSD: 999,
        imgUrl: "https://m.media-amazon.com/images/I/71s8Fr3z-2S._AC_SX679_.jpg",
        rating: 5,
    },
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const query = req.query;
    const { id } = query;

    let product;
    if (id == 1) {
        product = products[0];
    } else if (id == 2) {
        product = products[1];
    } else if (id == 3) {
        product = products[2];
    } else if (id == 4) {
        product = products[3];
    } else if (id == 5) {
        product = products[4];
    } else {
        product = {
            error: "Item not found"
        }
    }

    res.status(200).json(product);
}
