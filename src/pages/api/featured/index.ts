// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({
        id: 2,
        promoTitle: "Mover. Maker. Boundary breaker.",
        description: "Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and efficiency further than ever. It delivers exceptional performance whether it's plugged in or not, and now has even longer battery life. Combined with a stunning Liquid Retina XDR display and all the ports you need — this is a pro laptop without equal.",
        priceUSD: 979,
        bannerUrl: "https://www.bechtle.com/dam/jcr:31dcc282-6127-4977-ab1b-35d1455396e8/cw43_mainbanner_apple-auhorised-reseller-eu.jpg",
        rating: 5,
    });
}
