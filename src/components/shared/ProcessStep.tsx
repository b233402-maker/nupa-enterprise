import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ProcessStepProps {
  icon: ReactNode;
  title: string;
  showArrow?: boolean;
}

const ProcessStep = ({ icon, title, showArrow = true }: ProcessStepProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
          {icon}
        </div>
        <p className="text-sm font-medium text-foreground">{title}</p>
      </div>
      {showArrow && (
        <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
      )}
    </div>
  );
};

export default ProcessStep;
