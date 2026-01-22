import { Check, Clock } from "lucide-react";

interface TimelineStep {
  label: string;
  completed: boolean;
  current?: boolean;
}

interface OrderTimelineProps {
  steps: TimelineStep[];
}

const OrderTimeline = ({ steps }: OrderTimelineProps) => {
  return (
    <div className="space-y-3">
      <p className="font-semibold text-foreground text-sm">Progress Timeline:</p>
      {steps.map((step, index) => (
        <div key={index} className="flex items-center gap-3">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
              step.completed
                ? "bg-primary text-primary-foreground"
                : step.current
                ? "bg-amber-500 text-white"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {step.completed ? (
              <Check className="w-4 h-4" />
            ) : step.current ? (
              <Clock className="w-3 h-3" />
            ) : (
              <span className="w-2 h-2 rounded-full bg-current" />
            )}
          </div>
          <span className={`text-sm ${step.completed ? "text-foreground" : "text-muted-foreground"}`}>
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default OrderTimeline;
