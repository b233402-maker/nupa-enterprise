import { useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import CTASection from "@/components/shared/CTASection";
import ProductGallery from "@/components/products/ProductGallery";
import { Button } from "@/components/ui/button";

const productImages = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
];

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  businessLocation: string;
  fullAddress: string;
  street: string;
  district: string;
  country: string;
  extraInstructions: string;
}

const DeliveryInformation = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
    businessLocation: "",
    fullAddress: "",
    street: "",
    district: "",
    country: "",
    extraInstructions: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "Products", path: "/products" },
            { label: "4-Tier Chrome Wire Shelving Unit", path: "/product/1" },
            { label: "Confirm Delivery Information" },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-6">
          {/* Left - Product Summary */}
          <div>
            <ProductGallery images={productImages} productName="4-Tier Chrome Wire Shelving Unit" />

            <div className="mt-6">
              <h2 className="text-xl lg:text-2xl font-bold mb-2">4-Tier Chrome Wire Shelving Unit</h2>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-muted-foreground">Starting from</span>
                <span className="text-lg font-bold">BDT 12,500</span>
                <span className="text-muted-foreground line-through text-sm">BDT 15,000</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">100 Reviews</span>
              </div>

              <h3 className="font-semibold mb-2">Product Description</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Made to maximize storage space and minimize set-up time. All components attach firmly to one another without the use of fasteners.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Open access to contents from all sides</li>
                <li>• Made of 14-gauge, powder-coated steel</li>
                <li>• 1-1/2"d x 1-1/2"w x 84"h angle posts</li>
                <li>• Levels easily adjust on 1-1/2" centers</li>
                <li>• Optional 5/8" thick particle board decking</li>
                <li>• Configurable with casters (sold separately)</li>
                <li>• Easy to assemble</li>
              </ul>
            </div>
          </div>

          {/* Right - Delivery Form */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">Confirm Your Delivery Address</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Business/Organization Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Business Type / Industry <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Business Location / Address <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="businessLocation"
                  value={formData.businessLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullAddress"
                    value={formData.fullAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Street <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    District <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Country <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Extra Instructions</label>
                <textarea
                  name="extraInstructions"
                  value={formData.extraInstructions}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="outline" className="flex-1" asChild>
                  <Link to="/">Back to home</Link>
                </Button>
                <Button className="flex-1" asChild>
                  <Link to="/checkout">Checkout</Link>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <CTASection />
    </MainLayout>
  );
};

export default DeliveryInformation;
