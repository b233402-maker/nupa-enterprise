import { useState } from "react";
import { Calendar, Truck, CheckCircle, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import AdminLayout from "@/components/admin/AdminLayout";
import PageHeader from "@/components/admin/PageHeader";
import DataTable, { Column } from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { demoDeliveries, Delivery } from "@/data/adminData";

interface DeliveryFormData {
  status: string;
  assignedDate: string;
  deliveryDate: string;
  newNote: string;
}

const DeliveryManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedDelivery, setSelectedDelivery] = useState<Delivery | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trackingNotes, setTrackingNotes] = useState<string[]>([
    "Package picked up from warehouse",
    "In transit to Lagos",
    "Out for delivery",
  ]);

  const { register, handleSubmit, reset, watch, setValue } = useForm<DeliveryFormData>({
    defaultValues: {
      status: "out_for_delivery",
      assignedDate: "",
      deliveryDate: "",
      newNote: "",
    },
  });

  const statusCounts = {
    pending: demoDeliveries.filter((d) => d.status === "pending").length,
    out_for_delivery: demoDeliveries.filter((d) => d.status === "out_for_delivery").length,
    delivered: demoDeliveries.filter((d) => d.status === "delivered").length,
  };

  const columns: Column<Delivery>[] = [
    { header: "Delivery ID", accessor: "deliveryId", className: "font-medium" },
    { header: "Order ID", accessor: "orderId", className: "text-center" },
    { header: "Customer", accessor: "customer", className: "text-center" },
    {
      header: "Status",
      accessor: (row) => <StatusBadge status={row.status} />,
      className: "text-center",
    },
    { header: "Delivery Date", accessor: "deliveryDate", className: "text-center" },
    {
      header: "Action",
      accessor: (row) => (
        <Button
          size="sm"
          onClick={() => {
            setSelectedDelivery(row);
            setValue("status", row.status);
            setIsModalOpen(true);
          }}
        >
          Update
        </Button>
      ),
      className: "text-center",
    },
  ];

  const filteredDeliveries = demoDeliveries.filter((delivery) => {
    const matchesSearch =
      delivery.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      delivery.deliveryId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      delivery.orderId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || delivery.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const addTrackingNote = () => {
    const newNote = watch("newNote");
    if (newNote.trim()) {
      setTrackingNotes([...trackingNotes, newNote.trim()]);
      setValue("newNote", "");
    }
  };

  const onSubmit = (data: DeliveryFormData) => {
    console.log("Update Delivery:", { ...data, trackingNotes });
    setIsModalOpen(false);
    reset();
  };

  return (
    <AdminLayout>
      <PageHeader
        title="Delivery Management"
        subtitle="Track and update delivery status"
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-6">
        <div className="bg-background rounded-xl border border-border p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Pending Deliveries</p>
            <p className="text-2xl font-bold">{statusCounts.pending}</p>
          </div>
        </div>
        <div className="bg-background rounded-xl border border-border p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
            <Truck className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Out for Delivery</p>
            <p className="text-2xl font-bold">{statusCounts.out_for_delivery}</p>
          </div>
        </div>
        <div className="bg-background rounded-xl border border-border p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Delivered</p>
            <p className="text-2xl font-bold">{statusCounts.delivered}</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-background rounded-xl border border-border p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="out_for_delivery">Out for Delivery</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <DataTable columns={columns} data={filteredDeliveries} />

      {/* Update Delivery Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Update Delivery</DialogTitle>
            <DialogDescription>
              {selectedDelivery?.deliveryId} - {selectedDelivery?.orderId}
            </DialogDescription>
          </DialogHeader>

          {selectedDelivery && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Customer Info */}
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Customer</p>
                    <p className="font-medium">{selectedDelivery.customer}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Delivery Address</p>
                    <p className="font-medium">{selectedDelivery.address}</p>
                  </div>
                </div>
              </div>

              {/* Delivery Status */}
              <div>
                <Label>Delivery Status</Label>
                <Select
                  value={watch("status")}
                  onValueChange={(value) => setValue("status", value)}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="out_for_delivery">Out for delivery</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Assigned Date
                  </Label>
                  <Input type="date" className="mt-2" {...register("assignedDate")} />
                </div>
                <div>
                  <Label className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Delivery Date
                  </Label>
                  <Input type="date" className="mt-2" {...register("deliveryDate")} />
                </div>
              </div>

              {/* Tracking Notes */}
              <div>
                <Label className="flex items-center gap-2 mb-3">
                  <Truck className="w-4 h-4" />
                  Tracking Notes
                </Label>
                <div className="space-y-2">
                  {trackingNotes.map((note, index) => (
                    <div key={index} className="flex items-center gap-3 bg-muted/30 rounded-lg p-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </div>
                      <span className="text-sm">{note}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-3">
                  <Input
                    placeholder="Add tracking note..."
                    {...register("newNote")}
                  />
                  <Button type="button" size="icon" onClick={addTrackingNote}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Info Banner */}
              <div className="bg-primary/10 text-primary rounded-lg p-4 text-sm">
                These updates will appear on the customer's Track Order page
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Update Delivery
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default DeliveryManagement;
