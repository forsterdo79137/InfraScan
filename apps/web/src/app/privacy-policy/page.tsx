import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-16 pb-8 md:pt-[120px] md:pb-[30px] xl:pt-[140px] xl:pb-[40px] 2xl:pt-[160px] 2xl:pb-[50px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Privacy Policy
                </h1>
                <p className="mb-8 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Last updated: March 2025
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
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">1. General Information</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      InfraScan takes the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations (particularly the GDPR) and this privacy policy.
                    </p>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      <strong>Responsible Party:</strong><br />
                      Dominik-Luis Forster<br />
                      Dresdner Str. 52<br />
                      92318 Neumarkt<br />
                      Phone: +49 170 4502488<br />
                      Email: support@disima.org
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">2. Data Collection When Visiting Our Website</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      When visiting our website, we automatically collect general data (e.g., browser type, operating system, IP address, time of access) for technical reasons. This data is used exclusively to ensure smooth operation and IT security and is deleted after a short period.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">3. Contact via Email or Contact Form</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      If you contact us via email or contact form, we store your information to process your request and for possible follow-up questions. Data processing is based on your consent (Art. 6(1)(a) GDPR). Your data will not be shared without your consent.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">4. Registration on Our Website</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      When registering for an account on InfraScan, we store personal data (such as name, email address, company) to provide you with our services. This data will not be shared with third parties without your consent. You can request deletion of your data at any time.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">5. Cookies</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      Our website uses technically necessary cookies that are required for the website to function (Art. 6(1)(f) GDPR). Additionally, we only use analysis and marketing cookies with your explicit consent (Art. 6(1)(a) GDPR). You can revoke this consent at any time.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">6. Web Analytics (e.g., Google Analytics)</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      We may use services like Google Analytics to analyze the use of our website to improve our offerings. Cookies are used and usage information is evaluated anonymously. Identification of individual users is not possible.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">7. Data Sharing</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      We do not share personal data with third parties unless required by law or necessary for contract fulfillment (e.g., payment processing through external service providers like Stripe). We ensure that these service providers strictly comply with data protection regulations.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">8. Rights of Data Subjects</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      Under GDPR, you have the right to access, rectify, erase, or restrict the processing of your stored personal data at any time. You can also revoke your consent and object to processing. Simply contact us at the address provided above.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">9. Data Security</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      InfraScan implements appropriate technical and organizational measures to protect your data. Our security measures are regularly reviewed and updated.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">10. Changes to This Policy</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      We reserve the right to modify this privacy policy as needed. The current version can always be found on our website.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">11. Contact</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      For questions or suggestions regarding data protection, please contact us via email at dominik-luis.forster@tecnico.ulisboa.pt or by mail at the address provided above.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">12. Right to File a Complaint</h2>
                    <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                      You have the right to file a complaint with a data protection supervisory authority if you believe that the processing of your personal data is unlawful.
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

export default PrivacyPolicy; 