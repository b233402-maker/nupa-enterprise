import { ReactNode } from "react";

interface ContactInfoCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  value: string;
}

const ContactInfoCard = ({ icon, title, subtitle, value }: ContactInfoCardProps) => {
  return (
    <div className="flex items-start gap-4 p-4 border border-border rounded-lg">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground mb-1">{subtitle}</p>
        <p className="text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
};

export default ContactInfoCard;
