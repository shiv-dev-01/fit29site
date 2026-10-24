import LegalLayout, { LegalSection, LegalLink } from "@/components/site/LegalLayout";

export default function SmsTerms() {
  return (
    <LegalLayout title="SMS Terms and Conditions">
      <LegalSection title="Product Description">
        <p>
          By providing your mobile phone number and opting in through our website forms, consultation
          requests, or service inquiries, you consent to receive SMS messages from Fit29 related to
          reminders about your upcoming consultations, follow-ups regarding continuing care, treatment
          updates, prescription or order notifications, and messages related to ongoing membership care
          and services. Consent to receive SMS messages is not a condition of purchase.
        </p>
      </LegalSection>

      <LegalSection title="Opt-In Message">
        <p>
          When you opt in to receive SMS communications, you may receive a confirmation message similar
          to the following: Fit29: You have successfully opted in to receive SMS messages regarding
          consultations, care updates, and service notifications. Message frequency may vary. Msg &
          data rates may apply. Reply STOP to opt out or HELP for help.
        </p>
      </LegalSection>

      <LegalSection title="Message Frequency">
        <p>
          Message frequency may vary depending on your level of engagement with Fit29. You may receive
          consultation reminders, follow-ups, order updates, and important care-related notifications.
        </p>
      </LegalSection>

      <LegalSection title="Message and Data Rates">
        <p>Standard message and data rates may apply depending on your mobile carrier and service plan.</p>
      </LegalSection>

      <LegalSection title="Opting Out">
        <p>
          You may opt out of receiving SMS messages at any time by replying STOP to any SMS message you
          receive from us. After opting out, you will receive one final confirmation message, and we
          will no longer send SMS messages to your number unless you choose to opt in again.
        </p>
      </LegalSection>

      <LegalSection title="Help and Support">
        <p>
          If you need assistance or have questions about our SMS service, reply HELP to any SMS message
          you receive, or contact our team at:{" "}
          <LegalLink href="mailto:support@fit29.com">support@fit29.com</LegalLink>
        </p>
      </LegalSection>

      <LegalSection title="Carrier Liability Disclaimer">
        <p>Mobile carriers are not liable for delayed or undelivered messages.</p>
      </LegalSection>
    </LegalLayout>
  );
}
