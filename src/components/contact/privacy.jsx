export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 sm:p-14">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your privacy is our priority at{" "}
            <span className="font-semibold text-blue-600">livet.in</span>.
          </p>
        </div>

        <div className="space-y-8 text-gray-700 text-base leading-relaxed">
          <p>
            At <strong>livet.in</strong>, your privacy is a top priority. This
            Privacy Policy outlines how we collect, use, and safeguard your
            information when you use our credit score checking services.
          </p>

          <p>
            We only collect the personal information necessary to provide
            accurate credit score insights. This includes your contact details
            and identity information to verify your credit profile.
          </p>

          <p>
            All data you share is treated with strict confidentiality and stored
            securely. We do not share your personal information with third
            parties without your explicit consent.
          </p>

          <p>
            You have full control over your data. You can request access,
            updates, or deletion of your personal information at any time.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl">
            <p className="text-sm sm:text-base">
              For any privacy-related questions or concerns, feel free to
              contact our support team at:{" "}
              <a
                href="mailto:contact@livet.in"
                className="text-blue-600 underline font-medium"
              >
                contact@livet.in
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} livet.in. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
