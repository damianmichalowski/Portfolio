import { useTheme } from "@/components/theme-provider";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "dark" | "light";

export const ModeToggle: React.FC = () => {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = (checked: boolean): void => {
    const newTheme: Theme = checked ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center gap-4 mr-4 sm:mr-8">
      <Switch
        checked={theme === "dark"}
        onCheckedChange={handleThemeChange}
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
};