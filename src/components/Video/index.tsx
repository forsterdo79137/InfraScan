"use client";

import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const steps = [
    {
      id: 1,
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
      ),
      title: "Upload Images",
      description: "Upload photos from drones, smartphones, or cameras. Our platform accepts multiple image formats and automatically processes them for analysis."
    },
    {
      id: 2,
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 3L5 7L9 11" />
          <path d="M15 3L19 7L15 11" />
          <path d="M12 21L12 7" />
        </svg>
      ),
      title: "AI Segmentation",
      description: "Advanced AI algorithms automatically identify and segment structural cracks, defects, and areas of concern with high precision and accuracy."
    },
    {
      id: 3,
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3L21 3L21 21L3 21Z" />
          <path d="M7 7L17 7" />
          <path d="M7 11L17 11" />
          <path d="M7 15L17 15" />
          <path d="M7 19L17 19" />
        </svg>
      ),
      title: "Measure & Report",
      description: "Generate detailed measurements, digital twins, and comprehensive reports with exact crack dimensions, locations, and structural health assessments."
    }
  ];

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Three Steps to Infrastructure Analysis"
            paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            center
            mb="80px"
          />

          {/* Three Steps Process Flow */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.id} className="group relative">
                  {/* Step Icon */}
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-lg transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-xl">
                    {step.icon}
                  </div>

                  {/* Flow Arrow (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 left-full z-10 hidden w-16 md:block">
                      <div className="flex items-center justify-center">
                        <div className="h-0.5 w-12 bg-gray-300 transition-all duration-300 group-hover:bg-primary"></div>
                        <div className="mx-2 h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-125"></div>
                        <div className="h-0.5 w-12 bg-gray-300 transition-all duration-300 group-hover:bg-primary"></div>
                      </div>
                    </div>
                  )}

                  {/* Content Block */}
                  <div className="text-center transition-all duration-300 group-hover:transform group-hover:scale-105">
                    <h3 className="mb-4 text-xl font-bold text-primary transition-colors duration-300 group-hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
