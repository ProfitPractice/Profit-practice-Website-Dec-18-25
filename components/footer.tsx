import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-card-foreground bg-primary-foreground">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="font-mono text-lg font-bold text-primary-foreground">PP</span>
              </div>
              <span className="text-lg font-semibold">Profit Practice Inc.</span>
            </div>
            <p className="text-sm text-card-foreground">
              Vendor-neutral IT consultancy specializing in secure VoIP and network infrastructure.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61570122121054"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 fill-gray-500 hover:fill-primary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/practiceprofit/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-500 transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5 stroke-gray-500 group-hover:stroke-primary transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="18"
                    cy="6"
                    r="1.5"
                    fill="currentColor"
                    className="fill-gray-500 group-hover:fill-primary"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/profit-practice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 fill-gray-500 hover:fill-primary transition-colors" />
              </a>
              <a
                href="https://x.com/practiceprofit_"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-500 transition-colors hover:text-primary"
                aria-label="X"
              >
                <svg
                  className="h-5 w-5 fill-gray-500 group-hover:fill-primary transition-colors"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@profitpractice"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-500 transition-colors hover:text-primary"
                aria-label="TikTok"
              >
                <svg
                  className="h-5 w-5 fill-gray-500 group-hover:fill-primary transition-colors"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#services" className="text-sm hover:text-secondary-foreground text-foreground">
                Services
              </Link>
              <Link href="#why-us" className="text-sm hover:text-secondary-foreground text-foreground">
                Why Us
              </Link>
              <Link href="#industries" className="text-sm hover:text-secondary-foreground text-foreground">
                Industries
              </Link>
              <Link href="#contact" className="text-sm hover:text-secondary-foreground text-foreground">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Services</h3>
            <nav className="flex flex-col space-y-2 text-foreground">
              <span className="text-sm text-foreground">VoIP Solutions</span>
              <span className="text-sm text-foreground">Network Security</span>
              <span className="text-sm text-foreground">Multi-Carrier Connectivity</span>
              <span className="text-sm text-foreground">24/7 Support</span>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <div className="space-y-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=212+-+20673+78+Ave,Langley,+BC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 opacity-100 text-foreground" />
                <span className="text-sm text-foreground">212 - 20673 78 Ave,Langley, BC</span>
              </a>
              <a
                href="tel:+12368010099"
                className="flex items-center space-x-3 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Phone className="h-4 w-4 text-foreground" />
                <span className="text-sm text-foreground">+1 (236)-801 0099</span>
              </a>
              <a
                href="mailto:info@profitpractice.org"
                className="flex items-center space-x-3 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Mail className="h-4 w-4 text-foreground" />
                <span className="text-sm text-foreground">info@profitpractice.org</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/20 pt-8 text-center text-foreground">
          <p className="text-sm text-foreground">
            © {new Date().getFullYear()} Profit Practice Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
