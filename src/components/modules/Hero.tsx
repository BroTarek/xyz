import { Button } from "@/components/ui/Button";
import { ArrowRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { BackgroundBlobs } from "./BackgroundBlobs";
import { DashboardMockup } from "./DashboardMockup";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-950 sm:py-32">
            <BackgroundBlobs />
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20 dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.900),theme(colors.slate.950))]" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-8 flex justify-center">
                        <Badge variant="secondary" className="px-3 py-1 animate-in">
                            <Star className="mr-1 h-3 w-3 text-yellow-500 fill-yellow-500" />
                            Trusted by 10,000+ teams
                        </Badge>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl animate-in">
                        Build Stunning Interfaces <br />
                        <span className="text-blue-600">Faster Than Ever</span>
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 animate-in" style={{ animationDelay: '0.1s' }}>
                        The most comprehensive React component library for modern SaaS.
                        Beautifully designed, accessible, and ready for production.
                        Everything you need in one place.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6 animate-in" style={{ animationDelay: '0.2s' }}>
                        <Button size="lg" className="group shimmer">
                            Get Started Free
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="lg">
                            Live Demo
                        </Button>
                    </div>
                </div>

                {/* Hero Mockup */}
                <div className="mt-16 flow-root sm:mt-24 reveal">
                    <div className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 dark:bg-slate-50/5 dark:ring-slate-50/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <div className="rounded-md bg-white shadow-2xl ring-1 ring-slate-900/10 dark:bg-slate-900">
                            <div className="h-[500px] w-full bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center relative">
                                <DashboardMockup />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
