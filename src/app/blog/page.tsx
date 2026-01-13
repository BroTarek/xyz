import { Navbar } from "@/components/modules/Navbar";
import { Footer } from "@/components/modules/Footer";
import { BlogPostCard } from "@/components/modules/BlogPostCard";

const posts = [
    {
        title: "The Future of Web Development in 2026",
        excerpt: "Explore the emerging trends in web technologies, from AI-driven development to the rise of edge computing.",
        category: "Technology",
        date: "Jan 12, 2026",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        author: { name: "Alex Chen", role: "Sr. Developer", avatar: "" }
    },
    {
        title: "Designing for Accessibility: A Deep Dive",
        excerpt: "Learn how to create inclusive digital experiences that work for everyone, regardless of their abilities.",
        category: "Design",
        date: "Jan 10, 2026",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        author: { name: "Sarah Miller", role: "Product Designer", avatar: "" }
    },
    {
        title: "Mastering React Server Components",
        excerpt: "A comprehensive guide to understanding and building with Next.js App Router and Server Components.",
        category: "Engineering",
        date: "Jan 05, 2026",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
        author: { name: "James Wilson", role: "Fullstack Engineer", avatar: "" }
    }
];

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-slate-50 py-16 dark:bg-slate-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Our Blog</h1>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                            Insightful articles about web development, design, and product strategy.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <BlogPostCard key={post.title} {...post} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
