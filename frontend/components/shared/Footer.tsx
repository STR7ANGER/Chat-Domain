import Link from "next/link"
import {
  ArrowUpRight,
  Code,
  Globe,
  Mail,
  Users,
  type LucideIcon,
} from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: "Docs", href: "/docs" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Home", href: "/" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Docs", href: "/docs" },
      { name: "Home", href: "/" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/docs" },
      { name: "Terms of Service", href: "/docs" },
      { name: "Cookie Policy", href: "/docs" },
      { name: "GDPR", href: "/docs" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/docs" },
      { name: "Community", href: "/contact" },
      { name: "Support", href: "/contact" },
    ],
  }

  const socialLinks: Array<{
    name: string
    icon: LucideIcon
    href: string
  }> = [
    { name: "Twitter", icon: Globe, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Users, href: "https://linkedin.com" },
    { name: "GitHub", icon: Code, href: "https://github.com" },
    { name: "Email", icon: Mail, href: "mailto:hello@bilio.com" },
  ]

  return (
    <footer className="w-full bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12">
            {/* Brand Section - Spans 2 columns on desktop */}
            <div className="col-span-2 space-y-6">
              <Link
                href="/"
                className="flex items-center gap-3 group"
                aria-label="Chat Domain Home"
              >
                <img
                  src="/logo_black.svg"
                  alt="Chat Domain logo"
                  className="block h-20 w-20 dark:hidden"
                />
                <img
                  src="/logo_white.svg"
                  alt="Chat Domain logo"
                  className="hidden h-20 w-20 dark:block"
                />
              </Link>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Simplify your billing. Amplify your business. The all-in-one
                invoicing platform for agencies and freelancers.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-border/50 hover:border-border hover:bg-muted/50 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Chat Domain. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/docs"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/docs"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/docs"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer