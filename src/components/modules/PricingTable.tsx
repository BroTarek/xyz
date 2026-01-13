import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Starter",
        price: "$0",
        description: "Perfect for hobbyists and side projects.",
        features: ["5 Projects", "Basic Analytics", "Community Support", "1GB Storage"],
        cta: "Start for Free",
        popular: false,
    },
    {
        name: "Pro",
        price: "$29",
        description: "Ideal for growing teams and professionals.",
        features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "20GB Storage", "Custom Domains"],
        cta: "Get Pro Now",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "$99",
        description: "Scalable solutions for large organizations.",
        features: ["Everything in Pro", "Single Sign-On (SSO)", "Dedicated Account Manager", "Unlimited Storage", "Custom Contracts"],
        cta: "Contact Sales",
        popular: false,
    },
];

export function PricingTable() {
    return (
        <section id="pricing" className="py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Choose the plan that's right for you. No hidden fees.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800",
                                plan.popular && "ring-2 ring-blue-600 dark:ring-blue-500 scale-105 z-10"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <Badge className="bg-blue-600">Most Popular</Badge>
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold leading-8 text-slate-900 dark:text-white">
                                    {plan.name}
                                </h3>
                                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                    {plan.description}
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                                        {plan.price}
                                    </span>
                                    <span className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400">
                                        /month
                                    </span>
                                </p>
                            </div>
                            <ul className="mb-8 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <Check className="h-6 w-5 flex-none text-blue-600" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant={plan.popular ? "primary" : "outline"}
                                className="mt-auto w-full"
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
