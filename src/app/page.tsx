"use client";
import { useState } from "react";
import { ArrowRight, ChevronDown, Github, Linkedin, Mail, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { ServiceCard } from "@/components/service-card";
import { SkillCard } from "@/components/skill-card";

// Import images
import dictiohubImage from "../../public/dictiohub.jpg";
import nordicsImage from "../../public/nordics.jpg";
import sogoImage from "../../public/sogo.jpg";

// Constants
const BRAND_COLOR = "#0989ff";
const HOVER_COLOR = "#0978e4";
const EMAIL = "vuongtuankiet33@gmail.com";
const GITHUB_URL = "https://github.com/keithz23";
const LINKEDIN_URL = "https://www.linkedin.com/in/keithivers/";

const NAVIGATION_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const PROJECTS = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with payment processing and inventory management.",
    tags: ["React.js", "Tailwind CSS", "Paypal", "Nest.js"],
    imageUrl: nordicsImage.src,
    githubLink: "https://github.com/keithz23/EcomGrove",
    link: "https://github.com/keithz23/EcomGrove",
  },
  {
    title: "Dictiohub Dictionary",
    description: "Discover definitions, synonyms, and more with DictioHub Dictionary.",
    tags: ["React", "Node.js", "MongoDB", "Prisma ORM"],
    imageUrl: dictiohubImage.src,
    githubLink: "https://github.com/keithz23/Dictiohub-Dictionary",
    link: "https://github.com/keithz23/Dictiohub-Dictionary",
  },
  {
    title: "Sogo Hotel",
    description: "A hotel booking system with PHP and MySQL database.",
    tags: ["HTML/SCSS", "JavaScript", "PHP"],
    imageUrl: sogoImage.src,
    githubLink: "https://github.com/keithz23/Sogo-Hotel",
    link: "https://github.com/keithz23/Sogo-Hotel",
  },
];

const SERVICES = [
  {
    title: "Web Development",
    description: "Responsive, user-friendly websites for all devices.",
    icon: "code",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive interfaces for exceptional user experiences.",
    icon: "layout",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    icon: "smartphone",
  },
  {
    title: "E-commerce Solutions",
    description: "Online stores with secure payment and inventory management.",
    icon: "shopping-bag",
  },
  {
    title: "SEO Optimization",
    description: "Boost website visibility and search engine rankings.",
    icon: "search",
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing support for websites and applications.",
    icon: "tool",
  },
];

const SKILLS = [
  "HTML", "CSS", "JavaScript", "React", "Next.js",
  "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL",
  "Git", "Docker", "Figma", "AWS", "GraphQL"
];

const STATS = [
  { value: "1+", label: "Years of Experience" },
  { value: "20+", label: "Projects Completed" },
];

// Components
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-[#0989ff]/30 bg-[#0989ff]/10 px-3 py-1 text-sm text-[#0989ff] mb-4">
    {children}
  </span>
);

type SectionHeaderProps = {
  badge: React.ReactNode;
  title: string;
  description: string;
};

const SectionHeader = ({ badge, title, description }: SectionHeaderProps) => (
  <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
    <Badge>{badge}</Badge>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{title}</h2>
    <p className="text-gray-600 max-w-2xl">{description}</p>
  </div>
);

