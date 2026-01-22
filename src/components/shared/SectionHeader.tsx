interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ title, subtitle, className = "", align = "center" }: SectionHeaderProps) => {
  return (
    <div className={`mb-8 lg:mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
