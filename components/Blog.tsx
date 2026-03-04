import { type Post } from "@/lib/posts";
import Link from "next/link";

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <section id="blog" className="scroll-mt-24 border-b border-zinc-100 py-14 sm:py-16" aria-labelledby="blog-title">
      <h2 id="blog-title" className="text-lg font-semibold text-zinc-900">
        Writing
      </h2>
      {posts.length === 0 ? (
        <p className="mt-4 text-sm text-zinc-500">Coming soon.</p>
      ) : (
        <ul className="mt-6 space-y-1">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="-mx-3 rounded-lg px-3 py-3 transition-colors duration-150 hover:bg-zinc-50"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="font-medium text-zinc-900">{post.title}</span>
                  <span className="text-sm text-zinc-400">{post.date}</span>
                </div>
                {post.summary && (
                  <p className="mt-1 text-sm text-zinc-500">{post.summary}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
