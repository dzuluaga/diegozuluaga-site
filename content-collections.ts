import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import { z } from "zod";
import { remarkCodeMeta } from "./src/lib/remark-code-meta";

const posts = defineCollection({
    name: "posts",
    directory: "content",
    include: "posts/**/*.mdx",
    schema: z.object({
        title: z.string(),
        publishedAt: z.string(),
        updatedAt: z.string().optional(),
        author: z.string().optional(),
        summary: z.string(),
        image: z.string().optional(),
        content: z.string(),
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document, {
            remarkPlugins: [remarkGfm, remarkCodeMeta],
        });
        return {
        ...document,
            mdx,
        };
    },
});

// Case studies linked from the project cards: content/projects/<slug>.mdx → /projects/<slug>
const projects = defineCollection({
    name: "projects",
    directory: "content/projects",
    include: "*.mdx",
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        role: z.string(),
        period: z.string(),
        content: z.string(),
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document, {
            remarkPlugins: [remarkGfm, remarkCodeMeta],
        });
        return {
            ...document,
            slug: document._meta.path,
            mdx,
        };
    },
});

export default defineConfig({
    collections: [posts, projects],
});
