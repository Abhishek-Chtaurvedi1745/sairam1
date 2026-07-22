import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function MBBSAdmissionLayout({
  stateName,
  image,
  imageAlt,
  intro,
  fees,
  quota,
  process,
  colleges,
  counselingBody,
}) {
  const title = `MBBS Admission in ${stateName}`;

  return (
    <>
      <Nav />

      <div className="relative min-h-screen bg-gray-50">
        <header className="bg-[#506878] px-[8%] py-10 text-left max-[850px]:text-center shadow-md">
          <h1 className="text-white text-4xl font-bold tracking-wide">{title}</h1>
          <p className="text-blue-100 mt-2 text-sm">
            Complete guide for admission, fees & colleges
          </p>
        </header>

        <nav className="bg-white border-b px-[8%] py-3 flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-none shadow-sm">
          <a
            href="#introduction"
            className="text-sm text-gray-600 font-medium hover:text-blue-700 transition"
          >
            Introduction
          </a>
          <a
            href="#fees"
            className="text-sm text-gray-600 font-medium hover:text-blue-700 transition"
          >
            Fees of Private Medical Colleges
          </a>
          <a
            href="#quota"
            className="text-sm text-gray-600 font-medium hover:text-blue-700 transition"
          >
            Institutions For Management Quota In NEET
          </a>
          <a
            href="#process"
            className="text-sm text-gray-600 font-medium hover:text-blue-700 transition"
          >
            MBBS Admission Process
          </a>
          <a
            href="#colleges"
            className="text-sm text-gray-600 font-medium hover:text-blue-700 transition"
          >
            Colleges for Admission in MBBS
          </a>
        </nav>

        <main className="max-w-[1200px] mx-auto my-12 px-5 grid grid-cols-1 md:grid-cols-11 gap-10">
          <section className="md:col-span-7 flex flex-col gap-6">
            <div className="overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img
                src={image}
                alt={imageAlt || `${stateName} Medical College`}
                className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 leading-snug">
              {title} – Complete Guidance for 2026
            </h2>

            <p className="text-gray-600 leading-relaxed mt-3">
              Explore top medical colleges, admission process, eligibility criteria,
              fee structure, and management quota details for MBBS admission in{" "}
              {stateName}. Get complete guidance to secure admission in government and
              private medical colleges.
            </p>

            <div className="max-w-[900px] space-y-16 text-gray-700 py-6">
              <section id="introduction">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">Introduction</h2>
                <div className="w-16 h-[3px] bg-blue-700 mb-5 rounded-full"></div>
                <div className="space-y-4 leading-relaxed">
                  {intro.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </section>

              <section id="fees">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  Fees of Private Medical Colleges
                </h2>
                <div className="w-16 h-[3px] bg-blue-700 mb-5 rounded-full"></div>
                <div className="space-y-4 leading-relaxed">
                  {fees.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </section>

              <section id="quota">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  Institutions For Management Quota In NEET
                </h2>
                <div className="w-16 h-[3px] bg-blue-700 mb-5 rounded-full"></div>
                <div className="space-y-4 leading-relaxed">
                  {quota.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </section>

              <section id="process">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  MBBS Admission Process
                </h2>
                <div className="w-16 h-[3px] bg-blue-700 mb-5 rounded-full"></div>
                <div className="space-y-4 leading-relaxed">
                  <p>
                    Admission to MBBS in {stateName} is strictly based on NEET UG scores.
                  </p>
                  {process.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  {counselingBody && (
                    <p>
                      Candidates must participate in counseling conducted by{" "}
                      {counselingBody} for seat allotment.
                    </p>
                  )}
                  <p>
                    Document verification and choice filling are important steps in the
                    admission process.
                  </p>
                </div>
              </section>

              <section id="colleges">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  Colleges for Admission in MBBS
                </h2>
                <div className="w-16 h-[3px] bg-blue-700 mb-5 rounded-full"></div>
                <div className="space-y-4 leading-relaxed">
                  {colleges.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  <p>
                    Students should choose colleges based on budget, NEET score, and
                    location preference.
                  </p>
                  <p>
                    Expert counselling can help you select the best college for your
                    future.
                  </p>
                </div>
              </section>
            </div>
          </section>

          <aside className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-7 text-center shadow-lg hover:shadow-2xl transition border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 leading-snug">
                Interested in Direct Admission?
              </h2>
              <div className="w-20 h-[3px] bg-blue-700 mx-auto mt-3 mb-5 rounded-full"></div>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Get admission in top medical colleges across India with expert guidance
                and 100% support.
              </p>
              <a
                href="tel:+919146056767"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white font-semibold px-6 py-3 rounded-xl transition shadow-md hover:shadow-lg w-full"
              >
                📞 Call Now: +91 9146056767
              </a>
            </div>

            <div
              className="relative rounded-2xl p-7 text-white shadow-xl overflow-hidden
                  bg-gradient-to-br from-red-500 via-red-600 to-red-700"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl"></div>

              <h3 className="text-xs uppercase tracking-widest text-red-100 text-center">
                100% Admission Assistance
              </h3>
              <h2 className="text-center text-2xl font-bold mt-1 mb-6">
                Request a Call Back
              </h2>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl text-gray-800 bg-white/95 focus:outline-none focus:ring-2 focus:ring-white shadow-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl text-gray-800 bg-white/95 focus:outline-none focus:ring-2 focus:ring-white shadow-sm"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 rounded-xl text-gray-800 bg-white/95 focus:outline-none focus:ring-2 focus:ring-white shadow-sm"
                />
                <select className="w-full px-4 py-3 rounded-xl text-gray-800 bg-white/95">
                  <option>MBBS</option>
                  <option>BDS</option>
                  <option>MD / MS</option>
                </select>
                <button
                  type="submit"
                  className="w-full relative overflow-hidden bg-white text-red-600 font-bold py-3 rounded-xl
             shadow-md hover:shadow-xl transition-all duration-300
             active:scale-[0.98] group"
                >
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100 to-transparent
                   translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                  ></span>
                  <span className="relative flex items-center justify-center gap-2">
                    Submit Request
                  </span>
                </button>
              </form>

              <p className="text-xs text-red-100 text-center mt-4">
                We will contact you within 24 hours
              </p>
            </div>
          </aside>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default MBBSAdmissionLayout;
