import { mdxComponents } from "@/mdx-components";
import { MDXContent } from "@content-collections/mdx/react";
import { allProjects } from "content-collections";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.summary, type: "article" },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto w-full max-w-2xl flex flex-col gap-8">
      <Link
        href="/#projects"
        className="inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-3.5" aria-hidden />
        All projects
      </Link>
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl text-balance">
          {project.title}
        </h1>
        <p className="text-muted-foreground md:text-lg text-pretty">{project.summary}</p>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
          <dt className="text-muted-foreground">Role</dt>
          <dd>{project.role}</dd>
          <dt className="text-muted-foreground">When</dt>
          <dd>{project.period}</dd>
        </dl>
      </header>
      <article className="prose max-w-full text-pretty font-sans leading-relaxed dark:prose-invert">
        <MDXContent code={project.mdx} components={mdxComponents} />
      </article>
    </main>
  );
}
