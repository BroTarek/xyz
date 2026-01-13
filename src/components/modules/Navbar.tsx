"use client";

import Link from "next/link";
import { Menu, X, Rocket } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Blog", href: "/blog" },
        { label: "Dashboard", href: "/dashboard" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-900/70">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <Rocket className="h-6 w-6 text-blue-600" />
                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                        ModernUI
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex md:items-center md:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button size="sm">Get Started</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Links */}
            {isOpen && (
                <div className="border-t border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button className="w-full">Get Started</Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
