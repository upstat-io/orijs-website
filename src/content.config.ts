import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docsSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  order: z.number().optional(),
});

const guide = defineCollection({
  loader: glob({ pattern: '[0-9][0-9]-*.md', base: '../orijs/guide' }),
  schema: docsSchema,
});

const docs = defineCollection({
  loader: glob({ pattern: '[!_]*.md', base: '../orijs/docs' }),
  schema: docsSchema,
});

export const collections = { guide, docs };
