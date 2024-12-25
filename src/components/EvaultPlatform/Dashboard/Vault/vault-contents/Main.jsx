import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Files from "./Files";
import { Passkeys } from "./PassKeys";
import { File, Key } from "lucide-react";

export function Main() {
	const [activeTab, setActiveTab] = useState("files");

	return (
		<div className="w-full max-w-4xl mx-auto p-6">
			{/* Tabs Container */}
			<Tabs.Root
				value={activeTab}
				onValueChange={setActiveTab}
				className="w-full border border-gray-300 rounded-lg shadow-lg bg-white"
			>
				{/* Tabs Header */}
				<Tabs.List
					aria-label="Manage your content"
					className="flex justify-evenly items-center border-b border-gray-300"
				>
					{/* Files Tab */}
					<Tabs.Trigger
						value="files"
						className={`flex items-center justify-center w-full gap-2 px-6 py-4 text-lg font-medium 
							${activeTab === "files" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"} 
							transition-all rounded-lg`}
					>
						<File className="h-5 w-5" />
						<span>Files</span>
					</Tabs.Trigger>

					{/* Passkeys Tab */}
					<Tabs.Trigger
						value="passkeys"
						className={`flex items-center justify-center w-full gap-2 px-6 py-4 text-lg font-medium 
							${activeTab === "passkeys" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"} 
							transition-all rounded-lg`}
					>
						<Key className="h-5 w-5" />
						<span>Passkeys</span>
					</Tabs.Trigger>
				</Tabs.List>

				{/* Tabs Content */}
				<div className="p-6">
					{/* Files Content */}
					<Tabs.Content
						value="files"
						className="fade-in"
					>
						<Files />
					</Tabs.Content>

					{/* Passkeys Content */}
					<Tabs.Content
						value="passkeys"
						className="fade-in"
					>
						<Passkeys />
					</Tabs.Content>
				</div>
			</Tabs.Root>
		</div>
	);
}
