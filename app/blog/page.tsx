import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/index";
import { CallToAction } from "@/components/sections/Sections";

export const metadata: Metadata = {
  title: "Journal — JK Technology Limited",
  description:
    "Insights and practical guides for Nigerian event business owners who want to attract better clients and grow their online presence.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-8" style={{ backgroundColor: "var(--navy-950)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-rule-short" />
            <span className="label-sm" style={{ color: "var(--gold-400)" }}>Journal</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h1 className="display-xl" style={{ color: "var(--cream-50)" }}>
              Insights for event{" "}
              <em className="not-italic gold-text">business owners.</em>
            </h1>
            <p className="text-lg" style={{ color: "rgba(249,247,240,0.5)", fontWeight: 300 }}>
              Practical guides and strategies written specifically for Nigerian
              event vendors who want to attract better clients and grow their
              digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section-pad" style={{ backgroundColor: "var(--cream-50)" }}>
        <div className="max-w-5xl mx-auto px-8">

          {/* Featured */}
          <div className="mb-2">
            <div
              className="grid md:grid-cols-5 gap-0 border"
              style={{ borderColor: "var(--navy-900)" }}
            >
              <div
                className="md:col-span-2 p-10 md:p-14 flex flex-col justify-between"
                style={{ background: "var(--navy-900)" }}
              >
                <div>
                  <p className="label-sm mb-2" style={{ color: "var(--gold-400)" }}>
                    Featured — {blogPosts[0].category}
                  </p>
                  <p className="label-sm" style={{ color: "rgba(249,247,240,0.25)" }}>
                    {blogPosts[0].readTime} read · {blogPosts[0].date}
                  </p>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="label-sm mt-10 flex items-center gap-2 transition-colors duration-200"
                  style={{ color: "var(--gold-400)" }}
                >
                  Read article
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div
                className="md:col-span-3 p-10 md:p-14"
                style={{ background: "var(--cream-50)", borderLeft: "1px solid var(--cream-300)" }}
              >
                <h2 className="font-display text-3xl font-light leading-snug mb-5"
                  style={{ color: "var(--navy-900)" }}>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="transition-colors duration-200 hover:text-navy-600"
                  >
                    {blogPosts[0].title}
                  </Link>
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(6,14,42,0.55)", fontWeight: 300 }}>
                  {blogPosts[0].excerpt}
                </p>
              </div>
            </div>
          </div>

          {/* Remaining posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-2" style={{ background: "var(--cream-300)" }}>
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-8 group transition-all duration-200"
                style={{ background: "var(--cream-50)" }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="label-sm" style={{ color: "var(--navy-500)" }}>{post.category}</span>
                  <span className="label-sm" style={{ color: "rgba(6,14,42,0.25)" }}>{post.readTime}</span>
                </div>
                <h3
                  className="font-display text-xl font-light leading-snug mb-3 transition-colors duration-200 group-hover:text-navy-600"
                  style={{ color: "var(--navy-900)" }}
                >
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(6,14,42,0.45)", fontWeight: 300 }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="label-sm" style={{ color: "rgba(6,14,42,0.25)" }}>{post.date}</span>
                  <svg
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    style={{ color: "var(--navy-600)" }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
