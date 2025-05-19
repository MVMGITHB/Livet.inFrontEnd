"use client";

import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    // 🔹 1. Fire pixel immediately on load
    const pixel = document.createElement("iframe");
    pixel.src =
      "https://mvmbs.offershub.link/pb_x?offer_id=2&adv_key=GjwNGICmuK6ElVyK";
    pixel.style.display = "none";
    pixel.width = "1";
    pixel.height = "1";
    pixel.setAttribute("scrolling", "no");
    pixel.setAttribute("frameBorder", "0");
    document.body.appendChild(pixel);

    // 🔹 2. Redirect after 3 seconds
    const timer = setTimeout(() => {
      window.location.href =
        "https://trk.mrndigital.in/t/NDUwXzM4NTY/?p1=%7Bclick_id%7D&source=%7B100%7D";
    }, 3000);

    // 🔹 Cleanup pixel and timer
    return () => {
      clearTimeout(timer);
      if (pixel && pixel.parentNode) {
        pixel.parentNode.removeChild(pixel);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-6">
      <div className="max-w-7xl w-full bg-white rounded-3xl shadow-xl p-10 md:p-16 flex flex-col lg:flex-row items-stretch gap-5 lg:gap-10 flex-grow">
        {/* Left Section - Message */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-blue-900 leading-tight tracking-wide drop-shadow-md">
            Thank you for registering!
          </h1>
          <p className="text-lg md:text-xl text-black max-w-lg mx-auto lg:mx-0 leading-relaxed">
            We will be sharing your details with our partner to generate your
            credit Score and will share your report soon.
          </p>
          <p className="text-indigo-600 text-3xl italic max-w-md mx-auto lg:mx-0">
            You will now be redirected to an exclusive offer customized for you.
          </p>
        </div>

        {/* Right Section - Video */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg ring-2 ring-indigo-300 flex-grow max-h-[500px]">
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
