import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id?: string;
  noBorder?: boolean;
}

const Section = ({ children, className, id, noBorder = false, ...props }: SectionProps) => {
  return (
    <div
      id={id}
      className={cn(
        "widescreen:section-min-height tallscreen:section-min-height",
        !noBorder && "border-b border-neutral-300 dark:border-neutral-900",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Section; 