import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Network,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Building2,
  Briefcase,
  Users,
  Globe,
  Lock,
  Server,
  Headphones,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 text-white sm:py-28 lg:py-36">
          <div className="absolute inset-0 z-0">
            <img
              src="/professional-office-receptionist-talking-on-teleph.jpg"
              alt="Professional office receptionist on phone"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-white/40 text-muted-foreground" />
          </div>

          <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl text-destructive lg:text-5xl">
                Is your Business Communication Ready for 2030
              </h1>
              <p className="mb-8 text-pretty text-lg sm:text-xl text-foreground">
                <span className="font-semibold">With 10+ years in telecom.</span> Access 24+ global leaders.
                Vendor-neutral experts delivering reliable, scalable, and{" "}
                <span className="font-semibold" style={{ color: "#ef4444" }}>
                  AI READY
                </span>{" "}
                communication environments.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90">
                  <a href="#contact">Book a Free Consultation</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary/30 bg-white/80 text-primary hover:bg-white"
                >
                  <a href="#services">Explore Services</a>
                </Button>
              </div>

              <div className="mt-12 grid gap-8 sm:grid-cols-3">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-black">10+</div>
                  <div className="text-sm font-semibold border-destructive text-chart-1" style={{ color: "#1e7e34" }}>
                    Years Experience
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-black">24+</div>
                  <div
                    className="text-sm font-semibold border-destructive text-destructive"
                    style={{ color: "#1e7e34" }}
                  >
                    Global Providers
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-black">100%</div>
                  <div className="text-sm font-semibold" style={{ color: "#1e7e34" }}>
                    Vendor Neutral
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 sm:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Comprehensive IT & Telecom Services
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
                From VoIP setup to network security, we deliver tailored solutions that keep your business connected and
                protected.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">VoIP Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Complete VoIP setup, migration, and optimization for single or multi-location teams. Crystal-clear
                    calls with 99.9% uptime.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Network Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Enterprise-grade firewalls, network segmentation, secure Wi-Fi, and VPN setup to protect your
                    business data.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Network className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Multi-Carrier Connectivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Leverage our partnerships with 24+ providers for redundancy, failover, and better pricing than major
                    carriers.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Headphones className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Support & Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Proactive 24/7 monitoring, troubleshooting, and maintenance to ensure your systems stay online and
                    secure.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Profit Practice Section */}
        <section id="why-us" className="bg-muted/50 py-20 sm:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose Profit Practice Inc.
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
                We're not just another IT provider. We're your strategic partner in building communication
                infrastructure that scales with your business.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">10+ Years Telecom Expertise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deep industry knowledge from a decade of helping businesses modernize their communication systems
                    with proven methodologies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Globe className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">24+ Global Provider Network</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unlike major carriers, we offer choice and flexibility. Access better pricing, redundancy, and
                    service quality through our extensive partnerships.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Vendor-Neutral Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We recommend what's best for your business, not what earns us the highest commission. Your success
                    is our priority.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Lock className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Security-First Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every solution includes multiple layers of security—firewalls, encryption, monitoring—to protect
                    your business from evolving threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-20 sm:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Industries We Serve</h2>
              <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
                Tailored connectivity and communication solutions for organizations of all sizes and sectors.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border/50 text-center transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <Building2 className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Small & Medium Business</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Cost-effective VoIP and network solutions that scale with your growth.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border/50 text-center transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <Briefcase className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Professional Offices</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Legal, accounting, and medical practices with compliance-ready infrastructure.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border/50 text-center transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <Users className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Multi-Location Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Unified communication across multiple sites with centralized management.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border/50 text-center transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <Server className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Hybrid & Remote</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Secure VPN and cloud-based systems for distributed workforces.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted/50 py-20 sm:py-28">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                  Let's Discuss Your IT Infrastructure
                </h2>
                <p className="text-pretty text-lg text-muted-foreground">
                  Schedule a free consultation to review your current VoIP and network setup. We'll identify
                  opportunities to improve reliability, security, and cost-efficiency.
                </p>
              </div>

              <Card className="border-border/50">
                <CardContent className="p-6 sm:p-8">
                  <form className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="John Smith" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" placeholder="Your Company Inc." />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@company.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="(604) 555-0123" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">How can we help?</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your current setup and what you're looking to improve..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Request Free Consultation
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">We typically respond within 24 hours</p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
