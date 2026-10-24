import LegalLayout, { LegalSection, LegalLink } from "@/components/site/LegalLayout";

export default function Ccpa() {
  return (
    <LegalLayout title="California Privacy Act">
      <p>
        This California Privacy Notice (“Notice”) is in addition to, and incorporated into, the Privacy
        Policy of Fit29 and its owners and affiliates (collectively, “we,” “us,” or “our”) and applies
        to personal information that we collect online or offline from California residents
        (“consumers” or “you” or “your”).
      </p>

      <LegalSection title="Information We Collect">
        <p>
          We have collected the following categories of personal information from consumers within the
          last twelve (12) months:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse" style={{ borderColor: "hsl(var(--border))" }}>
            <thead>
              <tr style={{ background: "hsl(var(--stone))" }}>
                <th className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Category</th>
                <th className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border align-top" style={{ borderColor: "hsl(var(--border))" }}>A. Identifiers and Contact Information.</td>
                <td className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Your name, postal address, telephone number or email address.</td>
              </tr>
              <tr>
                <td className="p-3 border align-top" style={{ borderColor: "hsl(var(--border))" }}>B. Medical and financial Information.</td>
                <td className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Your credit card, debit card or health plan.</td>
              </tr>
              <tr>
                <td className="p-3 border align-top" style={{ borderColor: "hsl(var(--border))" }}>C. Protected classifications.</td>
                <td className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Age, gender, race, medical condition, disability.</td>
              </tr>
              <tr>
                <td className="p-3 border align-top" style={{ borderColor: "hsl(var(--border))" }}>D. Commercial information.</td>
                <td className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Records of products or services you have purchased.</td>
              </tr>
              <tr>
                <td className="p-3 border align-top" style={{ borderColor: "hsl(var(--border))" }}>E. Internet or other similar network activity.</td>
                <td className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Browsing history, search history, or your interaction with the Website.</td>
              </tr>
              <tr>
                <td className="p-3 border align-top" style={{ borderColor: "hsl(var(--border))" }}>F. Geolocation data.</td>
                <td className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Your physical location or movements.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="Use of Personal Information">
        <p>We use this personal information for one or more of the following business purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide our products and services, such as to process drug claims and, for fulfilling orders.</li>
          <li>To provide patient care, customer service, such as to respond to inquiries and requests, verify your identity, and, to maintain your Account.</li>
          <li>To analyze use of our products and services as well as customize and improve them.</li>
          <li>For marketing, such as to provide you with email alerts about products or services offered by us and/or third parties that may be of interest to you.</li>
          <li>To maintain the security of our products, services and systems, such as detecting security breaches or fraudulent activity.</li>
          <li>To keep our website and other functioning properly, such as debugging and fixing errors.</li>
          <li>To comply with our legal obligations.</li>
          <li>To protect our rights, property, and safety or the rights, property, and safety of others.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </LegalSection>

      <LegalSection title="Sharing of Personal Information">
        <p>
          We may share personal information we collect with third parties for a business purpose, such
          as to pharmacies to fill your prescription, marketing partners, advertising networks, clients
          that sponsor discount cards, and service providers that helps us operate or provide our
          services, including but not limited to data storage companies and internet service providers.
          When we share personal information with our service providers, we require that they agree to
          protect the personal information and use and disclose it only to provide their services to us
          and for limited business purposes, such as to detect security breaches and comply with their
          legal obligations.
        </p>
        <p>
          In the past twelve (12) months, we have shared the following categories of personal
          information for a business purpose with the following categories of third parties:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr style={{ background: "hsl(var(--stone))" }}>
                <th className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Category</th>
                <th className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Third Parties</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border align-top" style={{ borderColor: "hsl(var(--border))" }}>A. Identifiers and Contact Information.</td>
                <td className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Service providers; Pharmacies and other health care providers; Product providers and distributors; Operating systems and platforms; Social networks; Marketing partners; Clients</td>
              </tr>
              <tr>
                <td className="p-3 border align-top" style={{ borderColor: "hsl(var(--border))" }}>B. Medical and financial Information.</td>
                <td className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Service providers; Pharmacies and other health care providers; Product providers and distributors; Operating systems and platforms; Social networks; Marketing partners; Clients</td>
              </tr>
              <tr>
                <td className="p-3 border align-top" style={{ borderColor: "hsl(var(--border))" }}>C. Protected classifications</td>
                <td className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Service providers; Pharmacies and other health care providers; Product providers and distributors; Operating systems and platforms; Social networks; Marketing partners; Clients</td>
              </tr>
              <tr>
                <td className="p-3 border align-top" style={{ borderColor: "hsl(var(--border))" }}>D. Commercial information.</td>
                <td className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Records of products or services you have purchased.</td>
              </tr>
              <tr>
                <td className="p-3 border align-top" style={{ borderColor: "hsl(var(--border))" }}>E. Internet or other similar network activity.</td>
                <td className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Service providers</td>
              </tr>
              <tr>
                <td className="p-3 border align-top" style={{ borderColor: "hsl(var(--border))" }}>F. Geolocation data.</td>
                <td className="p-3 border" style={{ borderColor: "hsl(var(--border))" }}>Service providers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="Your Rights and Choices">
        <p>This section describes your privacy rights and explains how to exercise them.</p>
        <p><strong>Right to Know</strong></p>
        <p>
          You have the right to know, subject to certain exceptions, the following about the personal
          information we collected about you over the past 12 months:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The categories of the personal information;</li>
          <li>The categories of sources of the personal information;</li>
          <li>The business or commercial purpose for collecting that personal information;</li>
          <li>The categories of personal information shared for a business purpose; and</li>
          <li>The categories of third parties with whom the personal information is shared.</li>
        </ul>
        <p><em>Right to Delete</em></p>
        <p>
          You have the right to request that we delete the personal information that we collected from
          you, subject to certain exceptions.
        </p>
        <p><em>Right to Opt-Out of the Sale of Personal Information</em></p>
        <p>
          You have the right to opt-out of the sale of your personal information. We do not sell
          personal information.
        </p>
        <p><em>The Right to Non-Discrimination.</em></p>
        <p>You have the right not to be discriminated against for exercising these rights.</p>
        <p><em>Submitting Requests to Know and Delete Personal Information</em></p>
        <p>You may submit a request to know or delete by submitting a request to us by either:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Emailing us <LegalLink href="mailto:support@fit29.com">support@fit29.com</LegalLink>
          </li>
          <li>
            Visiting our website at the and contacting us at link on{" "}
            <LegalLink href="https://www.fit29.com/contact-us/">fit29.com/contact-us</LegalLink>
          </li>
        </ul>
        <p>
          To process your request, we must be able to verify your identity i.e., confirm that the
          person making the request is the person about whom we collected the personal information, or
          is someone authorized to act as the authorized agent on that person’s behalf. We will verify
          your identity by asking that you provide certain information to us that will allow us to
          confirm you are who you say you are, such as contact information, Account information and/or
          health information.
        </p>
        <p>
          You may designate an authorized agent to make a request on your behalf. When you use an
          authorized agent to submit a request for access or deletion, you must provide the authorized
          agent with written permission to do so, and, in certain circumstances, we may ask you to
          verify your own identity directly with us. We may deny a request from an authorized agent
          that does not submit proof that they have been authorized by you to act on your behalf.
        </p>
        <p>
          Only a parent or legal guardian may submit a request to know or delete the personal
          information of a child under the age of 13. We may ask a requestor on behalf of a child under
          13 to sign a consent form under penalty of perjury or to speak by telephone to trained
          personnel to confirm that the requestor is the parent or legal guardian of the child.
        </p>
        <p>You may only make a request to know or delete your personal information twice within a 12-month period.</p>
        <p><em>Response Timing and Format</em></p>
        <p>
          We will confirm receipt of your request to know or delete within 10 business days and will
          provide information on how we will process your request, including our verification process
          and when you can expect a response.
        </p>
      </LegalSection>

      <LegalSection title="Changes to Our Privacy Notice">
        <p>
          We may change this Notice at any time, but we will not use personal information that we have
          already collected for a new purpose that is materially different from those stated in our
          Notice at the time that personal information was collected without first obtaining your
          explicit consent to use it for the new purpose.
        </p>
      </LegalSection>

      <LegalSection title="Contact Information">
        <p>
          If you have any questions or concerns about this Privacy Notice, our privacy policies and
          practices, you may contact us at:
        </p>
        <p>
          Email: <LegalLink href="mailto:support@fit29.com">support@fit29.com</LegalLink> — Fit29
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
