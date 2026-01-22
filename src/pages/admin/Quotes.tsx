import { useState } from "react";
import { Users, FileText, CheckCircle, Clock, Package } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import PageHeader from "@/components/admin/PageHeader";
import DataTable, { Column } from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import { demoQuotes, Quote } from "@/data/adminData";

const quoteStatuses = [
  { value: "new", label: "New", icon: FileText, color: "text-blue-500" },
  { value: "in_review", label: "In Review", icon: Clock, color: "text-yellow-500" },
  { value: "quoted", label: "Quoted", icon: Users, color: "text-purple-500" },
  { value: "approved", label: "Approved", icon: CheckCircle, color: "text-green-500" },
  { value: "converted", label: "Converted to Order", icon: Package, color: "text-primary" },
];

const Quotes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statusCounts = {
    new: demoQuotes.filter((q) => q.status === "new").length,
    in_review: demoQuotes.filter((q) => q.status === "in_review").length,
    quoted: demoQuotes.filter((q) => q.status === "quoted").length,
    approved: demoQuotes.filter((q) => q.status === "approved").length,
    converted: demoQuotes.filter((q) => q.status === "converted").length,
  };

  const columns: Column<Quote>[] = [
    { header: "Quote ID", accessor: "quoteId", className: "font-medium" },
    { header: "Customer", accessor: "customer", className: "text-center" },
    { header: "Product / Category", accessor: "product", className: "text-center" },
    {
      header: "Status",
      accessor: (row) => <StatusBadge status={row.status} />,
      className: "text-center",
    },
    { header: "Date", accessor: "date", className: "text-center" },
    {
      header: "Action",
      accessor: (row) => (
        <Button
          size="sm"
          onClick={() => {
            setSelectedQuote(row);
            setIsModalOpen(true);
          }}
        >
          View Details
        </Button>
      ),
      className: "text-center",
    },
  ];

  const filteredQuotes = demoQuotes.filter((quote) => {
    const matchesSearch =
      quote.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.quoteId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || quote.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <PageHeader
        title="Quote Management"
        subtitle="Manage customer quote requests and send proposals"
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 mb-6">
        {quoteStatuses.map((status) => (
          <div
            key={status.value}
            className="bg-background rounded-xl border border-border p-4"
          >
            <p className="text-sm text-muted-foreground">{status.label}</p>
            <p className="text-2xl font-bold mt-1">
              {statusCounts[status.value as keyof typeof statusCounts]}
            </p>
          </div>
        ))}
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
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="in_review">In Review</SelectItem>
              <SelectItem value="quoted">Quoted</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="converted">Converted</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <DataTable columns={columns} data={filteredQuotes} />

      {/* Quote Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Quote Details</DialogTitle>
            <DialogDescription>{selectedQuote?.quoteId}</DialogDescription>
          </DialogHeader>

          {selectedQuote && (
            <div className="space-y-6">
              {/* Customer Information */}
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4" />
                  <h4 className="font-medium">Customer Information</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Name</p>
                    <p className="font-medium">{selectedQuote.customerDetails.name}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <p className="font-medium">{selectedQuote.customerDetails.email}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Phone</p>
                    <p className="font-medium">{selectedQuote.customerDetails.phone}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Date Requested</p>
                    <p className="font-medium">{selectedQuote.date}</p>
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Package className="w-4 h-4" />
                  <h4 className="font-medium">Product Information</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Product</p>
                    <p className="font-medium">{selectedQuote.productDetails.name}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Category</p>
                    <p className="font-medium">{selectedQuote.productDetails.category}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Requirements</p>
                    <p className="font-medium">{selectedQuote.productDetails.requirements}</p>
                  </div>
                </div>
              </div>

              {/* Quote Details */}
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <h4 className="font-medium">Quote Details</h4>
                  </div>
                  <Button variant="link" size="sm" className="text-primary p-0 h-auto">
                    Add Pricing
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground text-center py-4">
                  No pricing added yet
                </p>
              </div>

              {/* Quote Status */}
              <div>
                <h4 className="font-medium mb-3">Quote Status</h4>
                <RadioGroup defaultValue={selectedQuote.status} className="space-y-2">
                  {quoteStatuses.map((status) => (
                    <div
                      key={status.value}
                      className={`flex items-center space-x-3 p-3 rounded-lg border ${
                        selectedQuote.status === status.value
                          ? "bg-primary/5 border-primary"
                          : "border-border"
                      }`}
                    >
                      <RadioGroupItem value={status.value} id={status.value} />
                      <Label htmlFor={status.value} className="cursor-pointer flex-1">
                        {status.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default Quotes;
