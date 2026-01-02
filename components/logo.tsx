import { cn } from "@/lib/utils";

export const Logo = ({ className, ...props }: React.ComponentProps<"img">) => {
  return (
    <img
      src="/3dthink_ic.png"
      alt="logo"
      className={cn("size-25", className)}
      {...props}
    />
  );
};
