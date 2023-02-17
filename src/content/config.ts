import { z, defineCollection } from "astro:content";

const postSchema = defineCollection({
  schema: z.object({
	title: z.string(),
	summary: z.string(),
	author: z.string().default('Brian Hinton'),
	publishedDate: z.date(),
	updatedDate: z.date(),
	tags: z.array(z.string()).optional(),
	isDraft: z.boolean(),
  }),
});

const photoSchema = defineCollection({
	schema: z.object({
		location: z.string(),
		info: z.string().optional(),
		photoDate: z.date(),
		publishedDate: z.date(),
		updatedDate: z.date(),
		image: z.object({
			src: z.string(),
			alt: z.string()
		}),
		tags: z.array(z.string()).optional(),
		isDraft: z.boolean(),
	})
})

const promoSchema = defineCollection({
	schema: z.object({
		title: z.string(),
		link: z.string(),
		summary: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string()
		}),
		review: z.object({
			url: z.string(),
			text: z.string()
		}).optional(),
	})
})

export const collections = {
  posts: postSchema,
  promos: promoSchema,
  photos: photoSchema
};