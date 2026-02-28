"use client";

import { useState } from "react";
import {
  Download,
  Linkedin,
  Github,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  FileText,
  ChevronRight,
  ExternalLink,
  Menu,
  X,
  Cpu,
  Eye,
  Shield,
  Flame,
  Trophy,
  BookOpen,
} from "lucide-react";

/* ───────────────────────── DATA ───────────────────────── */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
];

const SKILLS = {
  Languages: ["C++", "Java", "Python"],
  Frameworks: [
    "HTML & CSS",
    "Bootstrap",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scikit-learn",
  ],
  "Tools / Platforms": ["MySQL", "MongoDB"],
  "Soft Skills": [
    "Solution Oriented",
    "Collaborative",
    "Adaptable",
    "Client-first Approach",
  ],
};

const PROJECTS = [
  {
    title: "Real-Time Video Surveillance for Threat Detection",
    date: "July 2025",
    icon: <Eye className="w-5 h-5" />,
    points: [
      "Built a real-time video surveillance system for threat detection using Support Vector Machine (SVM)",
      "Implemented frame extraction, preprocessing, and feature engineering techniques for ML analysis",
      "Utilized OpenCV for real-time video capture, frame processing, and visualization of detection results",
      "Achieved 89.8% accuracy in classifying real-time video frames",
    ],
    tech: [
      "OpenCV",
      "SVM",
      "Matplotlib",
      "NumPy",
      "Pandas",
      "Scikit-learn",
    ],
  },
  {
    title: "AI Surveillance for Smoke Detection",
    date: "Nov 2024",
    icon: <Flame className="w-5 h-5" />,
    points: [
      "Developed an AI-based surveillance system capable of detecting smoke and fire in real-time",
      "Implemented computer vision and machine learning techniques to identify smoke patterns with high precision",
      "Built a scalable system applicable for public safety, industrial monitoring and smart surveillance environments",
    ],
    tech: [
      "Python",
      "OpenCV",
      "Scikit-learn",
      "SVM",
      "NumPy",
      "Pandas",
      "Matplotlib",
    ],
  },
];

const CERTIFICATES = [
  {
    title:
      "Build Generative AI Apps and Solutions with No-Code Tools",
    org: "Infosys",
    date: "Aug 2025",
  },
  {
    title: "Master Generative AI & Generative AI Tools",
    org: "Infosys",
    date: "Aug 2025",
  },
  {
    title: "AI & ML for Real-world Problem Solving",
    org: "LPU",
    date: "Jun 2025",
  },
];

const ACHIEVEMENTS = [
  {
    title: "Ranked in the top 10 teams in Cyber Security Hack-quest",
    date: "Mar 2024",
  },
  {
    title:
      "Secured 2nd position in the Interhostel Drawing Competition for creative illustration skills",
    date: "Jan 2024",
  },
];

const EDUCATION = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology — Computer Science & Engineering",
    result: "CGPA: 7.98",
    period: "Since Aug 2023",
  },
  {
    institution: "BTC Govt. Girls Model Sr. Sec. School",
    location: "Nurpur, H.P.",
    degree: "Intermediate",
    result: "Percentage: 92%",
    period: "Apr 2022 – Mar 2023",
  },
  {
    institution: "Noorpur Public School",
    location: "Nurpur, H.P.",
    degree: "Matriculation",
    result: "Percentage: 87.6%",
    period: "Apr 2020 – Mar 2021",
  },
];

/* ───────────────────────── COMPONENTS ───────────────────────── */

function SectionHeading({
  icon,
  title,
  id,
}: {
  icon: React.ReactNode;
  title: string;
  id: string;
}) {
  return (
    <div id={id} className="flex items-center gap-3 mb-8 scroll-mt-24">
      <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
        {icon}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/40 to-transparent ml-3" />
    </div>
  );
}

