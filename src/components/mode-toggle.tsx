import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-4 mr-4 sm:mr-8">
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "dark" ? (
            <FaMoon className="text-neutral-300" />
          ) : (
            <FaSun className="text-black" />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}