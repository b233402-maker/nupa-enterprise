import { useState } from "react";
import { useForm } from "react-hook-form";
import { Upload, Plus, Trash2 } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import PageHeader from "@/components/admin/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductVariation {
  id: string;
  depth: string;
  width: string;
  height: string;
  price: string;
  stock: string;
  sku: string;
}

interface ProductFormData {
  name: string;
  category: string;
  productType: "buy_online" | "quote_only";
  shortDescription: string;
  detailedDescription: string;
  status: string;
  featured: boolean;
  showInSearch: boolean;
  showAddToCart: boolean;
  showBuyNow: boolean;
  minimumOrderQuantity: number;
}

const AddProduct = () => {
  const { register, handleSubmit, watch, setValue } = useForm<ProductFormData>({
    defaultValues: {
      productType: "buy_online",
      status: "in_stock",
      featured: false,
      showInSearch: true,
      showAddToCart: true,
      showBuyNow: true,
      minimumOrderQuantity: 1,
    },
  });

  const [variations, setVariations] = useState<ProductVariation[]>([
    { id: "1", depth: '18"', width: '36"', height: '72"', price: "12500", stock: "10", sku: "CW-18-36-72" },
    { id: "2", depth: '24"', width: '48"', height: '84"', price: "18000", stock: "6", sku: "CW-24-48-84" },
  ]);

  const addVariation = () => {
    const newVariation: ProductVariation = {
      id: Date.now().toString(),
      depth: "",
      width: "",
      height: "",
      price: "",
      stock: "",
      sku: "",
    };
    setVariations([...variations, newVariation]);
  };

  const removeVariation = (id: string) => {
    setVariations(variations.filter((v) => v.id !== id));
  };

  const updateVariation = (id: string, field: keyof ProductVariation, value: string) => {
    setVariations(
      variations.map((v) => (v.id === id ? { ...v, [field]: value } : v))
    );
  };

  const onSubmit = (data: ProductFormData) => {
    console.log("Product Data:", { ...data, variations });
  };

  const totalVariations = variations.length;
  const activeVariations = variations.filter((v) => parseInt(v.stock) > 0).length;
  const totalStock = variations.reduce((acc, v) => acc + (parseInt(v.stock) || 0), 0);
  const prices = variations.map((v) => parseInt(v.price) || 0).filter((p) => p > 0);
  const priceRange = prices.length > 0 
    ? `৳${Math.min(...prices).toLocaleString()} - ৳${Math.max(...prices).toLocaleString()}`
    : "N/A";

  return (
    <AdminLayout>
      <PageHeader
        title="Add New Product"
        subtitle="Create a new product with variations and complete details"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Product Information */}
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold mb-4">Basic Product Information</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    placeholder="4-Tier Chrome Wire Shelving Unit"
                    {...register("name")}
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => setValue("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Industrial Storage Shelves">Industrial Storage Shelves</SelectItem>
                      <SelectItem value="Warehouse Equipment">Warehouse Equipment</SelectItem>
                      <SelectItem value="Office Shelves">Office Shelves</SelectItem>
                      <SelectItem value="Commercial Racks">Commercial Racks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Product Type</Label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="buy_online"
                        {...register("productType")}
                        className="w-4 h-4"
                      />
                      <span>Buy Online</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="quote_only"
                        {...register("productType")}
                        className="w-4 h-4"
                      />
                      <span>Quote Only</span>
                    </label>
                  </div>
                </div>
                <div>
                  <Label htmlFor="shortDescription">Short Description</Label>
                  <Input
                    id="shortDescription"
                    placeholder="Brief product description"
                    {...register("shortDescription")}
                  />
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold mb-4">Product Description</h3>
              <div>
                <Label htmlFor="detailedDescription">Detailed Description</Label>
                <Textarea
                  id="detailedDescription"
                  placeholder="• Feature 1&#10;• Feature 2&#10;• Load capacity&#10;• Usage instructions"
                  className="min-h-[150px]"
                  {...register("detailedDescription")}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Use bullet points (•) for better formatting
                </p>
              </div>
            </div>

            {/* Product Images */}
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold mb-4">Product Images</h3>
              <div className="space-y-4">
                <div>
                  <Label>Main Product Image</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mt-2 cursor-pointer hover:border-primary/50 transition-colors">
                    <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Click to upload main image</p>
                    <p className="text-xs text-muted-foreground">Recommended: 800x800px, PNG or JPG</p>
                  </div>
                </div>
                <div>
                  <Label>Gallery Images</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mt-2 cursor-pointer hover:border-primary/50 transition-colors">
                    <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Click to upload gallery images</p>
                    <p className="text-xs text-muted-foreground">Recommended: 800x800px, PNG or JPG</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buy Button Settings */}
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold mb-4">Buy Button Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="showAddToCart">Show Add to Cart</Label>
                  <Switch
                    id="showAddToCart"
                    checked={watch("showAddToCart")}
                    onCheckedChange={(checked) => setValue("showAddToCart", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="showBuyNow">Show Buy Now</Label>
                  <Switch
                    id="showBuyNow"
                    checked={watch("showBuyNow")}
                    onCheckedChange={(checked) => setValue("showBuyNow", checked)}
                  />
                </div>
                <div>
                  <Label htmlFor="minimumOrderQuantity">Minimum Order Quantity</Label>
                  <Input
                    id="minimumOrderQuantity"
                    type="number"
                    min={1}
                    className="w-24 mt-2"
                    {...register("minimumOrderQuantity", { valueAsNumber: true })}
                  />
                </div>
              </div>
            </div>

            {/* Product Variations */}
            <div className="bg-background rounded-xl border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Product Variations</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage product size options with pricing and inventory
                  </p>
                </div>
                <Button type="button" onClick={addVariation} variant="outline" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Variation
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 text-sm font-medium">Depth</th>
                      <th className="text-left py-3 px-2 text-sm font-medium">Width</th>
                      <th className="text-left py-3 px-2 text-sm font-medium">Height</th>
                      <th className="text-left py-3 px-2 text-sm font-medium">Price (৳)</th>
                      <th className="text-left py-3 px-2 text-sm font-medium">Stock</th>
                      <th className="text-left py-3 px-2 text-sm font-medium">SKU</th>
                      <th className="text-center py-3 px-2 text-sm font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {variations.map((variation) => (
                      <tr key={variation.id} className="border-b border-border">
                        <td className="py-2 px-2">
                          <Input
                            value={variation.depth}
                            onChange={(e) => updateVariation(variation.id, "depth", e.target.value)}
                            className="w-20"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <Input
                            value={variation.width}
                            onChange={(e) => updateVariation(variation.id, "width", e.target.value)}
                            className="w-20"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <Input
                            value={variation.height}
                            onChange={(e) => updateVariation(variation.id, "height", e.target.value)}
                            className="w-20"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <Input
                            value={variation.price}
                            onChange={(e) => updateVariation(variation.id, "price", e.target.value)}
                            className="w-24"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <Input
                            value={variation.stock}
                            onChange={(e) => updateVariation(variation.id, "stock", e.target.value)}
                            className="w-20"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <Input
                            value={variation.sku}
                            onChange={(e) => updateVariation(variation.id, "sku", e.target.value)}
                            className="w-32"
                          />
                        </td>
                        <td className="py-2 px-2 text-center">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive"
                            onClick={() => removeVariation(variation.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-medium text-primary mb-2">Variation Rules:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Price updates automatically on product page</li>
                  <li>• Quantity selector available per variation</li>
                  <li>• Stock auto-reduces after order placement</li>
                  <li>• Variation disabled automatically if stock = 0</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Visibility & Status */}
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold mb-4">Visibility & Status</h3>
              <div className="space-y-4">
                <div>
                  <Label>Product Status</Label>
                  <Select
                    value={watch("status")}
                    onValueChange={(value) => setValue("status", value)}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in_stock">In Stock</SelectItem>
                      <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="featured">Featured Product</Label>
                  <Switch
                    id="featured"
                    checked={watch("featured")}
                    onCheckedChange={(checked) => setValue("featured", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="showInSearch">Show in Search</Label>
                  <Switch
                    id="showInSearch"
                    checked={watch("showInSearch")}
                    onCheckedChange={(checked) => setValue("showInSearch", checked)}
                  />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button type="button" variant="outline" className="w-full">
                  Save Draft
                </Button>
                <Button type="submit" className="w-full">
                  Publish Product
                </Button>
              </div>
            </div>

            {/* Product Summary */}
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold mb-4">Product Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Variations:</span>
                  <span className="font-medium">{totalVariations}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Active Variations:</span>
                  <span className="font-medium">{activeVariations}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Stock:</span>
                  <span className="font-medium">{totalStock}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Price Range:</span>
                  <span className="font-medium text-primary">{priceRange}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default AddProduct;
