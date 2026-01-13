import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const data = [
    { id: 1, user: "Liam Johnson", email: "liam@example.com", status: "Active", role: "Admin", date: "2023-10-01" },
    { id: 2, user: "Olivia Smith", email: "olivia@example.com", status: "Active", role: "Editor", date: "2023-09-28" },
    { id: 3, user: "Noah Williams", email: "noah@example.com", status: "Inactive", role: "User", date: "2023-09-25" },
    { id: 4, user: "Emma Brown", email: "emma@example.com", status: "Active", role: "Admin", date: "2023-09-20" },
    { id: 5, user: "James Wilson", email: "james@example.com", status: "Pending", role: "Editor", date: "2023-09-15" },
];

export function DataTable() {
    return (
        <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm leading-6">
                    <thead className="border-b border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400">
                        <tr>
                            <th className="px-6 py-4 font-semibold">User</th>
                            <th className="px-6 py-4 font-semibold">Role</th>
                            <th className="px-6 py-4 font-semibold">Status</th>
                            <th className="px-6 py-4 font-semibold">Date</th>
                            <th className="px-6 py-4 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        {data.map((row) => (
                            <tr key={row.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="font-medium text-slate-900 dark:text-white">{row.user}</span>
                                        <span className="text-xs text-slate-500">{row.email}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.role}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Badge
                                        variant={row.status === "Active" ? "success" : row.status === "Pending" ? "secondary" : "outline"}
                                    >
                                        {row.status}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.date}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4 dark:border-slate-800">
                <p className="text-xs text-slate-500">Showing 1 to 5 of 50 entries</p>
                <nav className="flex items-center gap-x-2">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:border-blue-800">
                        1
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        2
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </nav>
            </div>
        </div>
    );
}
