import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageBanner from "@/components/shared/PageBanner";
import Breadcrumb from "@/components/shared/Breadcrumb";
import StatCard from "@/components/shared/StatCard";
import TestimonialCard from "@/components/shared/TestimonialCard";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "1000+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const testimonials = [
  { name: "Eleanor Pena", location: "Chittagong", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Wade Warren", location: "Dhaka", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Annette Black", location: "Rajshahi", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Jane Cooper", location: "Sylhet", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Eleanor Pena", location: "Chittagong", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Wade Warren", location: "Dhaka", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Annette Black", location: "Rajshahi", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Jane Cooper", location: "Sylhet", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Eleanor Pena", location: "Chittagong", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Wade Warren", location: "Dhaka", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Annette Black", location: "Rajshahi", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Jane Cooper", location: "Sylhet", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Eleanor Pena", location: "Chittagong", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Wade Warren", location: "Dhaka", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Annette Black", location: "Rajshahi", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
  { name: "Jane Cooper", location: "Sylhet", date: "Nov 25, 2025", rating: 5, content: "Booking was simple and transparent. I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner." },
];

const ITEMS_PER_PAGE = 8;

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <MainLayout>
      <PageBanner 
        title="Trusted by Businesses Across Bangladesh" 
        subtitle="Discover why hundreds of companies choose Nupa Enterprise for their storage and shelving needs" 
      />
      
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Testimonials" }]} />
      </div>

      {/* Stats Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground text-center mb-12">Real stories from real businesses that trust Nupa Enterprise</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {currentTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
            {totalPages > 5 && <span className="px-2">...</span>}
            {totalPages > 5 && (
              <Button variant="outline" size="icon" onClick={() => setCurrentPage(totalPages)}>
                {totalPages}
              </Button>
            )}
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default Testimonials;
