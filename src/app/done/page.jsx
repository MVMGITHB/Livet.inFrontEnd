"use client";

import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    // Setup a timer for redirection after 3 seconds
    const timer = setTimeout(() => {
      window.location.href =
        "https://spectrum.gotrackier.com/click?campaign_id=1201&pub_id=945&source=%7Byour-sub-aff-id%7D";
    }, 3000);

    // Return cleanup function to clear timer if component unmounts early
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-6">
      {/* Hidden Iframe for Pixel Tracking */}
      <iframe
        src="https://mvmbs.offershub.link/pb_x?offer_id=1&adv_key=IBRV1hsGLqwCPugw"
        scrolling="no"
        frameBorder="0"
        width="1"
        height="1"
        style={{ display: "none" }}
        aria-hidden="true"
        tabIndex={-1}
      ></iframe>

      <div className="max-w-7xl w-full bg-white rounded-3xl shadow-xl p-10 md:p-16 flex flex-col lg:flex-row items-stretch gap-5 lg:gap-10 flex-grow">
        {/* Left Section - Message */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left flex flex-col justify-center">
          <h1 className="text-4xl md:text-4xl font-extrabold text-blue-900 leading-tight tracking-wide drop-shadow-md">
            Thank you for registering!
          </h1>
          <p className="text-lg md:text-xl text-black max-w-lg mx-auto lg:mx-0 leading-relaxed">
            We will be sharing your details with our partner to generate your
            credit Score and will share your report soon.
          </p>
          <p className="text-indigo-600  text-3xl italic max-w-md mx-auto lg:mx-0">
            You will now be redirected to an exclusive offer customized for you.
          </p>
        </div>

        {/* Right Section - Video */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg ring-2 ring-indigo-300 flex-grow max-h-[400px] md:max-h-[500px] lg:max-h-[600px]">
          <video
            src="/video/meter.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