function SkillBadge({ label }: { label: string }) {
  return (
    <span className="skill-badge inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 cursor-default">
      {label}
    </span>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans">
      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 inset-x-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              className="text-xl font-bold gradient-text tracking-tight"
            >
              Vaishnavi
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link text-sm text-slate-400 hover:text-indigo-300 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/Mock Drive CV_260212_133126.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-700/50 mt-1">
              <div className="flex flex-col gap-1 pt-3">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:bg-indigo-500/10 hover:text-indigo-300 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="/Mock Drive CV_260212_133126.pdf"
                  download
                  className="mx-3 mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-float delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="animate-fade-in-up mb-8">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-[#1e293b] flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl font-bold gradient-text">
                    V
                  </span>
                </div>
              </div>
            </div>

            {/* Intro */}
            <p className="animate-fade-in-up delay-100 text-indigo-400 font-medium text-sm tracking-widest uppercase mb-3">
              Hello, I&apos;m
            </p>
            <h1 className="animate-fade-in-up delay-200 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
              <span className="gradient-text">Vaishnavi</span>
            </h1>
            <p className="animate-fade-in-up delay-300 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
              Aspiring AI &amp; ML Engineer &bull; B.Tech CSE Student at LPU
              &bull; Passionate about building intelligent systems that solve
              real-world problems
            </p>

            {/* CTA */}
            <div className="animate-fade-in-up delay-400 flex flex-wrap items-center justify-center gap-4 mb-10">
              <a
                href="/Mock Drive CV_260212_133126.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 hover:border-indigo-400 text-slate-300 hover:text-indigo-300 font-semibold transition-all hover:scale-105"
              >
                View Projects
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social */}
            <div className="animate-fade-in-up delay-500 flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/vaishnavi79"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/80 hover:bg-indigo-500/20 text-slate-400 hover:text-indigo-400 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/krishcharu97-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/80 hover:bg-indigo-500/20 text-slate-400 hover:text-indigo-400 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-indigo-400" />
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="about"
            icon={<Cpu className="w-5 h-5" />}
            title="About Me"
          />
          <div className="glass rounded-2xl p-6 sm:p-8 card-hover">
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              I am a Computer Science &amp; Engineering student at Lovely
              Professional University with a strong interest in Artificial
              Intelligence and Machine Learning. I enjoy working on projects
              that combine computer vision with ML algorithms to create
              impactful, real-world applications — from surveillance systems to
              AI-powered detection tools. I&apos;m solution-oriented,
              collaborative, and always eager to learn and grow.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                Punjab, India
              </span>
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                B.Tech CSE — LPU
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                Available for Opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section className="py-20 sm:py-28 bg-[#0b1120]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="skills"
            icon={<Code2 className="w-5 h-5" />}
            title="Skills"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div
                key={category}
                className="glass rounded-2xl p-6 card-hover"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {items.map((s) => (
                    <SkillBadge key={s} label={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="projects"
            icon={<FileText className="w-5 h-5" />}
            title="Projects"
          />
          <div className="grid gap-6">
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="glass rounded-2xl p-6 sm:p-8 card-hover"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                      {p.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
                      {p.title}
                    </h3>
                  </div>
                  <span className="text-sm text-slate-400 shrink-0">
                    {p.date}
                  </span>
                </div>
                <ul className="space-y-2.5 mb-5">
                  {p.points.map((pt, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm sm:text-base text-slate-300"
                    >
                      <ChevronRight className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE / INTERNSHIP ─── */}
      <section className="py-20 sm:py-28 bg-[#0b1120]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="experience"
            icon={<Briefcase className="w-5 h-5" />}
            title="Experience"
          />
          <div className="glass rounded-2xl p-6 sm:p-8 card-hover relative overflow-hidden">
            {/* Timeline line */}
            <div className="absolute left-8 sm:left-10 top-20 bottom-8 w-px bg-gradient-to-b from-indigo-500/50 to-transparent hidden sm:block" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Summer Training Program
                </h3>
                <p className="text-indigo-400 text-sm font-medium mt-1">
                  AI &amp; ML for Real-world Problem Solving — LPU
                </p>
              </div>
              <span className="text-sm text-slate-400 shrink-0">
                July 2025
              </span>
            </div>
            <ul className="space-y-2.5">
              {[
                "Completed a Summer Internship Program focused on ML workflow including data collection, preprocessing, feature engineering, model training and evaluation",
                "Learned to use AI tools and libraries like Python, NumPy, Pandas, Matplotlib and Scikit-learn",
                "Designed and formulated a real-time video surveillance system for threat detection using SVM for activity classification",
              ].map((pt, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm sm:text-base text-slate-300"
                >
                  <ChevronRight className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              {["OpenCV", "Scikit-learn", "SVM", "Matplotlib"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATES & ACHIEVEMENTS ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="certificates"
            icon={<Award className="w-5 h-5" />}
            title="Certificates & Achievements"
          />

          {/* Certificates */}
          <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-4">
            Certificates
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {CERTIFICATES.map((c) => (
              <div
                key={c.title}
                className="glass rounded-xl p-5 card-hover group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs text-slate-400">{c.date}</span>
                </div>
                <h4 className="text-sm font-semibold text-white mb-1 leading-snug">
                  {c.title}
                </h4>
                <p className="text-xs text-slate-400">{c.org}</p>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-4">
            Achievements
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((a) => (
              <div
                key={a.title}
                className="glass rounded-xl p-5 card-hover flex items-start gap-3"
              >
                <Trophy className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white leading-snug">
                    {a.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">{a.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section className="py-20 sm:py-28 bg-[#0b1120]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="education"
            icon={<GraduationCap className="w-5 h-5" />}
            title="Education"
          />
          <div className="space-y-4">
            {EDUCATION.map((e) => (
              <div
                key={e.institution}
                className="glass rounded-2xl p-6 sm:p-8 card-hover"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {e.institution}
                    </h3>
                    <p className="text-sm text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {e.location}
                    </p>
                  </div>
                  <span className="text-sm text-slate-400 shrink-0">
                    {e.period}
                  </span>
                </div>
                <p className="text-slate-300 text-sm sm:text-base">
                  {e.degree}
                </p>
                <p className="text-indigo-400 text-sm font-semibold mt-1">
                  {e.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA / CONNECT ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-8">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just a friendly chat about tech.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/vaishnavi79"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/krishcharu97-maker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 hover:border-indigo-400 text-slate-300 hover:text-indigo-300 font-semibold transition-all hover:scale-105"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="/Mock Drive CV_260212_133126.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 hover:border-indigo-400 text-slate-300 hover:text-indigo-300 font-semibold transition-all hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Vaishnavi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/vaishnavi79"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/krishcharu97-maker"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
