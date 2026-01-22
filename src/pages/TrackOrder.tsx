import MainLayout from "@/components/layout/MainLayout";
import PageBanner from "@/components/shared/PageBanner";
import Breadcrumb from "@/components/shared/Breadcrumb";
import OrderCard from "@/components/orders/OrderCard";
import OrderTimeline from "@/components/orders/OrderTimeline";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail } from "lucide-react";

const ongoingOrder = {
  orderId: "NU-ORD-2025-014",
  orderType: "Quotation-Based",
  productCategory: "Warehouse Racking System",
  orderDate: "12 Jan 2026",
  estimatedDelivery: "22-25 Jan 2026",
  timeline: [
    { label: "Order Confirmed", completed: true },
    { label: "Design & Specification Approved", completed: true },
    { label: "Production / Preparation", completed: false, current: true },
    { label: "Ready for Dispatch", completed: false },
    { label: "Delivered", completed: false },
  ],
};

const completedOrders = [
  { orderId: "NU-ORD-2024-089", product: "Supershop Shelving System", orderType: "Online Purchase", deliveredOn: "20 Dec 2024", status: "delivered" as const },
  { orderId: "NU-ORD-2024-076", product: "Heavy Duty Warehouse Racking", orderType: "Quotation-Based", deliveredOn: "18 Nov 2024", status: "delivered" as const },
];

const TrackOrder = () => {
  return (
    <MainLayout>
      <PageBanner 
        title="Track Order" 
        subtitle="Stay Updated on Your Storage Solution" 
      />
      
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Track your Order" }]} />
      </div>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Ongoing Orders */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2">Ongoing Orders</h2>
            <p className="text-muted-foreground text-sm mb-6">Real-time updates on your active orders</p>
            
            <div className="border border-border rounded-xl p-6">
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 mb-4">
                🟡 Processing
              </Badge>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="font-semibold text-foreground">Order ID: {ongoingOrder.orderId}</p>
                  <p className="text-sm text-muted-foreground">Order Type: {ongoingOrder.orderType}</p>
                  <p className="text-sm text-muted-foreground">Product Category: {ongoingOrder.productCategory}</p>
                  <p className="text-sm text-muted-foreground">Order Date: {ongoingOrder.orderDate}</p>
                </div>
                <OrderTimeline steps={ongoingOrder.timeline} />
              </div>

              <div className="bg-primary/10 text-primary rounded-lg p-3 mb-6">
                <p className="text-sm font-medium">Estimated Delivery: {ongoingOrder.estimatedDelivery}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="gap-2 border-primary text-primary">
                  <Phone className="w-4 h-4" />
                  Call Support
                </Button>
                <Button variant="default" size="sm" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Email Support
                </Button>
                <Button variant="outline" size="sm">
                  📄 View Order Details
                </Button>
              </div>
            </div>
          </div>

          {/* Completed Orders */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Completed Orders</h2>
            <p className="text-muted-foreground text-sm mb-6">Your successfully delivered storage solutions</p>
            
            <div className="space-y-4">
              {completedOrders.map((order, index) => (
                <OrderCard key={index} {...order} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default TrackOrder;
