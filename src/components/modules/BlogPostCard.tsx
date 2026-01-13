"use client";

import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

interface BlogPostCardProps {
    title: string;
    excerpt: string;
    category: string;
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    date: string;
    image: string;
}

export function BlogPostCard({ title, excerpt, category, author, date, image }: BlogPostCardProps) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md dark:bg-slate-900 dark:ring-slate-800">
            <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                    Image Placeholder
                </div>
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-0"
                    onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                />
                <div className="absolute right-4 top-4">
                    <Badge variant="secondary" className="glass capitalize">
                        {category}
                    </Badge>
                </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
                <div className="flex-1">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {date}
                    </p>
                    <Link href="#" className="mt-2 block">
                        <h3 className="text-xl font-semibold text-slate-900 transition-colors hover:text-blue-600 dark:text-white">
                            {title}
                        </h3>
                    </Link>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                        {excerpt}
                    </p>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                    <Avatar
                        fallback={author.name.charAt(0)}
                        className="h-8 w-8"
                    />
                    <div className="text-sm">
                        <p className="font-semibold text-slate-900 dark:text-white">
                            {author.name}
                        </p>
                        <p className="text-slate-500 dark:text-slate-400">
                            {author.role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
