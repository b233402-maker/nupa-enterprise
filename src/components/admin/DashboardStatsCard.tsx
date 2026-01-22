import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardStatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subtitle?: string;
  className?: string;
  valueClassName?: string;
}

const DashboardStatsCard = ({
  icon: Icon,
  label,
  value,
  subtitle = "This Month",
  className,
  valueClassName,
}: DashboardStatsCardProps) => {
  return (
    <div className={cn("bg-background rounded-xl border border-border p-5", className)}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
          <Icon className="w-5 h-5 text-muted-foreground" />
        </div>
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <p className={cn("text-2xl font-bold", valueClassName)}>{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
    </div>
  );
};

export default DashboardStatsCard;
