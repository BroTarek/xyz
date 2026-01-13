"use client";

import React from "react";

const sponsors = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
];

export const SponsorsBanner = () => {
    return (
        <section className="py-12 bg-secondary/30 overflow-hidden relative">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                    Trusted by Industry Leaders
                </h2>
            </div>

            <div className="flex select-none overflow-hidden pause-on-hover [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex min-w-full shrink-0 items-center justify-around gap-12 py-4 animate-scroll">
                    {[...sponsors, ...sponsors].map((sponsor, idx) => (
                        <div
                            key={`${sponsor.name}-${idx}`}
                            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="h-8 w-auto max-w-[120px] object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
