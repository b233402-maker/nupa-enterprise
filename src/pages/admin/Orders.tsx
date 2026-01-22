import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import PageHeader from "@/components/admin/PageHeader";
import SearchFilter from "@/components/admin/SearchFilter";
import DataTable, { Column } from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/button";
import { demoOrders, orderStatusOptions, Order } from "@/data/adminData";

const Orders = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredOrders = demoOrders.filter((order) => {
    const matchesSearch =
      order.orderId.toLowerCase().includes(searchValue.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchValue.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || order.deliveryStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const columns: Column<Order>[] = [
    {
      header: "Order ID",
      accessor: "orderId",
      className: "font-medium",
    },
    {
      header: "Customer Name",
      accessor: "customerName",
    },
    {
      header: "Total Amount",
      accessor: "totalAmount",
    },
    {
      header: "Delivery Status",
      accessor: (row) => <StatusBadge status={row.deliveryStatus} />,
      className: "text-center",
    },
    {
      header: "Date",
      accessor: "date",
    },
    {
      header: "Action",
      accessor: (row) => (
        <Button
          size="sm"
          onClick={() => navigate(`/admin/orders/${row.id}`)}
        >
          View Details
        </Button>
      ),
      className: "text-center",
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        title="Orders Management"
        subtitle="Manage and track all customer orders"
      />

      <SearchFilter
        searchPlaceholder="Search by order ID or customer name..."
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        filterOptions={orderStatusOptions}
        filterValue={statusFilter}
        onFilterChange={setStatusFilter}
      />

      <DataTable
        columns={columns}
        data={filteredOrders}
        emptyMessage="No orders found"
      />
    </AdminLayout>
  );
};

export default Orders;
