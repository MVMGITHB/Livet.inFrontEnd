"use client";

import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    // Redirect after a short delay (e.g., 3 seconds) — optional
    const timer = setTimeout(() => {
      window.location.href =
        "https://spectrum.gotrackier.com/click?campaign_id=1201&pub_id=945&source=%7Byour-sub-aff-id%7D";
    }, 3000); // delay in milliseconds (3000 = 3s)

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 mb-20">
      {/* Hidden Iframe for Pixel Tracking */}
      <iframe
        src="https://mvmbs.offershub.link/pb_x?offer_id=1&adv_key=IBRV1hsGLqwCPugw"
        scrolling="no"
        frameBorder="0"
        width="1"
        height="1"
        style={{ display: "none" }}
      ></iframe>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Section - Message */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Thank you for registering. We will be sharing your details with our
            partner to generate your credit Score and will share your report
            soon.
          </h1>
          <p className="text-lg text-gray-600">
            You will now be redirected to an exclusive offer customized for you.
          </p>
        </div>

        {/* Right Section - Video */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-inner mx-auto">
          <video
            src="/video/meter.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
