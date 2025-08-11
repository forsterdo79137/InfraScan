"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Early Access Pricing"
          paragraph="Join the waitlist for exclusive early access to InfraScan. Choose the plan that best fits your infrastructure inspection needs."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Starter"
            price={isMonthly ? "300" : "3000"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Perfect for small contractors and government agencies getting started with AI-powered inspections."
          >
            <OfferList text="Photogrammetry" status="inactive" />
            <OfferList text="Automatic 3D Model Generation" status="inactive" />
            <OfferList text="BIM Integration" status="inactive" />
            <OfferList text="1 User" status="active" />
            <OfferList text="20,000 Photos Upload" status="active" />
            <OfferList text="40 GB Storage" status="active" />
            <OfferList text="AI Crack Detection" status="active" />
            <OfferList text="Basic Reporting" status="active" />
            <OfferList text="Email Support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Professional"
            price={isMonthly ? "500" : "5000"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Advanced features for growing teams and larger infrastructure projects."
          >
            <OfferList text="Custom Workflows" status="inactive" />
            <OfferList text="Dedicated Support" status="inactive" />
            <OfferList text="Advanced Photogrammetry" status="inactive" />
            <OfferList text="5 Users" status="active" />
            <OfferList text="40,000 Photos Upload" status="active" />
            <OfferList text="80 GB Storage" status="active" />
            <OfferList text="AI Crack Detection" status="active" />
            <OfferList text="Photogrammetry" status="active" />
            <OfferList text="Automatic 3D Model Generation" status="active" />
            <OfferList text="Advanced Reporting" status="active" />
            <OfferList text="BIM Integration" status="active" />
            <OfferList text="Priority Support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Enterprise"
            price="On Request"
            duration=""
            subtitle="Complete solution for large organizations with complex infrastructure needs."
          >
            <OfferList text="Unlimited Users" status="active" />
            <OfferList text="Unlimited Photos Upload" status="active" />
            <OfferList text="Unlimited Storage" status="active" />
            <OfferList text="AI Crack Detection" status="active" />
            <OfferList text="Advanced Photogrammetry" status="active" />
            <OfferList text="Custom 3D Model Generation" status="active" />
            <OfferList text="BIM Integration" status="active" />
            <OfferList text="Custom Workflows" status="active" />
            <OfferList text="Dedicated Support" status="active" />
            <OfferList text="API Access" status="active" />
            <OfferList text="White-label Solution" status="active" />
            <OfferList text="Custom Integrations" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1e3a8a" />
              <stop offset="1" stopColor="#1e3a8a" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1e3a8a" />
              <stop offset="1" stopColor="#1e3a8a" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
