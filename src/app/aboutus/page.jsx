export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800 px-6 py-20">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About <span className="text-blue-600">livet.in</span></h1>
        <p className="text-lg text-gray-600">
          Your trusted source for credit score checking and financial insights — simplifying your financial health in 5 key steps.
        </p>
      </div>

      {/* Info Sections */}
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Who We Are */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="text-4xl">🙋‍♂️</div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              livet.in is a platform dedicated to helping you understand and improve your credit score. Our goal is to empower individuals with
              knowledge to make informed financial decisions, using easy-to-understand credit score insights and recommendations.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="text-4xl">🎯</div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide accurate, actionable, and accessible credit score insights for everyone. We aim to deliver transparent solutions that
              help you take charge of your financial future — one score at a time.
            </p>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="text-4xl">💡</div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">What Makes Us Different</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Accurate Insights:</strong> We offer real-time credit data to keep you informed.</li>
              <li><strong>User-Centric:</strong> Designed with you in mind, every step of the way.</li>
              <li><strong>Educational:</strong> We provide clarity and confidence, not just numbers.</li>
              <li><strong>Transparent:</strong> No jargon. No tricks. Just plain truth.</li>
              <li><strong>Community-Focused:</strong> Join a growing group of financially empowered individuals.</li>
            </ul>
          </div>
        </div>

        {/* Join the Community */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="text-4xl">🚀</div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Join the Community</h2>
            <p className="text-gray-700 leading-relaxed">
              Ready to take control of your credit score and financial future? Sign up for free to access our tools, resources, and insights
              built to support your journey toward financial stability.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-20 border-t pt-8">
        <p className="text-gray-600 mb-2">📬 Have questions or want to partner with us?</p>
        <a
          href="mailto:contact@livet.in"
          className="text-blue-600 hover:underline font-semibold"
        >
          contact@livet.in
        </a>
      </div>
    </div>
  );
}
