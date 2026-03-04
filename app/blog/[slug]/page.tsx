import { getAllPosts, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} — Jacob Wright` };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <Link href="/#blog" className="text-sm text-zinc-400 transition-colors hover:text-zinc-900">
        ← Back
      </Link>
      <article className="mt-8">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">{post.title}</h1>
          <p className="mt-2 text-sm text-zinc-400">{post.date}</p>
        </header>
        <div className="prose prose-zinc mt-8 max-w-none text-zinc-600 prose-headings:text-zinc-900 prose-a:text-zinc-900">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
