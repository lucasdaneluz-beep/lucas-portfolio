import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/utils";

type HoverLiftLinkProps = LinkProps & {
  className?: string;
};

const HoverLiftLink = ({ className, ...props }: HoverLiftLinkProps) => (
  <Link {...props} className={cn("hover-lift", className)} />
);

export default HoverLiftLink;
