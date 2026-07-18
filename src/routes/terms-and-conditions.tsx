import { createFileRoute } from "@tanstack/react-router";
import {
  LegalPageLayout,
  LegalSection,
} from "@/components/LegalPageLayout";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      {
        title: "Terms & Conditions | Chawla Cranes",
      },
      {
        name: "description",
        content:
          "Read the terms and conditions governing the use of the Chawla Cranes website and crane rental enquiries.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
    ],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      description="These terms govern your use of the Chawla Cranes website and the submission of crane-rental, heavy-lifting and project enquiries."
      lastUpdated="18 July 2026"
    >
      <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-5">
        <p className="font-semibold text-stone-800">
          Chawla Cranes is a unit of Chawla Crane &amp; Heavy Labour
          Contractor.
        </p>
      </div>

      <LegalSection title="1. Acceptance of These Terms">
        <p>
          By visiting or using this website, submitting an enquiry or
          communicating with us through a website link, you agree to these
          Terms &amp; Conditions.
        </p>

        <p>
          Do not use the website if you do not agree with these terms.
        </p>
      </LegalSection>

      <LegalSection title="2. Website Purpose">
        <p>
          This website provides general information about crane rental,
          heavy-lifting services, available equipment, service areas and
          methods for contacting Chawla Cranes.
        </p>

        <p>
          Information shown on the website is for preliminary enquiry purposes
          and does not by itself constitute a confirmed booking, binding
          quotation, engineering recommendation or contractual commitment.
        </p>
      </LegalSection>

      <LegalSection title="3. Quotations and Confirmed Bookings">
        <p>
          Crane availability, pricing, mobilisation charges, operator charges,
          taxes, fuel, permits, accommodation, transport and other project
          costs may vary according to the project requirement.
        </p>

        <p>
          A booking is confirmed only after:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>The project requirement has been reviewed.</li>
          <li>Crane and operator availability has been confirmed.</li>
          <li>A written quotation or work order has been accepted.</li>
          <li>
            Any required advance payment, purchase order or documentation has
            been received.
          </li>
        </ul>

        <p>
          A telephone, website or WhatsApp enquiry alone does not reserve a
          crane.
        </p>
      </LegalSection>

      <LegalSection title="4. Crane Selection and Site Assessment">
        <p>
          Crane capacity must be selected according to load weight, lifting
          radius, boom length, jib configuration, lifting height, ground
          conditions, access restrictions and other site-specific factors.
        </p>

        <p>
          Capacities and specifications shown on this website are general
          descriptions. Final machine selection is subject to the relevant
          load chart, site inspection, lift plan and operational assessment.
        </p>

        <p>
          Customers must provide complete and accurate information about the
          load, site, access route and proposed lifting operation.
        </p>
      </LegalSection>

      <LegalSection title="5. Customer Responsibilities">
        <p>Unless otherwise agreed in writing, the customer is responsible for:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Providing safe and adequate access to the project site.</li>
          <li>
            Providing stable and suitable ground capable of supporting the
            crane and outriggers.
          </li>
          <li>
            Identifying underground services, overhead lines and site hazards.
          </li>
          <li>
            Obtaining required site permissions, road permissions and local
            approvals.
          </li>
          <li>
            Providing accurate load dimensions, weight, centre of gravity and
            lifting points.
          </li>
          <li>
            Maintaining a safe exclusion area during crane operations.
          </li>
          <li>
            Coordinating with site management, contractors and safety
            personnel.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Safety and Operational Control">
        <p>
          Safety instructions issued by the crane operator, supervisor or
          authorised Chawla Cranes representative must be followed.
        </p>

        <p>
          We may stop, postpone or refuse an operation where conditions appear
          unsafe, equipment limitations may be exceeded, required information
          is missing or applicable safety requirements cannot be followed.
        </p>

        <p>
          Delays resulting from unsafe conditions, restricted access, weather,
          site obstruction or customer-controlled circumstances may be
          chargeable under the applicable quotation or work order.
        </p>
      </LegalSection>

      <LegalSection title="7. Pricing, Taxes and Payments">
        <p>
          Prices displayed or discussed before a formal quotation are
          indicative unless expressly confirmed in writing.
        </p>

        <p>
          GST and other applicable taxes, permits, transport, mobilisation,
          demobilisation, fuel, overtime and accommodation charges may be
          charged separately.
        </p>

        <p>
          Payment terms, due dates, advances, security deposits and late
          payment consequences will be stated in the applicable quotation,
          invoice, work order or service agreement.
        </p>
      </LegalSection>

      <LegalSection title="8. Cancellation and Rescheduling">
        <p>
          Cancellation and rescheduling terms may depend on the equipment,
          location, mobilisation status and project duration.
        </p>

        <p>
          Costs already incurred for transport, permits, operator deployment,
          accommodation, mobilisation or third-party services may remain
          payable following cancellation.
        </p>

        <p>
          The cancellation provisions in an accepted quotation, purchase order
          or service agreement will take priority over this general website
          provision.
        </p>
      </LegalSection>

      <LegalSection title="9. Delays and Uncontrollable Events">
        <p>
          We are not responsible for delays or non-performance caused by
          circumstances reasonably outside our control, including severe
          weather, road closure, traffic restrictions, equipment breakdown,
          government action, labour disruption, civil disturbance, natural
          disaster or site-access problems.
        </p>

        <p>
          We will make reasonable efforts to communicate delays and arrange an
          appropriate alternative where commercially and operationally
          possible.
        </p>
      </LegalSection>

      <LegalSection title="10. Website Information and Availability">
        <p>
          We make reasonable efforts to keep website information accurate.
          However, crane photographs may be representative and actual
          equipment appearance, configuration, model year and availability may
          differ.
        </p>

        <p>
          We do not guarantee that the website will always be uninterrupted,
          error-free, secure or available.
        </p>
      </LegalSection>

      <LegalSection title="11. Intellectual Property">
        <p>
          Unless otherwise stated, the website design, text, graphics,
          branding, layout and original content belong to Chawla Cranes or are
          used with permission.
        </p>

        <p>
          You may view and share website pages for legitimate enquiry
          purposes. You may not copy, republish, modify, sell or commercially
          exploit website content without prior written permission.
        </p>

        <p>
          Third-party manufacturer names and marks remain the property of
          their respective owners. Their appearance does not imply
          sponsorship or endorsement.
        </p>
      </LegalSection>

      <LegalSection title="12. Prohibited Use">
        <p>You must not:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Use the website for unlawful, fraudulent or misleading activity.</li>
          <li>Submit false project or contact information.</li>
          <li>Attempt to access restricted website systems or data.</li>
          <li>Introduce malware, harmful code or automated attacks.</li>
          <li>Scrape or reproduce website content without authorisation.</li>
          <li>Impersonate another person or organisation.</li>
        </ul>
      </LegalSection>

      <LegalSection title="13. Third-Party Services and Links">
        <p>
          The website may provide links to WhatsApp, maps, social-media
          services or other third-party websites.
        </p>

        <p>
          Those services are operated independently and are subject to their
          own terms, policies and availability. We are not responsible for
          third-party content or services.
        </p>
      </LegalSection>

      <LegalSection title="14. Limitation of Liability">
        <p>
          To the extent permitted by applicable law, Chawla Cranes will not be
          liable for indirect, incidental, special or consequential losses
          arising solely from use of, or inability to use, this website.
        </p>

        <p>
          Liability relating to an actual crane-rental or lifting project will
          be governed by the accepted quotation, work order, service agreement,
          insurance terms and applicable law.
        </p>

        <p>
          Nothing in these terms excludes liability that cannot lawfully be
          excluded or limited.
        </p>
      </LegalSection>

      <LegalSection title="15. Priority of Project Documents">
        <p>
          Where these website terms conflict with an accepted quotation,
          purchase order, work order or signed service agreement, the
          project-specific written document will govern that project.
        </p>
      </LegalSection>

      <LegalSection title="16. Governing Law and Jurisdiction">
        <p>
          These website terms are governed by the laws of India.
        </p>

        <p>
          Subject to any agreed dispute-resolution procedure, disputes
          relating to this website will be subject to the jurisdiction of the
          competent courts in Gurugram, Haryana.
        </p>
      </LegalSection>

      <LegalSection title="17. Changes to These Terms">
        <p>
          We may update these terms to reflect changes to our website,
          services, business practices or legal obligations.
        </p>

        <p>
          Updated terms will be published on this page with a revised
          effective date.
        </p>
      </LegalSection>

      <LegalSection title="18. Contact Us">
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