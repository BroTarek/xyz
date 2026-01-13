import { Rocket, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2">
                            <Rocket className="h-6 w-6 text-blue-600" />
                            <span className="text-xl font-bold text-slate-900 dark:text-white">ModernUI</span>
                        </div>
                        <p className="mt-4 max-w-xs text-sm text-slate-600 dark:text-slate-400">
                            Building the future of web interfaces with atomic design and React.
                            The most reliable component library for your next big thing.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Product</h3>
                        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><a href="#" className="hover:text-blue-600">Features</a></li>
                            <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                            <li><a href="#" className="hover:text-blue-600">Documentation</a></li>
                            <li><a href="#" className="hover:text-blue-600">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Connect</h3>
                        <div className="mt-4 flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-blue-600"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-blue-600"><Github className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-blue-600"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
                    <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                        &copy; {new Date().getFullYear()} ModernUI Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
