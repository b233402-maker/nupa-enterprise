import { Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              Our team of experts will help you design the perfect storage system for your warehouse, supershop, or industrial facility. Get a free consultation and custom quote tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Free Consultation</p>
                  <p className="text-xs text-muted-foreground">Expert advice on your storage needs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">24/7 Support</p>
                  <p className="text-xs text-muted-foreground">We're here whenever you need us</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-foreground">
              Request a Quote
            </Button>
          </div>

          {/* Right Card */}
          <div className="bg-card text-card-foreground rounded-xl p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call Us</p>
                  <p className="font-medium">+880 1234-567890</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email Us</p>
                  <p className="font-medium">info@nupaenterprise.com</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground bg-muted rounded-lg p-4">
                Business Hours: Saturday - Thursday, 9:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
