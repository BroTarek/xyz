"use client";

import React from "react";
import { Avatar } from "@/components/ui/Avatar";

const testimonials = [
    {
        name: "Alex Rivers",
        role: "Lead Designer at CreativePulse",
        content: "The modern UI components provided here completely transformed our design workflow. The attention to detail and ease of integration are unmatched.",
        avatar: "https://i.pravatar.cc/150?u=alex"
    },
    {
        name: "Sarah Chen",
        role: "CTO at TechFlow",
        content: "We've tried many UI kits, but this one stands out for its performance and clean architecture. It's built for scale and beauty.",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "Jordan Smith",
        role: "Full Stack Developer",
        content: "The documentation is incredible and the components are very flexible. I was able to build a prototype in record time.",
        avatar: "https://i.pravatar.cc/150?u=jordan"
    },
    {
        name: "Elena Rodriguez",
        role: "Product Manager at Innovate",
        content: "Our users love the look and feel of our new application. The glassmorphism effects are subtle yet effective.",
        avatar: "https://i.pravatar.cc/150?u=elena"
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        What People are Saying
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Join thousands of developers and designers who are building the future with our modern UI components.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="glass p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
                        >
                            <p className="text-muted-foreground mb-8 italic">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <Avatar
                                    className="h-10 w-10 border border-primary/20"
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    fallback={testimonial.name.slice(0, 2).toUpperCase()}
                                />
                                <div>
                                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
