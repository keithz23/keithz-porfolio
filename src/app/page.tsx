"use client";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
  X,
} from "lucide-react";
import Link from "next/link";
import dictiohubImage from "../../public/dictiohub.jpg";
import nordicsImage from "../../public/nordics.jpg";
import sogoImage from "../../public/sogo.jpg";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { ServiceCard } from "@/components/service-card";
import { SkillCard } from "@/components/skill-card";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between mx-auto px-4 sm:px-6">
          <Link href="/" className="font-bold text-xl">
            <span className="text-[#0989ff]">Keithz</span>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-8">
              <Link
                href="#about"
                className="text-sm font-medium text-gray-600 hover:text-[#0989ff] transition-colors"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium text-gray-600 hover:text-[#0989ff] transition-colors"
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium text-gray-600 hover:text-[#0989ff] transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium text-gray-600 hover:text-[#0989ff] transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-gray-600 hover:text-[#0989ff] transition-colors"
              >
                Contact
              </Link>
            </nav>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="#about"
                className="text-sm font-medium text-gray-600 hover:text-[#0989ff] transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium text-gray-600 hover:text-[#0989ff] transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium text-gray-600 hover:text-[#0989ff] transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium text-gray-600 hover:text-[#0989ff] transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-gray-600 hover:text-[#0989ff] transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20 md:py-28 flex justify-center">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10" />
          <div className="container max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <div>
              <div className="inline-flex items-center rounded-full border border-[#0989ff]/30 bg-[#0989ff]/10 px-3 py-1 text-sm text-[#0989ff] mb-4">
                <span className="font-medium">Available for work</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Hi, I'm <span className="text-[#0989ff]">Keith</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto">
                A passionate developer creating beautiful, functional websites
                and applications that deliver exceptional user experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-[#0989ff] hover:bg-[#0978e4] text-white">
                <Link href={"https://github.com/keithz23"} target="_blank">
                  View My Work
                </Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-[#0989ff] text-[#0989ff] hover:bg-[#0989ff]/10"
              >
                <Link href="mailto:vuongtuankiet33@gmail.com" target="_blank">
                  Contact Me
                </Link>
              </Button>
            </div>

            <div className="flex gap-5 justify-center">
              <Link
                href="https://github.com/keithz23"
                className="text-gray-500 hover:text-[#0989ff] transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/keithivers/"
                target="_blank"
                className="text-gray-500 hover:text-[#0989ff] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:vuongtuankiet33@gmail.com"
                className="text-gray-500 hover:text-[#0989ff] transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 items-center justify-center gap-3 inline-flex">
              <div className="size-2 sm:size-3 rounded-full bg-green-500" />
              <p className="font-medium text-sm sm:text-base">
                Open to opportunities
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a
              href="#about"
              className="flex flex-col items-center text-gray-400 hover:text-[#0989ff] transition-colors"
            >
              <span className="text-sm mb-1">Scroll Down</span>
              <ChevronDown className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center mb-12 sm:mb-16">
              <div className="inline-flex items-center rounded-full border border-[#0989ff]/30 bg-[#0989ff]/10 px-3 py-1 text-sm text-[#0989ff] mb-4">
                <span className="font-medium">About Me</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
                My Background & Experience
              </h2>
              <p className="text-gray-600 text-center max-w-2xl">
                Learn more about my journey, experience, and the passion that
                drives my work.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#0989ff] text-center">
                My Journey
              </h3>
              <p className="text-gray-600 text-center">
                I'm a passionate developer with 1 year of experience working on
                both frontend and backend aspects of web applications. I focus
                on creating clean, user-friendly interfaces and building
                reliable backend systems that work seamlessly together.
              </p>
              <p className="text-gray-600 text-center">
                While I'm not a fullstack developer, I have hands-on experience
                deploying applications and ensuring they run smoothly in
                real-world environments. I'm constantly learning and improving,
                aiming to deliver practical, well-rounded solutions and
                contribute effectively to every stage of the development
                process.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
                <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#0989ff] mb-2">
                    1+
                  </div>
                  <div className="text-sm text-gray-600">
                    Years of Experience
                  </div>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#0989ff] mb-2">
                    20+
                  </div>
                  <div className="text-sm text-gray-600">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-20 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center mb-12 sm:mb-16">
              <div className="inline-flex items-center rounded-full border border-[#0989ff]/30 bg-[#0989ff]/10 px-3 py-1 text-sm text-[#0989ff] mb-4">
                <span className="font-medium">My Services</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
                What I Can Do For You
              </h2>
              <p className="text-gray-600 text-center max-w-2xl">
                I offer a range of services to help businesses and individuals
                create exceptional digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <ServiceCard
                title="Web Development"
                description="Creating responsive, user-friendly websites that look great on all devices."
                icon="code"
              />
              <ServiceCard
                title="UI/UX Design"
                description="Designing intuitive interfaces that provide exceptional user experiences."
                icon="layout"
              />
              <ServiceCard
                title="Mobile Development"
                description="Building native and cross-platform mobile applications for iOS and Android."
                icon="smartphone"
              />
              <ServiceCard
                title="E-commerce Solutions"
                description="Creating online stores with secure payment processing and inventory management."
                icon="shopping-bag"
              />
              <ServiceCard
                title="SEO Optimization"
                description="Improving website visibility and ranking in search engine results."
                icon="search"
              />
              <ServiceCard
                title="Maintenance & Support"
                description="Providing ongoing maintenance and support for websites and applications."
                icon="tool"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center mb-12 sm:mb-16">
              <div className="inline-flex items-center rounded-full border border-[#0989ff]/30 bg-[#0989ff]/10 px-3 py-1 text-sm text-[#0989ff] mb-4">
                <span className="font-medium">My Work</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-600 text-center max-w-2xl">
                Here are some of my recent projects. Each one presented unique
                challenges and opportunities to grow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-featured online store with payment processing and inventory management."
                tags={["React.js", "Tailwind CSS", "Paypal", "Nest.js"]}
                imageUrl={nordicsImage.src}
                githubLink="https://github.com/keithz23/EcomGrove"
                link="https://github.com/keithz23/EcomGrove"
              />
              <ProjectCard
                title="Dictiohub Dictionary"
                description="Discover definitions, synonyms, and more with DictioHub Dictionary"
                tags={["React", "Node.js", "MongoDB", "Prisma ORM"]}
                imageUrl={dictiohubImage.src}
                githubLink="https://github.com/keithz23/Dictiohub-Dictionary"
                link="https://github.com/keithz23/Dictiohub-Dictionary"
              />
              <ProjectCard
                title="Sogo Hotel"
                description="A hotel booking system with PHP and MySQL database."
                tags={["HTML/SCSS", "JavaScript", "PHP"]}
                imageUrl={sogoImage.src}
                githubLink="https://github.com/keithz23/Sogo-Hotel"
                link="https://github.com/keithz23/Sogo-Hotel"
              />
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <Button
                variant="outline"
                className="border-[#0989ff] text-[#0989ff] hover:bg-[#0989ff]/10"
              >
                <Link
                  href={"https://github.com/keithz23?tab=repositories"}
                  target="_blank"
                >
                  View All Projects
                </Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 sm:py-20 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center mb-12 sm:mb-16">
              <div className="inline-flex items-center rounded-full border border-[#0989ff]/30 bg-[#0989ff]/10 px-3 py-1 text-sm text-[#0989ff] mb-4">
                <span className="font-medium">My Skills</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
                Technical Expertise
              </h2>
              <p className="text-gray-600 text-center max-w-2xl">
                I've worked with a variety of technologies and tools throughout
                my career.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              <SkillCard name="HTML" />
              <SkillCard name="CSS" />
              <SkillCard name="JavaScript" />
              <SkillCard name="React" />
              <SkillCard name="Next.js" />
              <SkillCard name="TypeScript" />
              <SkillCard name="Node.js" />
              <SkillCard name="Express" />
              <SkillCard name="MongoDB" />
              <SkillCard name="PostgreSQL" />
              <SkillCard name="Git" />
              <SkillCard name="Docker" />
              <SkillCard name="Figma" />
              <SkillCard name="AWS" />
              <SkillCard name="GraphQL" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-blue-50"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center mb-12 sm:mb-16">
              <div className="inline-flex items-center rounded-full border border-[#0989ff]/30 bg-[#0989ff]/10 px-3 py-1 text-sm text-[#0989ff] mb-4">
                <span className="font-medium">Get In Touch</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
                Let's Work Together
              </h2>
              <p className="text-gray-600 text-center max-w-2xl">
                Have a project in mind or want to discuss potential
                opportunities? Feel free to reach out.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#0989ff]">
                  Contact Information
                </h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-10 sm:size-12 rounded-full bg-[#0989ff]/10 text-[#0989ff]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">vuongtuankiet33@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-10 sm:size-12 rounded-full bg-[#0989ff]/10 text-[#0989ff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">HCMC, VietNam</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#0989ff]">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/keithz23"
                    target="_blank"
                    className="flex items-center justify-center size-10 sm:size-12 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-[#0989ff] hover:text-[#0989ff] transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/keithivers/"
                    target="_blank"
                    className="flex items-center justify-center size-10 sm:size-12 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-[#0989ff] hover:text-[#0989ff] transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:vuongtuankiet33@gmail.com"
                    target="_blank"
                    className="flex items-center justify-center size-10 sm:size-12 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-[#0989ff] hover:text-[#0989ff] transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <Link href="/" className="font-bold text-xl">
                <span className="text-[#0989ff]">Keith</span>
              </Link>
              <p className="text-gray-500 mt-2 text-sm">
                © {new Date().getFullYear()} Keithz. All rights reserved.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4">
                <Link
                  href="#about"
                  className="text-sm text-gray-500 hover:text-[#0989ff] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#services"
                  className="text-sm text-gray-500 hover:text-[#0989ff] transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="#projects"
                  className="text-sm text-gray-500 hover:text-[#0989ff] transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="#skills"
                  className="text-sm text-gray-500 hover:text-[#0989ff] transition-colors"
                >
                  Skills
                </Link>
                <Link
                  href="#contact"
                  className="text-sm text-gray-500 hover:text-[#0989ff] transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
