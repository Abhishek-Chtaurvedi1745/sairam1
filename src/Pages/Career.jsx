import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  TrendingUp,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const points = [
  {
    icon: TrendingUp,
    title: "Grow With Purpose",
    text: "We empower our team members to grow professionally while helping students achieve their academic goals with confidence.",
  },
  {
    icon: HeartHandshake,
    title: "Values-Driven Culture",
    text: "We believe in building a work culture rooted in honesty, commitment, transparency, and mutual respect.",
  },
  {
    icon: Sparkles,
    title: "Positive Environment",
    text: "Our aim is to create a positive and growth-oriented environment where employees feel motivated, supported, and encouraged to contribute.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    text: "We bring together experienced education consultants and passionate young professionals who promote collaboration and innovation.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    text: "Through regular training programs, workshops, and knowledge-sharing sessions, we invest in strengthening our team's expertise.",
  },
  {
    icon: GraduationCap,
    title: "Industry Mentorship",
    text: "Our mentorship-driven approach helps employees stay updated with education trends, admission processes, and student needs.",
  },
  {
    icon: MessageCircle,
    title: "Open Communication",
    text: "We encourage open communication across all levels and value every team member's contribution toward student success.",
  },
  {
    icon: Lightbulb,
    title: "Leadership Access",
    text: "Employees have direct opportunities to interact with leadership, share feedback, and participate in the organization's growth.",
  },
];

function Career() {
  return (
    <div className="bg-[#F7FBFC]">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#002741] via-[#0a4a5c] to-[#49BBBD]">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-[#49BBBD]/50 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex items-center text-white/80 text-sm md:text-base font-medium mb-5">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <span className="mx-2">»</span>
            <span className="text-white">Careers</span>
          </div>

          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
            Build a career that shapes futures
          </h1>
          <p className="mt-5 text-white/90 text-base md:text-xl max-w-2xl leading-relaxed">
            Join Sairam Education & Consultancy Services and help students find
            the right path while growing in a supportive, impact-driven team.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/919146056767"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
            >
              <FaWhatsapp className="text-xl" />
              Connect on WhatsApp
            </a>
            <a
              href="#why-work"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-full border border-white/30 backdrop-blur-sm transition"
            >
              Why join us
            </a>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-[#d9eff0] px-6 md:px-12 py-10 md:py-12 text-center">
          <p className="text-[#49BBBD] font-semibold tracking-wide uppercase text-sm mb-2">
            We&apos;re hiring talent
          </p>
          <h2 className="text-[#002741] text-3xl md:text-4xl font-bold">
            Find a career that makes a difference
          </h2>
          <p className="mt-4 text-[#5b5f8a] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We think big and set the pace in this industry. We empower outcomes,
            forge partnerships, and bring students closer to their dream careers.
          </p>
          <a
            href="https://wa.me/919146056767"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 bg-[#002741] hover:bg-[#01405f] text-white text-base md:text-lg font-semibold px-8 py-3.5 rounded-full shadow-md transition"
          >
            <FaWhatsapp className="text-xl" />
            Apply / Enquire on WhatsApp
          </a>
        </div>
      </section>

      {/* Why work with us */}
      <section id="why-work" className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-[#002741] text-3xl md:text-5xl font-bold">
              Why work with Sairam Education
            </h2>
            <div className="mx-auto mt-4 w-20 h-[3px] rounded-full bg-[#49BBBD]" />
            <p className="mt-4 text-[#5b5f8a] text-base md:text-lg max-w-2xl mx-auto">
              A workplace built on growth, trust, and meaningful student impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {points.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-[#e6f3f4] shadow-sm hover:shadow-lg hover:border-[#49BBBD]/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E8F7F7] text-[#49BBBD] flex items-center justify-center mb-4 group-hover:bg-[#49BBBD] group-hover:text-white transition-colors">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-[#002741] text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#5b5f8a] text-sm md:text-[15px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-[#49BBBD] to-[#2F8A8C] px-6 md:px-12 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white text-2xl md:text-3xl font-bold">
              Ready to join our team?
            </h3>
            <p className="text-white/90 mt-2 text-base md:text-lg">
              Message us on WhatsApp and start your journey with Sairam Education.
            </p>
          </div>
          <a
            href="https://wa.me/919146056767"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#2F8A8C] hover:bg-gray-50 font-semibold px-7 py-3.5 rounded-full shadow-lg transition whitespace-nowrap"
          >
            <FaWhatsapp className="text-xl" />
            Chat with HR
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Career;
