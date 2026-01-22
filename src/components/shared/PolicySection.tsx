import { ReactNode } from "react";

interface PolicySectionProps {
  number: string;
  title: string;
  children: ReactNode;
}

const PolicySection = ({ number, title, children }: PolicySectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-foreground mb-3">
        {number}. {title}
      </h2>
      <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </section>
  );
};

export default PolicySection;
