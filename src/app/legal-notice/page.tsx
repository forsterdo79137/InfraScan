import Link from "next/link";

const LegalNotice = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-16 pb-8 md:pt-[120px] md:pb-[30px] xl:pt-[140px] xl:pb-[40px] 2xl:pt-[160px] 2xl:pb-[50px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Legal Notice
                </h1>
                <p className="mb-8 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Company Information
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 pt-4 lg:pb-[90px] lg:pt-8">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px]">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Company Information</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      <strong>Dominik-Luis Forster</strong><br />
                      Dresdner Straße 52<br />
                      92318 Neumarkt<br />
                      <br />
                      <strong>Professional Title:</strong> Engineer<br />
                      (awarded in Germany)
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Contact</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      <strong>Phone:</strong> +49 170 4502488<br />
                      <strong>Email:</strong> dominik-luis.forster@tecnico.ulisboa.pt
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">EU Dispute Resolution</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      The European Commission provides a platform for online dispute resolution (OS):
                    </p>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        https://ec.europa.eu/consumers/odr/
                      </a>
                    </p>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      Our email address can be found above in the company information.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Consumer Dispute Resolution</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      We are neither obligated nor willing to participate in dispute resolution procedures before a consumer arbitration board.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Liability for Content</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      As a service provider, we are responsible for our own content on these pages according to general laws. However, we do not guarantee the accuracy, completeness, or timeliness of the provided content.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Liability for Links</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      Our offer contains links to external third-party websites. We have no influence on their content. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always responsible for their content.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Copyright</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      The content and works created by the site operator on these pages are subject to German copyright law. Third-party contributions are marked as such. Reproduction, editing, distribution, or any kind of exploitation outside the limits of copyright requires the written consent of the respective author or creator.
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      <strong>Last updated:</strong> March 2025
                    </p>
                  </div>

                  <div className="mt-12 text-center">
                    <Link
                      href="/"
                      className="rounded-lg bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalNotice; 