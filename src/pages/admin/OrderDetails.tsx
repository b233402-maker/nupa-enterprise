import { useNavigate } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import StatusBadge from "@/components/admin/StatusBadge";
import DataTable, { Column } from "@/components/admin/DataTable";
import { Button } from "@/components/ui/button";
import { demoOrderDetails } from "@/data/adminData";
import { ArrowLeft, Download, Edit, CheckCircle, Clock } from "lucide-react";

interface Variation {
  id: string;
  name: string;
  depth: string;
  width: string;
  height: string;
  unitPrice: string;
  quantity: number;
  subtotal: string;
}

const OrderDetails = () => {
  const navigate = useNavigate();
  const order = demoOrderDetails;

  const variationColumns: Column<Variation>[] = [
    { header: "Variation", accessor: "name" },
    { header: "Depth", accessor: "depth" },
    { header: "Width", accessor: "width" },
    { header: "Height", accessor: "height" },
    { header: "Unit Price", accessor: "unitPrice" },
    { header: "Quantity", accessor: "quantity" },
    { header: "Subtotal", accessor: "subtotal" },
  ];

  const variationData: Variation[] = order.product.variations.map((v, i) => ({
    id: String(i + 1),
    ...v,
  }));

  return (
    <AdminLayout>
      {/* Back Button */}
      <button
        onClick={() => navigate("/admin/orders")}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Order Details
      </button>

      {/* Order Summary */}
      <div className="bg-background rounded-xl border border-border p-6 mb-4">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Order ID</p>
            <p className="font-semibold">{order.id}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Order Type</p>
            <p className="font-semibold">{order.orderType}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Order Date</p>
            <p className="font-semibold">{order.orderDate}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Order Status</p>
            <StatusBadge status={order.orderStatus} />
          </div>
        </div>

        <h3 className="font-semibold mb-3">Customer Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
          <p>
            <span className="text-muted-foreground">Name:</span>{" "}
            {order.customer.name}
          </p>
          <p>
            <span className="text-muted-foreground">Phone:</span>{" "}
            {order.customer.phone}
          </p>
          <p>
            <span className="text-muted-foreground">Email:</span>{" "}
            {order.customer.email}
          </p>
        </div>
      </div>

      {/* Product Information */}
      <div className="bg-background rounded-xl border border-border p-6 mb-4">
        <h2 className="text-lg font-semibold mb-4">Product Information</h2>
        <p className="font-semibold">{order.product.name}</p>
        <p className="text-sm text-muted-foreground">
          Category: {order.product.category}
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          SKU: {order.product.sku}
        </p>

        <h3 className="font-semibold mb-3">Selected Variations</h3>
        <DataTable columns={variationColumns} data={variationData} />
      </div>

      {/* Price Breakdown */}
      <div className="bg-background rounded-xl border border-border p-6 mb-4">
        <h2 className="text-lg font-semibold mb-4">Price Breakdown</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{order.pricing.subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charge</span>
            <span>{order.pricing.deliveryCharge}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (if applicable)</span>
            <span>{order.pricing.tax}</span>
          </div>
          <div className="flex justify-between font-semibold text-base pt-2 border-t border-border">
            <span>Total Payable</span>
            <span className="text-primary">{order.pricing.total}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
          <div>
            <p className="text-sm text-muted-foreground">Payment Status</p>
            <StatusBadge status={order.payment.status} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Payment Method</p>
            <p className="font-semibold">{order.payment.method}</p>
          </div>
        </div>
      </div>

      {/* Delivery Information */}
      <div className="bg-background rounded-xl border border-border p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Delivery Information</h2>
        <div className="space-y-3 mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Delivery Address:</p>
            <p className="font-semibold">{order.delivery.address}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Estimated Delivery:</p>
            <p className="font-semibold">{order.delivery.estimatedDate}</p>
          </div>
        </div>

        <h3 className="font-semibold mb-3">Delivery Status Timeline</h3>
        <div className="space-y-3">
          {order.delivery.timeline.map((step, index) => (
            <div key={index} className="flex items-center gap-3">
              {step.completed ? (
                <CheckCircle className="w-5 h-5 text-primary" />
              ) : (
                <Clock className="w-5 h-5 text-muted-foreground" />
              )}
              <span
                className={
                  step.completed ? "text-foreground" : "text-muted-foreground"
                }
              >
                {step.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <Button variant="outline" size="icon">
          <Download className="w-4 h-4" />
        </Button>
        <Button>
          <Edit className="w-4 h-4 mr-2" />
          Update Order Status
        </Button>
      </div>
    </AdminLayout>
  );
};

export default OrderDetails;
