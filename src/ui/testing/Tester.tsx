"use client";

import { type ReactNode } from "react";
import { ClientComponent } from "@/ui/testing/ClientComponent";

export const Tester = ({ children }: { children: ReactNode }) => {
	return (
		<div className="bg-slate-500">
			<h1>File: tester.tsx</h1>
			<ClientComponent />
            {children}
		</div>
	);
};
