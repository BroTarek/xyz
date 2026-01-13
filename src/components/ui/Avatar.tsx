import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    fallback: string;
}

export function Avatar({ src, alt, fallback, className, ...props }: AvatarProps) {
    return (
        <div
            className={cn(
                "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800",
                className
            )}
            {...props}
        >
            {src ? (
                <img src={src} alt={alt} className="h-full w-full object-cover" />
            ) : (
                <div className="flex h-full w-full items-center justify-center text-sm font-medium text-slate-500">
                    {fallback}
                </div>
            )}
        </div>
    );
}
