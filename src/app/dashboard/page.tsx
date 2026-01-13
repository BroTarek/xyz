import { Navbar } from "@/components/modules/Navbar";
import { DataTable } from "@/components/modules/DataTable";
import { Users, DollarSign, Activity, FileText } from "lucide-react";

export default function DashboardPage() {
    const stats = [
        { label: "Total Users", value: "12,450", icon: Users, change: "+12%", trend: "up" },
        { label: "Revenue", value: "$45,200", icon: DollarSign, change: "+8%", trend: "up" },
        { label: "Active Now", value: "534", icon: Activity, change: "-4%", trend: "down" },
        { label: "Reports", value: "24", icon: FileText, change: "+2", trend: "up" },
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-slate-50 p-8 dark:bg-slate-950">
                <div className="container mx-auto">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h1>
                        <p className="text-slate-600 dark:text-slate-400">Welcome back, here's what's happening today.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                                <div className="flex items-center justify-between">
                                    <div className="rounded-lg bg-blue-50 p-2 text-blue-600 dark:bg-blue-900/30">
                                        <stat.icon className="h-6 w-6" />
                                    </div>
                                    <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                                        {stat.change}
                                    </span>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-sm font-medium text-slate-500">{stat.label}</h3>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                        <div className="border-b border-slate-200 p-6 dark:border-slate-800">
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Transactions</h2>
                        </div>
                        <div className="p-6">
                            <DataTable />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
