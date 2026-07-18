import { createFileRoute } from "@tanstack/react-router";
import {
  LegalPageLayout,
  LegalSection,
} from "@/components/LegalPageLayout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      {
        title: "Privacy Policy | Chawla Cranes",
      },
      {
        name: "description",
        content:
          "Read the Chawla Cranes privacy policy, including how we collect, use, store and protect information submitted through our website.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="This policy explains how Chawla Cranes collects, uses, stores and protects information received through this website, telephone calls, WhatsApp and other enquiry channels."
      lastUpdated="18 July 2026"
    >
      <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-5">
        <p className="font-semibold text-stone-800">
          Chawla Cranes is a unit of Chawla Crane &amp; Heavy Labour
          Contractor.
        </p>
      </div>

      <LegalSection title="1. About Us">
        <p>
          Chawla Cranes provides crane rental, heavy-lifting and related
          contracting services in Gurugram, Delhi NCR and other parts of India.
        </p>

        <p>
          For the purposes of this policy, references to “Chawla Cranes”,
          “we”, “our” or “us” include Chawla Crane &amp; Heavy Labour
          Contractor where applicable.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We May Collect">
        <p>We may collect information that you voluntarily provide, including:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Your name and business or company name.</li>
          <li>Telephone and WhatsApp number.</li>
          <li>Email address.</li>
          <li>Project location and site address.</li>
          <li>
            Crane capacity, lifting requirement, project dates and other
            enquiry details.
          </li>
          <li>
            Messages, documents or photographs you send in relation to a
            project.
          </li>
        </ul>

        <p>
          We may also automatically receive limited technical information such
          as your IP address, browser type, device type, referring page,
          pages visited and approximate location.
        </p>
      </LegalSection>

      <LegalSection title="3. How We Collect Information">
        <p>Information may be collected when you:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Complete an enquiry or contact form.</li>
          <li>Call, email or contact us through WhatsApp.</li>
          <li>Request a quotation or site assessment.</li>
          <li>Interact with our website or advertisements.</li>
          <li>Communicate with our employees or authorised representatives.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. How We Use Your Information">
        <p>We may use the collected information to:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Respond to enquiries and quotation requests.</li>
          <li>Determine suitable crane capacity and availability.</li>
          <li>Arrange site inspections and project mobilisation.</li>
          <li>Communicate service, pricing and scheduling information.</li>
          <li>Provide customer support.</li>
          <li>Maintain internal business and transaction records.</li>
          <li>Improve our website, advertisements and services.</li>
          <li>Prevent fraud, abuse, security incidents and unlawful activity.</li>
          <li>Comply with applicable legal and regulatory obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Consent and Communications">
        <p>
          By submitting an enquiry, you authorise us to contact you regarding
          that enquiry through telephone, email, SMS or WhatsApp.
        </p>

        <p>
          We will not use your contact details for unrelated promotional
          communication where consent is legally required. You may ask us to
          stop promotional communication at any time.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies and Website Analytics">
        <p>
          Our website may use essential cookies or similar technologies needed
          for security, navigation and website functionality.
        </p>

        <p>
          We may also use analytics or advertising technologies to understand
          website usage and measure campaign performance. Where legally
          required, optional cookies should only be activated after your
          consent.
        </p>

        <p>
          You may restrict cookies using your browser settings. Disabling
          certain cookies may affect some website functionality.
        </p>
      </LegalSection>

      <LegalSection title="7. Sharing of Information">
        <p>
          We do not sell or rent your personal information. We may share
          information only when reasonably necessary with:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Our employees, operators and authorised project representatives.
          </li>
          <li>
            Equipment providers, subcontractors or service partners involved
            in fulfilling your requirement.
          </li>
          <li>
            Website hosting, email, analytics, communications and IT service
            providers.
          </li>
          <li>
            Government, regulatory, judicial or law-enforcement authorities
            where legally required.
          </li>
          <li>
            Professional advisers such as accountants, auditors, insurers or
            legal advisers.
          </li>
        </ul>

        <p>
          Service providers are expected to use information only for the
          services they perform for us and to apply appropriate safeguards.
        </p>
      </LegalSection>

      <LegalSection title="8. Information Retention">
        <p>
          We retain personal information only for as long as reasonably
          necessary to respond to enquiries, provide services, maintain
          contractual and accounting records, resolve disputes and comply with
          applicable laws.
        </p>

        <p>
          Enquiries that do not proceed may be deleted or anonymised when they
          are no longer required for a legitimate business or legal purpose.
        </p>
      </LegalSection>

      <LegalSection title="9. Information Security">
        <p>
          We use reasonable technical and organisational safeguards intended
          to protect information against unauthorised access, alteration,
          disclosure, loss or misuse.
        </p>

        <p>
          However, no website, email system, internet transmission or
          electronic storage method can be guaranteed to be completely
          secure.
        </p>
      </LegalSection>

      <LegalSection title="10. Your Privacy Rights">
        <p>
          Subject to applicable law, you may request that we:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Confirm whether we hold personal information about you.</li>
          <li>Provide information about how your data is being used.</li>
          <li>Correct inaccurate or incomplete information.</li>
          <li>Delete information that is no longer legally required.</li>
          <li>Withdraw consent for consent-based processing.</li>
          <li>Stop sending promotional communications.</li>
          <li>Address a privacy-related complaint or grievance.</li>
        </ul>

        <p>
          We may need to verify your identity before completing a request.
          Some information may be retained where required by law or necessary
          to establish, exercise or defend legal claims.
        </p>
      </LegalSection>

      <LegalSection title="11. Children's Privacy">
        <p>
          Our services are intended for businesses, contractors and adults
          seeking crane-rental or lifting services. We do not knowingly
          collect personal information directly from children.
        </p>

        <p>
          A parent or guardian who believes that a child has submitted
          information may contact us to request its deletion.
        </p>
      </LegalSection>

      <LegalSection title="12. Third-Party Websites">
        <p>
          Our website may contain links to third-party websites, maps,
          messaging services or social-media platforms. We are not responsible
          for the privacy practices, content or security of those external
          services.
        </p>
      </LegalSection>

      <LegalSection title="13. Policy Updates">
        <p>
          We may update this Privacy Policy when our services, website
          features, service providers or legal obligations change.
        </p>

        <p>
          The revised policy will be published on this page with an updated
          revision date.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact and Privacy Requests">
        <p>
          Questions, correction requests, deletion requests or privacy
          complaints may be submitted using the following details:
        </p>

        <div className="rounded-xl bg-stone-100 p-5">
          <p className="font-black text-stone-900">
            Chawla Cranes
          </p>

          <p>
            A unit of Chawla Crane &amp; Heavy Labour Contractor
          </p>

          <p>Gurugram, Haryana, India</p>

          <p className="mt-3">
            Phone:{" "}
            <a
              href="tel:+919717459360"
              className="font-bold text-primary hover:underline"
            >
              +91 97174 59360
            </a>
          </p>

          <p>
            Email:{" "}
            <a
              href="mailto:manesar@chawlacranes.com"
              className="font-bold text-primary hover:underline"
            >
              manesar@chawlacranes.com
            </a>
          </p>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}