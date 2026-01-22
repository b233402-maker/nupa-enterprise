import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import PolicySection from "@/components/shared/PolicySection";
import CTASection from "@/components/shared/CTASection";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />
      </div>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Your Privacy Matters to Nupa Enterprise</p>
          
          <p className="text-muted-foreground mb-8">
            Nupa Enterprise respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or communicate with us.
          </p>

          <PolicySection number="1" title="Information We Collect">
            <p>We may collect the following types of information:</p>
            <p className="font-semibold mt-4 text-foreground">Personal Information</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Business address</li>
            </ol>
            <p className="mt-2">This information is collected when you:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Request a quote</li>
              <li>Contact us via forms, email, or phone</li>
              <li>Place an order through the website</li>
            </ol>
            <p className="font-semibold mt-4 text-foreground">Non-Personal Information</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Browser type and device information</li>
              <li>Pages visited on our website</li>
              <li>Time spent on pages</li>
              <li>IP address (for analytics and security)</li>
            </ol>
          </PolicySection>

          <PolicySection number="2" title="How We Use Your Information">
            <p>We use collected information to:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Respond to inquiries and quotation requests</li>
              <li>Process orders and customer communication</li>
              <li>Improve website performance and user experience</li>
              <li>Understand customer needs and industry demand</li>
              <li>Maintain internal business records</li>
            </ol>
          </PolicySection>

          <PolicySection number="3" title="Product Orders & Quotations">
            <p>
              Some products on our website are available for direct purchase, while others require a custom quotation. Information provided during these processes is used strictly for order fulfillment, pricing, and customer communication.
            </p>
          </PolicySection>

          <PolicySection number="4" title="Cookies & Tracking Technologies">
            <p>Our website may use cookies to:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Enhance browsing experience</li>
              <li>Analyze website traffic</li>
              <li>Improve content and layout</li>
            </ol>
            <p className="mt-2">You can choose to disable cookies through your browser settings, though this may affect some website features.</p>
          </PolicySection>

          <PolicySection number="5" title="Data Protection & Security">
            <p>
              We take appropriate technical and organizational measures to protect your personal data against unauthorized access, misuse, or disclosure. However, no online system is 100% secure. We continuously work to maintain strong security standards.
            </p>
          </PolicySection>

          <PolicySection number="6" title="Sharing of Information">
            <p>We may share your information only when necessary:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>With service providers involved in delivery or communication</li>
              <li>When required by law or legal authorities</li>
            </ol>
            <p className="mt-2">We never share personal data for marketing purposes without consent.</p>
          </PolicySection>

          <PolicySection number="7" title="Third-Party Links">
            <p>
              Our website may contain links to third-party websites. Nupa Enterprise is not responsible for the privacy practices or content of external sites.
            </p>
          </PolicySection>

          <PolicySection number="8" title="Your Rights">
            <p>You have the right to:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal information (where applicable)</li>
            </ol>
            <p className="mt-2">To exercise these rights, please contact us directly.</p>
          </PolicySection>

          <PolicySection number="9" title="Updates to This Policy">
            <p>
              Nupa Enterprise may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date.
            </p>
          </PolicySection>

          <PolicySection number="10" title="Contact Us">
            <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
            <p className="font-semibold text-foreground mt-4">Nupa Enterprise</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>✉ Email: sales@nupaenterprise.com</li>
              <li>📞 Phone: 01739-748268</li>
            </ol>
          </PolicySection>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default PrivacyPolicy;
