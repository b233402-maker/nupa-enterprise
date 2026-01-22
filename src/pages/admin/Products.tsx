import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2 } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import PageHeader from "@/components/admin/PageHeader";
import DataTable, { Column } from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { demoProducts, Product } from "@/data/adminData";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const columns: Column<Product>[] = [
    { 
      header: "Product Name", 
      accessor: "name", 
      className: "font-medium" 
    },
    {
      header: "Type",
      accessor: (row) => <StatusBadge status={row.type} />,
    },
    { 
      header: "Price", 
      accessor: "price", 
      className: "text-center" 
    },
    {
      header: "Stock Status",
      accessor: (row) => <StatusBadge status={row.stockStatus} />,
      className: "text-center",
    },
    {
      header: "Action",
      accessor: (row) => (
        <div className="flex items-center justify-center gap-2">
          <Link to={`/admin/products/${row.id}/edit`}>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Pencil className="w-4 h-4" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ),
      className: "text-center",
    },
  ];

  const filteredProducts = demoProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    const matchesType = typeFilter === "all" || product.type === typeFilter;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <PageHeader
          title="Products Management"
          subtitle="Manage your product catalog"
        />
        <Link to="/admin/products/new">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-background rounded-xl border border-border p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Industrial Storage Shelves">Industrial Storage Shelves</SelectItem>
              <SelectItem value="Warehouse Equipment">Warehouse Equipment</SelectItem>
              <SelectItem value="Office Shelves">Office Shelves</SelectItem>
              <SelectItem value="Commercial Racks">Commercial Racks</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="buy_online">Buy Online</SelectItem>
              <SelectItem value="quote_only">Quote Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <DataTable columns={columns} data={filteredProducts} />
    </AdminLayout>
  );
};

export default Products;
