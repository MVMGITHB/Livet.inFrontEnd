export default function TermsOfServicePage() {
  const terms = [
    {
      title: "1. Promotional Offers & Newsletters",
      body: "By registering you agree to receive various promotional offers & newsletters from our side on your email ID & mobile number."
    },
    {
      title: "2. Information Usage & Contact Permissions",
      body: "By registering you allow us to save your information & reach out to you by mediums such as email, SMS, WhatsApp, RCS, etc."
    },
    {
      title: "3. Credit Score Generation Request",
      body: "We will save your request to generate a free credit score. Your request is forwarded to our credit score report generator partners to generate the free report for you when the campaign is live."
    },
    {
      title: "4. Third-Party Disclaimer",
      body: "This is a request-based third-party report generation, and we are not responsible for any changes or inaccuracies in the generation of your credit score."
    },
    {
      title: "5. Advertising Platform Clarification",
      body: "By registering, you understand that we are only an advertising platform generating leads for various brands across different categories."
    },
    {
      title: "6. Communication Consent",
      body: "You hereby expressly agree to receive communications from time to time from us, our affiliates, partners, and third parties, regarding the service rendered, important updates, feedbacks & surveys, marketing, or any other relevant messages by way of SMS, e-mails, calls (automated/agent generated), WhatsApp notifications, mobile application and browser notifications, or any other medium. You agree and consent to receive communications relating to all of the above and expressly waive any registration or preference made under DND/NCPR list under the applicable TRAI regulations."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-indigo-100">
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-10 font-serif">
          Terms of Service
        </h1>

        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
          Welcome to <strong className="text-indigo-600">livet.in</strong>! By registering and using our credit score platform,
          you agree to the terms outlined below. Please read them carefully before proceeding.
        </p>

        <div className="space-y-10">
          {terms.map(({ title, body }) => (
            <div key={title} className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-indigo-800 mb-2">{title}</h2>
              <p className="text-gray-700">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border-t pt-6">
          <p className="text-gray-600">
            Have questions? Reach us at{" "}
            <a
              href="mailto:contact@livet.in"
              className="text-indigo-600 font-medium hover:underline"
            >
              contact@livet.in
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
