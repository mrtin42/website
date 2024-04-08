import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const lastfmApiKey = process.env.LFM_API_KEY
    if (!lastfmApiKey) return res.status(500).json({ error: 'Last.fm API key not set' })
    const username = 't_ube' // hardcoding because who in their right mind is gonna selfhost someone else's personal website lmfaoooo

    const data = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${lastfmApiKey}&format=json`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'Node.js/18.18.2; Vercel Serverless Function; www.martin.blue' // idk last.fm asked for a user agent so here it is lol
        }
    }).then((res) => res.json())

    console.log(data)

    if (!data.recenttracks.track[0]['@attr']) {
        res.appendHeader('Cache-Control', /* cache for never */ 'public, no-store, max-age=0, s-maxage=0, must-revalidate').status(206).json(
            { recenttracks: { track: [{ '@attr': { nowplaying: 'false' } }] } }
        )
    }

    res.appendHeader('Cache-Control', /* do NOT cache */ 'public, no-store, max-age=0, s-maxage=0, must-revalidate').status(200).json(data)
}