import type { Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
	title: "Products",
	description: "Products Page",
};

export function ProductsLayout({
	children,
}: {
	children: ReactNode;
}) {
	return <div className="bg-slate-400">{children}</div>;
}
