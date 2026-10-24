import LegalLayout, { LegalSection, LegalLink } from "@/components/site/LegalLayout";

export default function Returns() {
  return (
    <LegalLayout title="Returns & Refund Policy">
      <p>
        At Fit29 we strive to provide the highest level of quality healthcare which includes
        frictionless access to medical providers and medications at prices that are affordable and
        accessible. We also make every effort to provide the highest level of patient care before and
        after the sale. If you have an issue with your order or your product, please reach out to our
        patient care team:{" "}
        <LegalLink href="mailto:support@fit29.com">support@fit29.com</LegalLink>.
      </p>
      <p>Below are our categories and how we can help you after the sale:</p>

      <LegalSection title="Prescription Medications">
        <p>
          State and Federal regulations do not allow the return of prescription medications after being
          dispensed by the pharmacy. Once your method of payment has been charged and your package has
          been handed over to the carrier (USPS, FedEx, UPS), all sales are final. You can always
          login to your fit29.com account before your products ship to change your address, method of
          payment or to cancel your subscription. If your prescription medication arrives damaged or is
          lost during transit, please contact our patient care team or email us,{" "}
          <LegalLink href="mailto:support@fit29.com">support@fit29.com</LegalLink>.
        </p>
      </LegalSection>

      <LegalSection title="Non-Prescription (Over the Counter) Products">
        <p>
          Fit29 may accept returns on unopened, non-prescription items up to 30 days after the sale.
          You will be responsible to pay the return shipping cost and we do not accept COD returns. If
          you need to return an item, please contact our patient care team or email us,{" "}
          <LegalLink href="mailto:support@fit29.com">support@fit29.com</LegalLink>. Include your order
          number, reason for the return along with the product name. Fit29 reserves the right to deny a
          return that does not arrive in the original condition it was shipped or if the products
          appear to be tampered with or opened. After we receive the returned product and it is
          approved by our Fit29 team, your purchase price will be refunded to your original method of
          payment.
        </p>
      </LegalSection>

      <LegalSection title="Address for Returns">
        <p>
          Fit29 / <strong>Manifest Pharmacy</strong>
          <br />
          1018 S. Batesville Road
          <br />
          Greer, SC 29650
        </p>
      </LegalSection>

      <LegalSection title="Lost Packages">
        <p>
          In the rare case your package is lost in transit, Fit29 will reship your prescription or
          non-prescription order. We will work with your carrier (USPS, FedEx, UPS) to locate your
          package first and have it redirected if needed. Sometimes weather may delay your package
          delivery time. Since we currently do not ship refrigerated products, your product will not be
          affected by increased transit time. If your package is lost in transit or does not arrive at
          the shipping address you provided, please contact our patient care team or email us,{" "}
          <LegalLink href="mailto:support@fit29.com">support@fit29.com</LegalLink>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
