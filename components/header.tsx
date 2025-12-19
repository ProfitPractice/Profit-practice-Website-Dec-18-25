"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, XIcon, Facebook, Linkedin } from "lucide-react"
import { useState } from "react"
import { SiTiktok } from "react-icons/si"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Profit Practice Inc." width={40} height={40} className="h-10 w-10" />
          <span className="hidden text-lg font-semibold sm:inline-block">Profit Practice Inc.</span>
        </Link>

        <div className="hidden items-center space-x-6 md:flex">
          <Link
            href="#services"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="#why-us"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Why Us
          </Link>
          <Link
            href="#industries"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Industries
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <div className="flex items-center gap-2 border-l border-border/40 pl-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61570122121054"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4 fill-gray-500 hover:fill-primary transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/practiceprofit/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-500 transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <svg
                className="h-4 w-4 fill-gray-500 group-hover:fill-primary transition-colors"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="18" cy="6" r="1.5" fill="currentColor" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/profit-practice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 fill-gray-500 hover:fill-primary transition-colors" />
            </Link>
            <Link
              href="https://x.com/practiceprofit_"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-500 transition-colors hover:text-primary"
              aria-label="X"
            >
              <svg
                className="h-4 w-4 fill-gray-500 group-hover:fill-primary transition-colors"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="https://www.tiktok.com/@profitpractice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-primary"
              aria-label="TikTok"
            >
              <SiTiktok className="h-4 w-4 fill-gray-500 hover:fill-primary transition-colors" />
            </Link>
          </div>
          <Button asChild size="sm">
            <Link href="#contact">Book Consultation</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-b border-border/40 bg-background md:hidden">
          <div className="container mx-auto space-y-3 px-4 pb-4">
            <Link
              href="#services"
              className="block text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#why-us"
              className="block text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="#industries"
              className="block text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="#contact"
              className="block text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center gap-4 border-t border-border/40 pt-3">
              <Link
                href="https://www.facebook.com/profile.php?id=61570122121054"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 fill-gray-500 hover:fill-primary transition-colors" />
              </Link>
              <Link
                href="https://www.instagram.com/practiceprofit/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-500 transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5 fill-gray-500 group-hover:fill-primary transition-colors"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/profit-practice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 fill-gray-500 hover:fill-primary transition-colors" />
              </Link>
              <Link
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
              </Link>
              <Link
                href="https://www.tiktok.com/@profitpractice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-primary"
                aria-label="TikTok"
              >
                <SiTiktok className="h-5 w-5 fill-gray-500 hover:fill-primary transition-colors" />
              </Link>
            </div>
            <Button asChild className="w-full" size="sm">
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Book Consultation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
