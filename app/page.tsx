"use client";

import { useState, useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Menu,
  X,
  Cpu,
  Eye,
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
    title: "INmemory Database",
    link: "https://github.com/VaishnaviSoga09/INmemory-DataBase",
    date: "2024",
    icon: <Cpu className="w-5 h-5" />,
    points: [
      "Built a generic, thread-safe data storage system that stores key-value pairs using integer keys.",
      "Implemented command-based operations like PUT, GET, and DELETE, along with TTL (Time-To-Live).",
      "Demonstrated object-oriented programming principles, multithreading, exception handling, and efficient data management.",
    ],
    tech: ["Algorithms", "OOP", "Multithreading", "Data Structures"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Real-Time Video Surveillance for Threat Detection",
    link: "https://github.com/VaishnaviSoga09/Real-Time-Video-Surveillance-System-for-Threat-Detection",
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
    image: "/real-time.jpeg",
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
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Mini-Project",
    link: "https://github.com/VaishnaviSoga09/Mini-Project",
    date: "2023",
    icon: <Code2 className="w-5 h-5" />,
    points: [
      "Developed a foundational mini-project to implement core programming concepts and strengthen problem-solving logic.",
      "Focused on clean code architecture and standard development practices.",
    ],
    tech: ["Programming", "Software Development"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
];

const CERTIFICATES = [
  {
    title:
      "Build Generative AI Apps and Solutions with No-Code Tools",
    org: "Infosys",
    date: "Aug 2025",
    image: "/1-3df31122-8f72-40ba-9b61-5caf9a15fcf5 (1)_page-0001.jpg",
  },
  {
    title: "Master Generative AI & Generative AI Tools",
    org: "Infosys",
    date: "Aug 2025",
    image: "/UC-b596855c-c35a-4c77-8ddc-727c5174eb69_page-0001.jpg",
  },
  {
    title: "AI & ML for Real-world Problem Solving",
    org: "LPU",
    date: "Jun 2025",
    image: "/12318042_851_14_08_2025_page-0001.jpg",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    org: "Coursera",
    date: "2024",
    image: "/Bits and Bytes of  =computer netwroks_page-0001.jpg",
    link: "/Bits and Bytes of  =computer netwroks.pdf",
  },
  {
    title: "Computer Communications",
    org: "Coursera",
    date: "2024",
    image: "/computer communication.jpg",
    link: "/computer communication.jpg",
  },
  {
    title: "Peer-to-Peer Protocols and Local Area Networks",
    org: "Coursera",
    date: "2024",
    image: "/peer to peer.jpg",
    link: "/peer to peer.jpg",
  }
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
      <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
        {icon}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent ml-3" />
    </div>
  );
}

function SkillBadge({ label }: { label: string }) {
  return (
    <span className="skill-badge inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent-light border border-accent/20 cursor-default">
      {label}
    </span>
  );
}

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function InteractiveCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05, 
        rotateY: 10, 
        rotateX: -10,
        boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`transform-gpu ${className}`}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
    >
      <div className="h-full w-full" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

// (Removed FLOATING_SKILLS constant)

