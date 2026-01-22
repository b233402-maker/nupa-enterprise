import MainLayout from "@/components/layout/MainLayout";
import PageBanner from "@/components/shared/PageBanner";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ContactInfoCard from "@/components/shared/ContactInfoCard";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: <Phone className="w-5 h-5 text-primary" />, title: "Phone", subtitle: "Call us anytime", value: "01739-748268" },
  { icon: <Mail className="w-5 h-5 text-primary" />, title: "Email", subtitle: "Send us an email", value: "sales@nupaenterprise.com" },
  { icon: <MapPin className="w-5 h-5 text-primary" />, title: "Location", subtitle: "Visit our showroom", value: "House-18,20, Road-10, Block-1, South Banasree,ঢাকা মার্কেটের বিপরীতে, Khilgaon, Dhaka, Bangladesh" },
  { icon: <Clock className="w-5 h-5 text-primary" />, title: "Business Hours", subtitle: "We're open", value: "Saturday - Thursday: 9:00 AM - 6:00 PM\nFriday: Closed" },
];

const Contact = () => {
  return (
    <MainLayout>
      <PageBanner 
        title="Contact Us" 
        subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible." 
      />
      
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Contact Us" }]} />
      </div>

      {/* Contact Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfoCard key={index} {...info} />
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background border border-border rounded-xl p-6 lg:p-8">
              <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" placeholder="Your name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="How can we help?" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" placeholder="Your message..." rows={4} className="mt-1" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Find Our Showroom</h2>
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.6877611667384!2d90.42743831543154!3d23.75501809458685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd5c53f67f%3A0x4d6bf3e27af2a8ee!2sTejgaon%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nupa Enterprise Location"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default Contact;
