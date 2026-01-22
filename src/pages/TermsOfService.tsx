import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import PolicySection from "@/components/shared/PolicySection";
import CTASection from "@/components/shared/CTASection";

const TermsOfService = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Terms Of Use" }]} />
      </div>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Use</h1>
          <p className="text-sm text-muted-foreground mb-8">Please Read These Terms Carefully Before Using Our Website</p>
          
          <p className="text-muted-foreground mb-8">
            By accessing or using the Nupa Enterprise website, you agree to comply with and be bound by the following Terms of Use. If you do not agree with any part of these terms, please do not use this website.
          </p>

          <PolicySection number="1" title="About Nupa Enterprise">
            <p>
              Nupa Enterprise is a supplier of industrial storage shelves, warehouse racking systems, and supershop shelving solutions in Bangladesh. This website provides product information, quotation services, and selected online purchasing options.
            </p>
          </PolicySection>

          <PolicySection number="2" title="Use of the Website">
            <p>You agree to use this website:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Only for lawful purposes</li>
              <li>In a way that does not violate applicable laws or regulations</li>
              <li>Without attempting to damage, disrupt, or interfere with the website's functionality</li>
            </ol>
          </PolicySection>

          <PolicySection number="3" title="Product Information">
            <p>We aim to ensure that all product descriptions, images, specifications, and prices are accurate. However:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Product images are for reference only</li>
              <li>Specifications may vary based on customization</li>
              <li>Prices may change without prior notice</li>
            </ol>
          </PolicySection>

          <PolicySection number="4" title="Orders & Quotations">
            <p className="font-semibold text-foreground">Online Purchases</p>
            <p>Some products are available for direct purchase through the website. Orders are subject to availability and confirmation.</p>
            <p className="font-semibold text-foreground mt-4">Quotation-Based Products</p>
            <p>Certain products require custom quotation due to size, load capacity, or project requirements. Submitting a quotation request does not guarantee a final price until confirmed by our team.</p>
          </PolicySection>

          <PolicySection number="5" title="Payments">
            <p>For online purchases:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Payments must be completed through approved payment methods</li>
              <li>Orders will be processed only after payment confirmation</li>
            </ol>
          </PolicySection>

          <PolicySection number="6" title="Delivery & Installation">
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Delivery timelines depend on product availability and location</li>
              <li>Installation services, if applicable, will be agreed upon during quotation</li>
              <li>Nupa Enterprise is not responsible for delays caused by external factors beyond our control</li>
            </ol>
          </PolicySection>

          <PolicySection number="7" title="Intellectual Property">
            <p>All content on this website, including:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Text</li>
              <li>Images</li>
              <li>Logos</li>
              <li>Graphics</li>
              <li>Design elements</li>
            </ol>
          </PolicySection>

          <PolicySection number="8" title="User Submissions">
            <p>
              Any information submitted through contact forms, quotation requests, or emails must be accurate and lawful. You agree not to submit false, misleading, or harmful information.
            </p>
          </PolicySection>

          <PolicySection number="9" title="Limitation of Liability">
            <p>Nupa Enterprise shall not be held liable for:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Any indirect or consequential damages</li>
              <li>Business losses resulting from website use</li>
              <li>Technical issues or temporary unavailability of the website</li>
            </ol>
          </PolicySection>

          <PolicySection number="10" title="Third-Party Links">
            <p>
              Our website may include links to third-party websites for reference. Nupa Enterprise is not responsible for the content, policies, or practices of these external sites.
            </p>
          </PolicySection>

          <PolicySection number="11" title="Changes to Terms">
            <p>
              Nupa Enterprise reserves the right to update or modify these Terms of Use at any time. Continued use of the website after changes are posted indicates acceptance of the updated terms.
            </p>
          </PolicySection>

          <PolicySection number="12" title="Governing Law">
            <p>
              These Terms of Use are governed by the laws of Bangladesh. Any disputes shall be resolved under Bangladeshi jurisdiction.
            </p>
          </PolicySection>

          <PolicySection number="13" title="Nupa Enterprise">
            <p>✉ Email: sales@nupaenterprise.com</p>
            <p>📞 Phone: 01739-748268</p>
          </PolicySection>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default TermsOfService;
