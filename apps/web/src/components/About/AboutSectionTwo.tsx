import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-video max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/Rissdarstellung.png"
                alt="Crack Representation - InfraScan Analysis"
                fill
                className="object-contain rounded-lg drop-shadow-three dark:hidden dark:drop-shadow-none"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <Image
                src="/images/about/Rissdarstellung.png"
                alt="Crack Representation - InfraScan Analysis"
                fill
                className="hidden object-contain rounded-lg drop-shadow-three dark:block dark:drop-shadow-none"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Reduce Inspection Time
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Transform inspection times from days to hours. Our AI-powered platform processes images instantly, providing immediate crack assessments and structural health insights without the need for on-site specialists.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Data-Driven Decisions
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Replace subjective visual inspections with objective, scalable AI workflows. Generate detailed digital twins that display exact crack locations, widths, and progression for informed maintenance planning.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Cost & Safety Benefits
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Minimize human error, reduce on-site risks, and lower operational costs. Our platform enables teams to make safer, faster, and more effective infrastructure maintenance decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
