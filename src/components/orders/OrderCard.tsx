import { FileText, RefreshCcw, Download, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface OrderCardProps {
  orderId: string;
  product: string;
  orderType: string;
  deliveredOn: string;
  status: "delivered" | "processing";
}

const OrderCard = ({ orderId, product, orderType, deliveredOn, status }: OrderCardProps) => {
  return (
    <div className="border border-border rounded-lg p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <p className="font-semibold text-foreground">Order ID: {orderId}</p>
          <p className="text-sm text-muted-foreground">Product: {product}</p>
          <p className="text-sm text-muted-foreground">Order Type: {orderType}</p>
          <p className="text-sm text-muted-foreground">Delivered On: {deliveredOn}</p>
        </div>
        <Badge variant={status === "delivered" ? "default" : "secondary"} className={status === "delivered" ? "bg-primary text-primary-foreground" : ""}>
          {status === "delivered" ? "✓ Delivered Successfully" : "Processing"}
        </Badge>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        <Button variant="outline" size="sm" className="gap-2">
          <FileText className="w-4 h-4" />
          View Invoice
        </Button>
        <Button variant="outline" size="sm" className="gap-2">
          <RefreshCcw className="w-4 h-4" />
          Reorder
        </Button>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="w-4 h-4" />
          Download Documents
        </Button>
        <Button variant="default" size="sm" className="gap-2 bg-destructive hover:bg-destructive/90">
          <MessageSquare className="w-4 h-4" />
          Leave Feedback
        </Button>
      </div>
    </div>
  );
};

export default OrderCard;
