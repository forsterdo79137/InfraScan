import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/Hero.png"
            alt="Infrastructure Inspection"
            fill
            className="object-cover object-center opacity-20"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-[#4b5563] opacity-50"></div>
        </div>

        <div className="container relative z-10 max-w-none">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[1000px] text-center">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight">
                  AI-Powered
                  <span className="block text-blue-600 dark:text-blue-300 drop-shadow-lg">Infrastructure Inspection</span>
                </h1>
                <p className="mb-12 text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
                  Revolutionize your infrastructure inspection with advanced AI crack detection. 
                  Get precise measurements, detailed reports, and digital twins in minutes, not hours.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                  <Link
                    href="#contact"
                    className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
                  >
                    <span className="relative z-10">Get Early Access</span>
                  </Link>
                  <Link
                    href="#features"
                    className="group relative overflow-hidden rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/50"
                  >
                    <span className="flex items-center">
                      See How It Works
                      <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <svg className="h-8 w-8 text-white/70" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
