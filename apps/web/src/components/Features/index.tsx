import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Link from "next/link";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Infrastructure Inspection Features"
            paragraph="Discover how InfraScan's AI-powered platform revolutionizes infrastructure inspection with cutting-edge technology."
            center
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => (
              <div
                key={feature.id}
                className={`group relative overflow-hidden rounded-xl border border-gray-200 p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                  index === 0 
                    ? "bg-primary text-white" 
                    : "bg-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:text-white"
                }`}
              >
                {/* Background gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 transition-all duration-500 group-hover:from-primary/10 group-hover:to-secondary/10"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 ${
                    index === 0 
                      ? "bg-white/20 text-white" 
                      : `${feature.color} group-hover:bg-white/20 group-hover:text-white`
                  }`}>
                    <div className="h-6 w-6">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`mb-3 text-xl font-bold transition-colors duration-300 ${
                    index === 0 
                      ? "text-white" 
                      : "text-black group-hover:text-white"
                  }`}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className={`mb-4 text-base leading-relaxed transition-colors duration-300 ${
                    index === 0 
                      ? "text-white/90" 
                      : "text-body-color group-hover:text-white/90"
                  }`}>
                    {feature.paragraph}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href="#contact"
                    className={`inline-flex items-center font-medium transition-all duration-300 hover:translate-x-1 ${
                      index === 0 
                        ? "text-white hover:text-white/80" 
                        : `${feature.color.split(' ')[0]} group-hover:text-white`
                    }`}
                  >
                    Learn more →
                  </Link>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute -right-2 -top-2 h-16 w-16 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-20 ${
                  index === 0 
                    ? "bg-white/30" 
                    : "bg-white/20"
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