function PlanetsBackground() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Create parallax effects based on scroll position
  const y1 = useTransform(scrollY, [0, 3000], [0, -500]); // Medium up
  const y2 = useTransform(scrollY, [0, 3000], [0, -800]); // Fast up
  const y3 = useTransform(scrollY, [0, 3000], [0, -300]); // Slow up
  const y4 = useTransform(scrollY, [0, 3000], [0, -700]); // Fast up
  const y5 = useTransform(scrollY, [0, 3000], [0, -400]); // Medium up
  const y6 = useTransform(scrollY, [0, 3000], [0, -200]); // Very slow up
  const y7 = useTransform(scrollY, [0, 3000], [0, -600]); // Medium-fast up
  const y8 = useTransform(scrollY, [0, 3000], [0, -350]); // Modest up
  const y9 = useTransform(scrollY, [0, 3000], [0, -900]); // Very fast up
  const moonY = useTransform(scrollY, [0, 3000], [0, -500]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Space Background with subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-glow/20 via-background to-background" />

      {/* Twinkling Stars */}
      <div className="absolute inset-0">
        {mounted && Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-foreground"
            style={{
              width: Math.random() * 3 + "px",
              height: Math.random() * 3 + "px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
            animate={{ opacity: [0.1, 1, 0.1], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 2 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating Interactive Bubbles */}
      <div className="fixed inset-0 overflow-hidden z-10 pointer-events-none">
        {mounted && Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full cursor-grab active:cursor-grabbing pointer-events-auto backdrop-blur-md"
            style={{
              // Spread them out across the entire screen deterministically
              top: `${10 + (i * 17) % 80}vh`,
              left: `${5 + (i * 23) % 80}vw`,
              width: `${20 + (i * 13) % 60}px`,
              height: `${20 + (i * 13) % 60}px`,
              background: "radial-gradient(circle at 30% 30%, rgba(129, 140, 248, 0.4), rgba(79, 70, 229, 0.1))",
              boxShadow: "inset -2px -2px 6px rgba(129, 140, 248, 0.2), 0 0 10px rgba(79, 70, 229, 0.2)",
              border: "1px solid rgba(165, 180, 252, 0.2)"
            }}
            animate={{
              y: [0, -100, 100, -50, 0],
              x: [0, 80, -80, 40, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.9, 1.1, 0.9]
            }}
            whileHover={{
              scale: 1.3,
              opacity: 1,
              boxShadow: "inset -2px -2px 10px rgba(129, 140, 248, 0.5), 0 0 20px rgba(129, 140, 248, 0.6)",
              borderColor: "rgba(165, 180, 252, 0.6)",
              zIndex: 50,
              transition: { duration: 0.2, type: "spring", stiffness: 300 }
            }}
            whileDrag={{ scale: 1.4, opacity: 1, cursor: "grabbing" }}
            drag
            dragConstraints={{
              top: -500,
              left: -500,
              right: 500,
              bottom: 500,
            }}
            transition={{
              duration: 20 + (i % 5) * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i % 4,
            }}
          >
            {/* Inner highlight for glass bubble effect */}
            <div className="absolute top-[15%] left-[20%] w-[30%] h-[30%] bg-foreground/30 rounded-full blur-[1px]" />
          </motion.div>
        ))}
      </div>

      {/* Container for Centered Parallax Planets */}
      <div className="absolute inset-0 flex justify-center items-center">
        
        {/* Floating Planet 1 - Large Gas Giant with Rings (Middle Top) */}
        <motion.div
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full opacity-60 mix-blend-screen"
          style={{
            y: y1,
            top: "10%",
            background: "radial-gradient(circle at 30% 30%, #ec4899 0%, #8b5cf6 50%, #1e1b4b 100%)",
            boxShadow: "0 0 60px rgba(139, 92, 246, 0.3)",
          }}
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
             <div className="absolute top-[30%] left-[-20%] w-[140%] h-[40%] border-t-[4px] border-b-[8px] border-pink-400/40 rounded-[50%] transform rotate-[-20deg]" />
             <div className="absolute top-[35%] left-[-10%] w-[120%] h-[30%] border-t-[2px] border-b-[4px] border-purple-400/30 rounded-[50%] transform rotate-[-20deg]" />
          </motion.div>
        </motion.div>

        {/* Floating Planet 7 - Tiny yellow/gold moon orbiting Planet 1 */}
        <motion.div
          animate={{ 
            x: [0, 100, 0, -100, 0], 
            scale: [1, 0.8, 1, 1.2, 1],
            zIndex: [0, 0, 10, 10, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-4 h-4 md:w-6 md:h-6 rounded-full opacity-80 mix-blend-screen"
          style={{
            y: moonY,
            top: "18%",
            marginLeft: "20%",
            background: "radial-gradient(circle at 30% 30%, #fde047 0%, #ca8a04 100%)",
            boxShadow: "0 0 10px rgba(253, 224, 71, 0.6)",
          }}
        />

        {/* Floating Planet 2 - Purple/Blue textured (Middle Bottom) */}
        <motion.div
          animate={{ x: [0, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full opacity-70 mix-blend-screen bg-gradient-to-br from-accent via-accent to-accent-glow"
          style={{
            y: y2,
            top: "60%",
            marginLeft: "-25%", // offset from pure center
            boxShadow: "inset -15px -15px 30px rgba(0,0,0,0.6), 0 0 40px rgba(79, 70, 229, 0.4)",
          }}
        >
           <div className="absolute inset-x-0 top-[20%] h-[10%] bg-accent/10 blur-sm transform -skew-y-12" />
           <div className="absolute inset-x-0 bottom-[30%] h-[15%] bg-accent-light/20 blur-md transform -skew-y-6" />
        </motion.div>

        {/* Floating Planet 3 - Small Glowing Moon (Center Left) */}
        <motion.div
          animate={{ x: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute w-16 h-16 md:w-24 md:h-24 rounded-full opacity-80 mix-blend-screen"
          style={{
            y: y3,
            top: "40%",
            marginLeft: "-40%",
            background: "radial-gradient(circle at 35% 35%, #60a5fa 0%, #1e3a8a 100%)",
            boxShadow: "inset -5px -5px 15px rgba(0,0,0,0.5), 0 0 20px rgba(96, 165, 250, 0.4)",
          }}
        >
          <div className="absolute top-[20%] left-[20%] w-4 h-4 bg-accent/40 rounded-full blur-[1px]" />
          <div className="absolute bottom-[30%] right-[30%] w-6 h-6 bg-accent/50 rounded-full blur-[2px]" />
        </motion.div>
        
        {/* Floating Planet 4 - Distant Orange/Red planet (Center Right) */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full opacity-50 mix-blend-screen"
          style={{
            y: y4,
            top: "70%",
            marginLeft: "35%",
            background: "radial-gradient(circle at 25% 25%, #fb923c 0%, #9a3412 60%, #431407 100%)",
            boxShadow: "inset -8px -8px 20px rgba(0,0,0,0.7), 0 0 25px rgba(251, 146, 60, 0.2)",
          }}
        />

        {/* Floating Planet 5 - Small Teal planet (Middle Top Right) */}
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute w-12 h-12 md:w-20 md:h-20 rounded-full opacity-60 mix-blend-screen"
          style={{
            y: y5,
            top: "25%",
            marginLeft: "40%",
            background: "radial-gradient(circle at 30% 30%, #2dd4bf 0%, #0f766e 70%, #042f2e 100%)",
            boxShadow: "inset -5px -5px 15px rgba(0,0,0,0.6), 0 0 20px rgba(45, 212, 191, 0.3)",
          }}
        />

        {/* Floating Planet 6 - Massive faint blue giant (Center Background) */}
        <motion.div
          animate={{ scale: [1, 1.02, 1], rotate: [0, -2, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full opacity-20 mix-blend-screen blur-[2px]"
          style={{
            y: y6,
            top: "35%",
            background: "radial-gradient(circle at 40% 40%, #818cf8 0%, #3730a3 60%, #1e1b4b 100%)",
            boxShadow: "inset -20px -20px 50px rgba(0,0,0,0.8)",
            zIndex: -1,
          }}
        />

      </div>
    </div>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <PlanetsBackground />
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
                  className="nav-link text-sm text-muted hover:text-accent-light transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/Mock Drive CV_260212_133126.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent hover:bg-accent-light text-background text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <ModeToggle />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ModeToggle />
              {/* Mobile menu button */}
              <button
                className="p-2 rounded-lg text-muted hover:text-foreground"
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
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border/50 mt-1">
              <div className="flex flex-col gap-1 pt-3">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm text-muted hover:bg-accent/10 hover:text-accent-light transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="/Mock Drive CV_260212_133126.pdf"
                  download
                  className="mx-3 mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-accent hover:bg-accent-light text-background text-sm font-medium transition-colors"
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
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="animate-fade-in-up mb-8">
              <InteractiveCard>
                <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-accent to-accent p-1 shadow-[0_0_40px_rgba(79,70,229,0.3)] mx-auto">
                  <div className="w-full h-full rounded-full bg-card overflow-hidden relative">
                    <img 
                      src="/Abc.jpeg" 
                      alt="Vaishnavi Profile" 
                      className="w-full h-full object-cover object-[center_20%]"
                    />
                  </div>
                </div>
              </InteractiveCard>
            </div>

            {/* Intro */}
            <p className="animate-fade-in-up delay-100 text-accent font-medium text-sm tracking-widest uppercase mb-3">
              Hello, I&apos;m
            </p>
            <h1 className="animate-fade-in-up delay-200 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
              <span className="gradient-text">Vaishnavi</span>
            </h1>
            <p className="animate-fade-in-up delay-300 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-8">
              Aspiring AI &amp; ML Engineer &bull; B.Tech CSE Student at LPU
              &bull; Passionate about building intelligent systems that solve
              real-world problems
            </p>

            {/* CTA */}
            <div className="animate-fade-in-up delay-400 flex flex-wrap items-center justify-center gap-4 mb-10">
              <a
                href="/Mock Drive CV_260212_133126.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-light text-background font-semibold transition-all hover:scale-105 shadow-lg shadow-accent/25"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-accent text-foreground/90 hover:text-accent-light font-semibold transition-all hover:scale-105"
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
                className="p-3 rounded-full bg-card-hover/80 hover:bg-accent/20 text-muted hover:text-accent transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/VaishnaviSoga09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card-hover/80 hover:bg-accent/20 text-muted hover:text-accent transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-accent" />
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              id="about"
              icon={<Cpu className="w-5 h-5" />}
              title="About Me"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <InteractiveCard>
              <div className="glass rounded-2xl p-6 sm:p-8 card-hover">
                <p className="text-foreground/90 leading-relaxed text-base sm:text-lg">
                  I am a Computer Science &amp; Engineering student at Lovely
                  Professional University with a strong interest in Artificial
                  Intelligence and Machine Learning. I enjoy working on projects
                  that combine computer vision with ML algorithms to create
                  impactful, real-world applications — from surveillance systems to
                  AI-powered detection tools. I&apos;m solution-oriented,
                  collaborative, and always eager to learn and grow.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    Punjab, India
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-accent" />
                    B.Tech CSE — LPU
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent" />
                    Available for Opportunities
                  </span>
                </div>
              </div>
            </InteractiveCard>
          </FadeIn>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              id="skills"
              icon={<Code2 className="w-5 h-5" />}
              title="Skills"
            />
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([category, items], index) => (
              <FadeIn key={category} delay={index * 0.1}>
                <InteractiveCard className="h-full">
                  <div className="glass rounded-2xl p-6 card-hover h-full flex flex-col justify-between hidden-backdrop">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {items.map((s) => (
                        <SkillBadge key={s} label={s} />
                      ))}
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              id="projects"
              icon={<FileText className="w-5 h-5" />}
              title="Projects"
            />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {PROJECTS.map((p, index) => (
              <FadeIn key={p.title} delay={index * 0.1} className="flex">
                <div className="glass rounded-xl p-0 card-hover flex flex-col w-full h-full border border-accent/20 shadow-lg relative overflow-hidden group">
                  {p.image && (
                    <div className="w-full h-48 sm:h-56 relative overflow-hidden bg-background border-b border-accent/20">
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 p-2 rounded-lg bg-accent/20 text-accent-light shrink-0 border border-accent/30">
                          {p.icon}
                        </div>
                        <div>
                          <h3 className="text-lg lg:text-xl font-bold text-foreground leading-snug drop-shadow-md">
                            {p.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 mb-5">
                      <ul className="space-y-2">
                        {p.points.slice(0, 3).map((pt, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-foreground/90"
                          >
                            <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto">
                      {p.link && (
                        <a 
                          href={p.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center gap-1.5 text-sm font-semibold bg-accent hover:bg-accent text-background px-4 py-2 rounded-lg transition-colors mb-5 w-fit"
                        >
                          <Github className="w-4 h-4" />
                          View Source
                        </a>
                      )}
                      
                      <div className="flex flex-wrap gap-2 pt-5 border-t border-accent/20">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-accent/10 text-accent-light border border-accent/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE / INTERNSHIP ─── */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              id="experience"
              icon={<Briefcase className="w-5 h-5" />}
              title="Experience"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <InteractiveCard>
              <div className="glass rounded-2xl p-6 sm:p-8 card-hover relative overflow-hidden">
                {/* Timeline line */}
                <div className="absolute left-8 sm:left-10 top-20 bottom-8 w-px bg-gradient-to-b from-accent/50 to-transparent hidden sm:block" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      Summer Training Program
                    </h3>
                    <p className="text-accent text-sm font-medium mt-1">
                      AI &amp; ML for Real-world Problem Solving — LPU
                    </p>
                  </div>
                  <span className="text-sm text-muted shrink-0">
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
                      className="flex items-start gap-2 text-sm sm:text-base text-foreground/90"
                    >
                      <ChevronRight className="w-4 h-4 text-accent mt-1 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["OpenCV", "Scikit-learn", "SVM", "Matplotlib"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-accent/10 text-accent-light border border-accent/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </InteractiveCard>
          </FadeIn>
        </div>
      </section>

      {/* ─── CERTIFICATES & ACHIEVEMENTS ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              id="certificates"
              icon={<Award className="w-5 h-5" />}
              title="Certificates & Achievements"
            />
          </FadeIn>

          {/* Certificates */}
          <FadeIn delay={0.1}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Certificates
            </h3>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {CERTIFICATES.map((c, index) => {
              const CardContent = (
                <InteractiveCard className="h-full">
                  <div className="glass rounded-xl overflow-hidden card-hover group flex flex-col h-full hidden-backdrop">
                    {c.image ? (
                      <div className="relative h-48 w-full overflow-hidden bg-background border-b border-border/50">
                        <img
                          src={c.image}
                          alt={c.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="relative h-48 w-full overflow-hidden bg-background border-b border-border/5 flex items-center justify-center">
                        <FileText className="w-12 h-12 text-muted transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    )}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-xs text-muted">{c.date}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                        {c.title}
                      </h4>
                      <p className="text-xs text-muted mt-auto">{c.org}</p>
                    </div>
                  </div>
                </InteractiveCard>
              );

              return (
                <FadeIn key={c.title} delay={index * 0.1}>
                  <a href={(c as any).link || c.image} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {CardContent}
                  </a>
                </FadeIn>
              );
            })}
          </div>

          {/* Achievements */}
          <FadeIn delay={0.2}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Achievements
            </h3>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((a, index) => (
              <FadeIn key={a.title} delay={index * 0.1}>
                <InteractiveCard className="h-full">
                  <div className="glass rounded-xl p-5 card-hover flex items-start gap-3 h-full hidden-backdrop">
                    <Trophy className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground leading-snug">
                        {a.title}
                      </h4>
                      <p className="text-xs text-muted mt-1">{a.date}</p>
                    </div>
                  </div>
                </InteractiveCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              id="education"
              icon={<GraduationCap className="w-5 h-5" />}
              title="Education"
            />
          </FadeIn>
          <div className="space-y-4">
            {EDUCATION.map((e, index) => (
              <FadeIn key={e.institution} delay={index * 0.1}>
                <InteractiveCard>
                  <div className="glass rounded-2xl p-6 sm:p-8 card-hover hidden-backdrop">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {e.institution}
                        </h3>
                        <p className="text-sm text-muted flex items-center gap-1.5 mt-0.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {e.location}
                        </p>
                      </div>
                      <span className="text-sm text-muted shrink-0">
                        {e.period}
                      </span>
                    </div>
                    <p className="text-foreground/90 text-sm sm:text-base">
                      {e.degree}
                    </p>
                    <p className="text-accent text-sm font-semibold mt-1">
                      {e.result}
                    </p>
                  </div>
                </InteractiveCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA / CONNECT & MESSAGE ─── */}
      <section className="py-20 sm:py-28 relative">
        {/* Subtle background glow for CTA section */}
        <div className="absolute inset-0 bg-accent-glow/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left side connect info */}
            <div className="text-center md:text-left">
              <FadeIn>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Let&apos;s <span className="gradient-text">Connect</span>
                </h2>
                <p className="text-muted max-w-md mx-auto md:mx-0 mb-8">
                  I&apos;m always open to discussing new opportunities, interesting
                  projects, or just a friendly chat about tech.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a
                    href="https://www.linkedin.com/in/vaishnavi79"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-light text-background font-semibold transition-all hover:-translate-y-1 shadow-lg shadow-accent/25"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/VaishnaviSoga09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-accent text-foreground/90 hover:text-accent-light font-semibold transition-all hover:-translate-y-1"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href="/Mock Drive CV_260212_133126.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-accent text-foreground/90 hover:text-accent-light font-semibold transition-all hover:-translate-y-1"
                  >
                    <Download className="w-5 h-5" />
                    Download CV
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right side contact form */}
            <FadeIn delay={0.3}>
              <div className="glass rounded-none p-6 sm:p-8 relative overflow-hidden border border-accent/20 shadow-lg max-w-md mx-auto md:mx-0 w-full">
                <div className="absolute inset-0 bg-accent/5 z-0" />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-accent" />
                    Send a Message
                  </h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted mb-1.5">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="John Doe"
                        className="w-full bg-background/50 border border-border/50 rounded-none px-4 py-2.5 text-foreground placeholder-muted focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted mb-1.5">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="john@example.com"
                        className="w-full bg-background/50 border border-border/50 rounded-none px-4 py-2.5 text-foreground placeholder-muted focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted mb-1.5">Message</label>
                      <textarea 
                        id="message" 
                        rows={3}
                        placeholder="Hi Vaishnavi..."
                        className="w-full bg-background/50 border border-border/50 rounded-none px-4 py-2.5 text-foreground placeholder-muted focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none text-sm"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-none bg-accent hover:bg-accent text-background font-semibold transition-colors shadow-lg shadow-accent/10 text-sm"
                    >
                      Send Message
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Vaishnavi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/vaishnavi79"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/VaishnaviSoga09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
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
