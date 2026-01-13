import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "secondary" | "outline" | "destructive" | "success";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-600/80",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-100",
        outline: "text-slate-950 border border-slate-200 dark:text-slate-50 dark:border-slate-800",
        destructive: "bg-red-500 text-white hover:bg-red-500/80",
        success: "bg-emerald-500 text-white hover:bg-emerald-500/80",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    );
}