type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavigationLink = ({ href, children, onClick }: NavigationLinkProps) => (
  <Link
    href={href}
    className="text-sm font-medium text-gray-600 hover:text-[#0989ff] transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

type SocialLinkProps = {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <Link
    href={href}
    target="_blank"
    className="text-gray-500 hover:text-[#0989ff] transition-colors"
  >
    <Icon className="h-5 w-5" />
    <span className="sr-only">{label}</span>
  </Link>
);

type ContactSocialLinkProps = {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

const ContactSocialLink = ({ href, icon: Icon, label }: ContactSocialLinkProps) => (
  <Link
    href={href}
    target="_blank"
    className="flex items-center justify-center size-10 sm:size-12 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-[#0989ff] hover:text-[#0989ff] transition-colors"
  >
    <Icon className="h-5 w-5" />
    <span className="sr-only">{label}</span>
  </Link>
);

const MenuIcon = () => (
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
);

const LocationIcon = () => (
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
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-[#0989ff]">Keithz</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <NavigationLink key={link.href} href={link.href}>
                {link.label}
              </NavigationLink>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {NAVIGATION_LINKS.map((link) => (
                <NavigationLink key={link.href} href={link.href} onClick={toggleMenu}>
                  {link.label}
                </NavigationLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white text-center">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10" />
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl space-y-6">
            <Badge>Available for work</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-[#0989ff]">Keith</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto">
              A passionate developer creating beautiful, functional websites and applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-[#0989ff] hover:bg-[#0978e4] text-white">
                <Link href={GITHUB_URL} target="_blank">
                  View My Work
                </Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-[#0989ff] text-[#0989ff] hover:bg-[#0989ff]/10"
              >
                <Link href={`mailto:${EMAIL}`}>Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-5 justify-center">
              <SocialLink href={GITHUB_URL} icon={Github} label="GitHub" />
              <SocialLink href={LINKEDIN_URL} icon={Linkedin} label="LinkedIn" />
              <SocialLink href={`mailto:${EMAIL}`} icon={Mail} label="Email" />
            </div>
            <div className="inline-flex items-center bg-white rounded-2xl shadow-lg p-3 sm:p-4 gap-3">
              <div className="size-2 sm:size-3 rounded-full bg-green-500" />
              <p className="font-medium text-sm sm:text-base">Open to opportunities</p>
            </div>
            <a
              href="#about"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-gray-400 hover:text-[#0989ff] transition-colors"
            >
              <span className="text-sm mb-1">Scroll Down</span>
              <ChevronDown className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeader
              badge="About Me"
              title="My Background & Experience"
              description="Learn more about my journey and passion for development."
            />
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#0989ff]">My Journey</h3>
              <p className="text-gray-600">
                I'm a developer with over a year of experience in frontend and backend web development, focusing on clean, user-friendly interfaces and reliable systems. While not a fullstack developer, I have hands-on experience deploying applications and ensuring they perform well in real-world environments.
              </p>
              <p className="text-gray-600">
                I'm dedicated to continuous learning, delivering practical solutions, and contributing effectively across the development process.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
                {STATS.map((stat, index) => (
                  <div key={index} className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#0989ff] mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-20 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeader
              badge="My Services"
              title="What I Can Do For You"
              description="A range of services to create exceptional digital experiences."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {SERVICES.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeader
              badge="My Work"
              title="Featured Projects"
              description="Recent projects showcasing unique challenges and solutions."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            <div className="mt-8 sm:mt-12 text-center">
              <Button
                variant="outline"
                className="border-[#0989ff] text-[#0989ff] hover:bg-[#0989ff]/10"
              >
                <Link href={`${GITHUB_URL}?tab=repositories`} target="_blank">
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
            <SectionHeader
              badge="My Skills"
              title="Technical Expertise"
              description="Technologies and tools I've worked with."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {SKILLS.map((skill, index) => (
                <SkillCard key={index} name={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeader
              badge="Get In Touch"
              title="Let's Work Together"
              description="Have a project or opportunity in mind? Reach out."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#0989ff] mb-6">Contact Information</h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-10 sm:size-12 rounded-full bg-[#0989ff]/10 text-[#0989ff]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{EMAIL}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-10 sm:size-12 rounded-full bg-[#0989ff]/10 text-[#0989ff]">
                      <LocationIcon />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">HCMC, VietNam</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#0989ff] mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  <ContactSocialLink href={GITHUB_URL} icon={Github} label="GitHub" />
                  <ContactSocialLink href={LINKEDIN_URL} icon={Linkedin} label="LinkedIn" />
                  <ContactSocialLink href={`mailto:${EMAIL}`} icon={Mail} label="Email" />
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
            <div className="text-center md:text-left mb-6 md:mb-0">
              <Link href="/" className="font-bold text-xl">
                <span className="text-[#0989ff]">Keithz</span>
              </Link>
              <p className="text-gray-500 mt-2 text-sm">
                © {new Date().getFullYear()} Keithz. All rights reserved.
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-[#0989ff] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}