import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com", // Replace with real URL
      icon: <GithubIcon className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com", // Replace with real URL
      icon: <LinkedinIcon className="h-5 w-5" />,
    },
    {
      name: "Email",
      href: "mailto:hello@example.com", // Replace with real email
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-surface)] py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand & Tagline */}
          <div className="col-span-1 md:col-span-2">
            <Link 
              href="/" 
              className="inline-block text-2xl font-bold tracking-tighter mb-4 focus-ring rounded-sm"
            >
              <span className="text-[var(--color-primary)]">Yash</span>{" "}
              <span className="text-[var(--color-text-primary)]">Portfolio</span>
            </Link>
            <Text color="secondary" className="max-w-md">
              Building beautiful, scalable, and accessible digital experiences with modern web technologies.
            </Text>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:items-end">
            <Text weight="semibold" color="primary" className="mb-4">
              Connect
            </Text>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors focus-ring rounded-full"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--color-border-muted)]">
          <Text size="sm" color="muted">
            &copy; {currentYear} Yash. All rights reserved.
          </Text>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Text size="sm" color="muted" className="hover:text-[var(--color-text-secondary)] transition-colors">
              Built with Next.js 16 & React 19
            </Text>
          </div>
        </div>
      </Container>
    </footer>
  );
}
