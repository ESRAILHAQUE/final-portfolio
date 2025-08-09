import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { BlogSection } from "@/components/blog-section";
import { Footer } from "@/components/footer";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <Script
        id="ld-json-org"
        type="application/ld+json"
        strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Esrail Haque",
          url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
          sameAs: [
            "https://github.com/ESRAILHAQUE",
            "https://linkedin.com/in/md-esrail-haque-a7467b217",
            "https://x.com/HaqueEsrail",
            "https://facebook.com/md.esrailhaque.71",
            "https://instagram.com/mdesrailhaque2865",
          ],
          jobTitle: "Full-Stack Developer",
          worksFor: {
            "@type": "Organization",
            name: "Freelance",
          },
          image: "/profile.png",
          email: "mailto:esrailbblhs@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressCountry: "BD",
          },
        })}
      </Script>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
