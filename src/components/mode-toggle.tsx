import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<div className="flex items-center gap-4 mr-8">
			<Switch
				checked={theme === "dark"}
				onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
			/>
			{theme === "dark" ? (
				<FaMoon className="text-neutral-300" />
			) : (
				<FaSun className="text-black" />
			)}
		</div>
	);
}
