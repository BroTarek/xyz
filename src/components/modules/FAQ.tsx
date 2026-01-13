"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "How easy is it to integrate with existing projects?",
        answer: "Extremely easy. Our components are built as primitive-first, meaning you can drop them into any React project (Next.js, Vite, etc.) and they will work seamlessly with your existing Tailwind CSS setup."
    },
    {
        question: "Do you offer custom design services?",
        answer: "While we provide a comprehensive library, we also work with select partners for custom enterprise design systems. Reach out to our sales team for more information."
    },
    {
        question: "Is there a dark mode support?",
        answer: "Yes! Every component is built with native dark mode support using Tailwind's dark: variant. It detects the user's system preference or your manual theme toggle out of the box."
    },
    {
        question: "What is the license for these components?",
        answer: "Most of our core components are open-source under the MIT license. Premium blocks and enterprise templates require a commercial license."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground">Everything you need to know about our modern UI library.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="glass border border-white/10 rounded-2xl overflow-hidden reveal"
                            style={{ transitionDelay: `${idx * 0.1}s` }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 dark:hover:bg-slate-800/50 transition-colors"
                            >
                                <span className="font-semibold">{faq.question}</span>
                                <ChevronDown
                                    className={cn(
                                        "h-5 w-5 text-muted-foreground transition-transform duration-300",
                                        openIndex === idx && "rotate-180"
                                    )}
                                />
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === idx ? "max-h-40 pb-6 px-6" : "max-h-0"
                                )}
                            >
                                <p className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
