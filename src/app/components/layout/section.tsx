import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  bg?:
    | "rolex-green"
    | "rolex-gold"
    | "rolex-champagne"
    | "rolex-black"
    | "rolex-charcoal"
    | "rolex-ivory"
    | "rolex-offwhite"
    | "rolex-silver"
    | "rolex-white";
  noPadd?: boolean;
}

const Section = ({
  children,
  className,
  bg,
  noPadd,
  ...props
}: SectionProps) => {
  const bgClass = bg ? `bg-${bg}` : "bg-rolex-white";
  const defaultPadding = noPadd ? "" : "py-16 md:py-20 lg:py-28";

  // if (bg === 'primary')
  //   defaultPadding = 'py-8 md:py-12 lg:py-32 my-4 md:my-8 lg:my-16'

  // console.log("🚀 ~ file: section.tsx:13 ~ Section ~ bgClass:", bgClass)
  return (
    <section {...props} className={cn(defaultPadding, bgClass, className)}>
      {children}
    </section>
  );
};
export default Section;
