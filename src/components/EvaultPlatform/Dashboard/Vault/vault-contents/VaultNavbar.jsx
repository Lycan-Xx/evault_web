import React from "react";
import { ShieldCheck } from "lucide-react";

export function Navbar() {
	return (
		<nav className="bg-blue-600 text-white p-4 rounded-lg">
			<div className="max-w-4xl mx-auto flex items-center gap-2">
				<ShieldCheck className="h-6 w-6" />
				<h1 className="text-xl font-semibold">Vault</h1>
			</div>
		</nav>
	);
}
