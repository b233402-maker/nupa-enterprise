import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import PolicySection from "@/components/shared/PolicySection";
import CTASection from "@/components/shared/CTASection";

const RefundPolicy = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Terms Of Use" }]} />
      </div>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Refund Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Transparent & Fair Refund Guidelines</p>
          
          <p className="text-muted-foreground mb-8">
            At Nupa Enterprise, customer satisfaction is important to us. This Refund Policy explains the conditions under which refunds may be issued for products purchased through our website or ordered via quotation.
          </p>

          <PolicySection number="1" title="Eligibility for Refunds">
            <p>
              Nupa Enterprise is a supplier of industrial storage shelves, warehouse racking systems, and supershop shelving solutions in Bangladesh. This website provides product information, quotation services, and selected online purchasing options.
            </p>
          </PolicySection>

          <PolicySection number="2" title="Non-Refundable Items">
            <p>The following items are not eligible for refunds:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Customized or made-to-order storage systems</li>
              <li>Products ordered through confirmed quotations</li>
              <li>Products damaged due to misuse, improper installation, or handling</li>
              <li>Normal wear and tear</li>
            </ol>
          </PolicySection>

          <PolicySection number="3" title="Refund Request Timeline">
            <p>To be eligible for a refund:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>You must notify us within 3 working days of receiving the product</li>
              <li>Proof such as photos or videos may be required</li>
            </ol>
          </PolicySection>

          <PolicySection number="4" title="Refund Process">
            <p>Once your refund request is approved:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Our team will review the issue</li>
              <li>The product may need to be returned (if applicable)</li>
              <li>Refunds will be processed through the original payment method</li>
            </ol>
          </PolicySection>

          <PolicySection number="5" title="Refund Method">
            <p>For online purchases:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Refunds will be issued to the original payment method used during purchase</li>
              <li>Processing time typically takes 7-14 working days after approval</li>
            </ol>
          </PolicySection>

          <PolicySection number="6" title="Shipping & Handling Costs">
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>Delivery and handling charges are non-refundable</li>
              <li>Return shipping costs may be the responsibility of the customer unless the issue is caused by Nupa Enterprise</li>
            </ol>
          </PolicySection>

          <PolicySection number="7" title="Cancellations">
            <p className="font-semibold text-foreground">Online Purchases</p>
            <p>Orders may be canceled before shipment. Once shipped, cancellation is not possible.</p>
            <p className="font-semibold text-foreground mt-4">Quotation-Based Orders</p>
            <p>Orders confirmed through quotation cannot be canceled or refunded once production or preparation has started.</p>
          </PolicySection>

          <PolicySection number="8" title="Exchange Policy">
            <p>
              Exchanges may be offered in place of refunds where applicable, depending on product availability and condition.
            </p>
          </PolicySection>

          <PolicySection number="9" title="Policy Updates">
            <p>
              Nupa Enterprise reserves the right to modify this Refund Policy at any time. Updates will be published on this page with a revised date.
            </p>
          </PolicySection>

          <PolicySection number="10" title="Contact Us">
            <p>For refund-related inquiries, please contact:</p>
            <p className="mt-2">✉ Email: sales@nupaenterprise.com</p>
            <p>📞 Phone: 01739-748268</p>
          </PolicySection>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default RefundPolicy;
