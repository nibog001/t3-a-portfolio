import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const instagramRouter = createTRPCRouter({
    getAll: publicProcedure.query(async (ctx) => {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,username,media_type,permalink,children{media_url,thumbnail_url,media_type}&access_token=${process.env.INSTAGRAM_KEY_A}`;
    
        const data = await fetch(url)
        const feed = await data.json()
        return feed.data;
      }),
});
