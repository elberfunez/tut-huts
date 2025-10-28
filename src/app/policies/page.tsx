'use client';

import { useState } from "react";

export default function Policies() {
    const [activeTab, setActiveTab] = useState<"terms" | "cancellation">("terms");

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the cancellation policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our cancellation policy varies based on stay length. Short-term stays require 7 days notice for full refund. Mid-term and long-term stays have different notice requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are pets allowed at Tut Huts RV Park?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Tut Huts RV Park is pet-friendly. Pets must be leashed and cleaned up after.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the quiet hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quiet hours are from 9 PM to 5 AM.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white text-gray-800 px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Policies</h1>
        {/* Tabs */}
        <div className="flex mb-8 border-b border-indigo-300">
          <button
            className={`px-6 py-2 -mb-px font-semibold text-indigo-600 border-b-4 ${
              activeTab === "terms" ? "border-indigo-600" : "border-transparent hover:border-indigo-400"
            }`}
            onClick={() => setActiveTab("terms")}
            aria-selected={activeTab === "terms"}
            role="tab"
          >
            Terms of Service
          </button>
          <button
            className={`ml-4 px-6 py-2 -mb-px font-semibold text-indigo-600 border-b-4 ${
              activeTab === "cancellation" ? "border-indigo-600" : "border-transparent hover:border-indigo-400"
            }`}
            onClick={() => setActiveTab("cancellation")}
            aria-selected={activeTab === "cancellation"}
            role="tab"
          >
            Cancellation Policy
          </button>
        </div>

        {/* Terms of Service */}
        {activeTab === "terms" && <section aria-labelledby="terms-heading" className="mb-12">
          <h2 id="terms-heading" className="text-3xl font-semibold mb-4">
            Terms of Service
          </h2>
          <p className="mb-4">
            Welcome to Tut Huts RV Park. By staying at our park, you agree to
            abide by the following terms and conditions. These rules are in
            place to ensure the safety, comfort, and enjoyment of all guests,
            and to protect the property and its owners.
          </p>

          <article className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              1. Check-In and Payment
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Rent is due in full on or before the due date outlined in your
                rental agreement or invoice.
              </li>
              <li>
                Late payments may result in late fees and/or immediate
                termination of your stay.
              </li>
              <li>
                Returned checks or declined payments may result in additional
                fees.
              </li>
            </ul>
          </article>

          <article className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              2. Grounds for Eviction
            </h3>
            <p>
              We reserve the right to immediately terminate your stay and
              require removal from the property for any of the following:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Violation of these Terms and Conditions</li>
              <li>Late or non-payment of rent or utilities</li>
              <li>
                Threatening, harassing, or endangering staff, guests, or
                property
              </li>
              <li>Possession or use of illegal substances</li>
              <li>
                Causing excessive noise, disruption, or public disturbances
              </li>
              <li>Vandalism, theft, or property damage</li>
            </ul>
            <p className="mt-2 font-semibold">
              No refunds will be issued in the event of eviction.
            </p>
          </article>

          <article className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              3. Damage and Liability
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Guests are financially responsible for any and all damage caused
                by themselves, their visitors, or their pets to park property,
                utilities, landscaping, or facilities.
              </li>
              <li>
                We reserve the right to bill guests for repair or replacement
                costs, including labor and materials.
              </li>
              <li>
                Guests must notify management immediately of any issues or
                damages.
              </li>
            </ul>
          </article>

          <article className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              4. Safety and Conduct
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Speed limit within the park is 10 mph, and all vehicles must be
                operated safely.
              </li>
              <li>
                Firearms, fireworks, and illegal activities are strictly
                prohibited.
              </li>
              <li>Children must be supervised at all times.</li>
              <li>Quiet hours are from 9 PM to 5 AM.</li>
              <li>
                Pets must be leashed and cleaned up after. Aggressive breeds or
                animals may be restricted.
              </li>
            </ul>
          </article>

          <article className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              5. Utilities and Services
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Tampering with electrical, water, or sewage connections is
                strictly prohibited.
              </li>
              <li>
                Any utility overuse or abuse may result in additional charges or
                termination of service.
              </li>
              <li>
                Guests are responsible for winterizing their own RVs and
                connections during freezing conditions.
              </li>
            </ul>
          </article>

          <article className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              6. Limitation of Liability
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Tut Huts RV Park, its owners, and staff are not liable for any
                accidents, injuries, loss, theft, or damage to personal property
                or vehicles while on the premises.
              </li>
              <li>
                Guests agree to indemnify and hold harmless the RV park from all
                claims, damages, or expenses arising out of or related to their
                stay.
              </li>
              <li>Use of park amenities and facilities is at your own risk.</li>
            </ul>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-2">
              7. Modifications and Enforcement
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Management reserves the right to modify these terms and
                conditions at any time.
              </li>
              <li>
                Failure to enforce any part of these terms does not constitute a
                waiver of the right to enforce any other part.
              </li>
            </ul>
            <p className="mt-4 font-semibold">
              By staying at Tut Huts RV Park, you acknowledge that you have
              read, understand, and agree to these Terms & Conditions.
            </p>
          </article>
        </section> 
        }

        {/* Cancellation Policy */}
        {activeTab === "cancellation" && <section aria-labelledby="cancellation-heading">
          <h2 id="cancellation-heading" className="text-3xl font-semibold mb-4">
            Cancellation Policy
          </h2>

          <article className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">1. Definitions</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Short-Term Stay:</strong> Reservations of 1–29
                consecutive nights.
              </li>
              <li>
                <strong>Mid-Term Stay:</strong> Reservations of 30–89
                consecutive nights.
              </li>
              <li>
                <strong>Long-Term Stay:</strong> Reservations of 90+ consecutive
                nights.
              </li>
            </ul>
          </article>

          <article className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              2. Reservation Deposit
            </h3>
            <p>
              A non-refundable deposit equal to one night’s stay (for
              short-term) or first month’s rent (for mid- and long-term) is due
              at booking. Deposits secure your site and apply toward your total
              stay.
            </p>
          </article>

          <article className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              3. Guest-Initiated Cancellations
            </h3>
            <table className="w-full border border-gray-300 text-left mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-3 py-2">
                    Stay Type
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    Notice Required
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    Refundable Amount*
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">
                    Short-Term
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    ≥ 7 days before arrival
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    100% of pre-paid nights beyond deposit
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">
                    Short-Term
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    3–6 days before arrival
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    50% of pre-paid nights beyond deposit
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">
                    Short-Term
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    &lt; 3 days before arrival
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    No refund beyond deposit
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Mid-Term</td>
                  <td className="border border-gray-300 px-3 py-2">
                    ≥ 14 days before arrival
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    100% of pre-paid rent beyond deposit
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Mid-Term</td>
                  <td className="border border-gray-300 px-3 py-2">
                    7–13 days before arrival
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    50% of pre-paid rent beyond deposit
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Mid-Term</td>
                  <td className="border border-gray-300 px-3 py-2">
                    &lt; 7 days before arrival
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    No refund beyond deposit
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">
                    Long-Term
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    ≥ 30 days before arrival
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    100% of pre-paid rent beyond deposit
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">
                    Long-Term
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    14–29 days before arrival
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    50% of pre-paid rent beyond deposit
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">
                    Long-Term
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    &lt; 14 days before arrival
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    No refund beyond deposit
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm italic">
              *Refund applies only to nights or months fully pre-paid at time of
              cancellation.
            </p>
          </article>

          <article className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              4. Park-Initiated Cancellations
            </h3>
            <p>
              If we must cancel your reservation (e.g., emergency maintenance,
              safety concerns), you will receive a full refund of all pre-paid
              amounts, including deposit, or the option to rebook without
              penalty.
            </p>
          </article>

          <article className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              5. No-Show & Early Departures
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>No-Show:</strong> Failure to check in by 7:00 PM on
                arrival date without notice forfeits all pre-paid amounts,
                unless otherwise communicated with management beforehand.
              </li>
              <li>
                <strong>Early Departure:</strong> Departures before the
                scheduled checkout will be treated as a cancellation effective
                on the date we receive written notice; refund eligibility
                follows the Guest-Initiated Cancellation terms based on notice
                provided.
              </li>
            </ul>
          </article>

          <article className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">6. Modifications</h3>
            <p>
              Date or site changes are subject to availability. Modifications
              made under the same notice windows above incur no additional fees;
              outside those windows, standard cancellation terms apply.
            </p>
          </article>

          <article className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              7. Special Circumstances
            </h3>
            <p>
              In cases of severe weather, public health orders, or other “acts
              of God,” cancellation and refund terms may be adjusted at
              management’s discretion.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-2">
              8. How to Cancel or Modify
            </h3>
            <p>Send cancellation or modification requests in writing to:</p>
            <address className="not-italic ml-4 mt-2">
              Email:{" "}
              <a
                href="mailto:tuthutsrvpark@gmail.com"
                className="text-blue-600 underline"
              >
                tuthutsrvpark@gmail.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+12055300408" className="text-blue-600 underline">
                (205) 530-0408
              </a>
            </address>
          </article>
        </section>
        }
      </main>
    </>
  );
}
