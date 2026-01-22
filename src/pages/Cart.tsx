import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageBanner from "@/components/shared/PageBanner";
import Breadcrumb from "@/components/shared/Breadcrumb";
import CartItem from "@/components/cart/CartItem";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Lock } from "lucide-react";

interface CartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const initialCartItems: CartItemType[] = [
  { id: "1", name: "4-Tier Chrome Wire Shelving Unit", price: 12500, quantity: 2, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop" },
  { id: "2", name: "4-Tier Chrome Wire Shelving Unit", price: 12500, quantity: 2, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop" },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>(initialCartItems);

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems(items =>
      items.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemove = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 50000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <MainLayout>
      <PageBanner 
        title="My Cart" 
        subtitle={`${cartItems.length} Products Found`} 
      />
      
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "My Cart" }]} />
      </div>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="border border-border rounded-xl overflow-hidden">
                  {cartItems.map(item => (
                    <CartItem
                      key={item.id}
                      {...item}
                      onQuantityChange={handleQuantityChange}
                      onRemove={handleRemove}
                    />
                  ))}
                </div>
                <Link to="/products" className="inline-flex items-center gap-2 text-primary mt-4 text-sm hover:underline">
                  <ShoppingBag className="w-4 h-4" />
                  Continue Shopping
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-6">Order Summary</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">BDT {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">BDT {shipping.toLocaleString()}</span>
                    </div>
                    {shipping === 0 && (
                      <p className="text-xs text-primary">Free shipping on orders over ৳50,000</p>
                    )}
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t border-border pt-4 mb-6">
                    <span>Total</span>
                    <span>BDT {total.toLocaleString()}</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link to="/delivery">Proceed to Checkout</Link>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-4 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" />
                    Secure checkout powered by SSL encryption
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Add some products to your cart to get started.</p>
              <Button asChild>
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default Cart;
