import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import PageHeader from "@/components/admin/PageHeader";
import SearchFilter from "@/components/admin/SearchFilter";
import DataTable, { Column } from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { demoPayments, Payment } from "@/data/adminData";

const Payments = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

  const filteredPayments = demoPayments.filter(
    (payment) =>
      payment.orderId.toLowerCase().includes(searchValue.toLowerCase()) ||
      payment.paymentId.toLowerCase().includes(searchValue.toLowerCase()) ||
      payment.customer.toLowerCase().includes(searchValue.toLowerCase())
  );

  const columns: Column<Payment>[] = [
    { header: "Order ID", accessor: "orderId", className: "font-medium" },
    { header: "Payment ID", accessor: "paymentId" },
    { header: "Customer", accessor: "customer" },
    { header: "Amount", accessor: "amount" },
    { header: "Date", accessor: "date" },
    {
      header: "Action",
      accessor: (row) => (
        <Button size="sm" onClick={() => setSelectedPayment(row)}>
          View Details
        </Button>
      ),
      className: "text-center",
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        title="Payments Management"
        subtitle="Track and manage all payment transactions"
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-background rounded-xl border border-border p-5">
          <p className="text-sm text-muted-foreground">Total Received</p>
          <p className="text-2xl font-bold text-primary">৳2,730,000</p>
        </div>
        <div className="bg-background rounded-xl border border-border p-5">
          <p className="text-sm text-muted-foreground">Pending Payments</p>
          <p className="text-2xl font-bold text-yellow-600">৳1,250,000</p>
        </div>
        <div className="bg-background rounded-xl border border-border p-5">
          <p className="text-sm text-muted-foreground">Failed Payments</p>
          <p className="text-2xl font-bold text-red-600">৳320,000</p>
        </div>
      </div>

      <SearchFilter
        searchPlaceholder="Search by payment ID, order ID, or customer..."
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />

      <DataTable
        columns={columns}
        data={filteredPayments}
        emptyMessage="No payments found"
      />

      {/* Payment Details Modal */}
      <Dialog
        open={!!selectedPayment}
        onOpenChange={() => setSelectedPayment(null)}
      >
        <DialogContent className="sm:max-w-md max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
          </DialogHeader>
          {selectedPayment && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Payment ID</p>
                  <p className="font-semibold">{selectedPayment.paymentId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Order ID</p>
                  <p className="font-semibold">{selectedPayment.orderId}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Customer</p>
                  <p className="font-semibold">{selectedPayment.customer}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-semibold">{selectedPayment.date}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Amount</p>
                  <p className="text-xl font-bold">{selectedPayment.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Product</p>
                  <p className="font-semibold">{selectedPayment.product}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <StatusBadge status={selectedPayment.status} />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default Payments;
