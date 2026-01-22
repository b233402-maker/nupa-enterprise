import { useState } from "react";
import { CreditCard, Smartphone, Banknote, ChevronDown, Calendar, CreditCard as CardIcon } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";

const paymentMethods = [
  { id: "card", name: "Card", icon: CreditCard },
  { id: "bkash", name: "bKash", icon: Smartphone },
  { id: "nagad", name: "নগদ", icon: Smartphone },
  { id: "cod", name: "Cash On Delivery", icon: Banknote },
];

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [country, setCountry] = useState("Bangladesh");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Billing Details */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">Billing Details</h2>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">4-Tier Chrome Wire Shelving Unit</h3>
              <p className="text-foreground mb-1">BDT 12,500</p>
              <p className="text-sm text-muted-foreground mb-4">
                Order description: Delivery - SHEFFIELD, S1 2EP to LEICESTER, LE1 5BD
              </p>
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <span className="font-medium">Total</span>
                <span className="text-xl font-bold">BDT 12500/=</span>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">Payment Information</h2>

            {/* Payment Method Selection */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    selectedPayment === method.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-muted-foreground/30"
                  }`}
                >
                  <method.icon
                    className={`w-6 h-6 ${
                      selectedPayment === method.id ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <span className="text-sm font-medium">{method.name}</span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedPayment === method.id ? "border-primary" : "border-muted-foreground/30"
                    }`}
                  >
                    {selectedPayment === method.id && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Card Form */}
            {selectedPayment === "card" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="122 21542 674213"
                      className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20 pr-16"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary font-bold text-sm">
                      VISA
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Expiration date (MM/YY)</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        placeholder="25/2024"
                        className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20 pr-10"
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Security Code</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        placeholder="CVC"
                        className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20 pr-10"
                      />
                      <CardIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Country</label>
                  <div className="relative">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/20 appearance-none bg-background"
                    >
                      <option>Bangladesh</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <Button type="submit" className="w-full mt-6" size="lg">
                  Checkout
                </Button>
              </form>
            )}

            {/* Other Payment Methods Placeholder */}
            {selectedPayment !== "card" && (
              <div className="bg-muted rounded-xl p-8 text-center">
                <p className="text-muted-foreground">
                  {selectedPayment === "cod"
                    ? "Pay when you receive your order"
                    : `You will be redirected to ${selectedPayment === "bkash" ? "bKash" : "Nagad"} to complete payment`}
                </p>
                <Button className="mt-4" size="lg">
                  {selectedPayment === "cod" ? "Confirm Order" : "Continue to Payment"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <CTASection />
    </MainLayout>
  );
};

export default Checkout;
