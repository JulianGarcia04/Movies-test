import { z } from 'zod';

export const MovieSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  rating: z.number(),
  duration: z.string(),
  genre: z.string().array(),
  releasedDate: z.preprocess(
    (val) => new Date(val as string),
    z.date(),
  ),
  trailerLink: z.string().url(),
  image: z.string(),
});

export type Movie = z.infer<
  typeof MovieSchema
>;
