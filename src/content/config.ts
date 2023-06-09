// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const gallery = defineCollection({
  schema: z.object({
    img: z.string(),
    img_alt: z.string().optional(),
    titre: z.string(),
    légende: z.string(),
    lieu: z.string(),

  }),
});


export const collections = {
  gallery,
};
// 3. Export a single `collections` object to register your collection(s)
