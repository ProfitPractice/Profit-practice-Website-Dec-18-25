import { type NextRequest, NextResponse } from "next/server"

// Knowledge base about Profit Practice Inc.
const knowledgeBase = {
  services: [
    "VoIP Solutions: Complete VoIP setup, migration, and optimization for single or multi-location teams with 99.9% uptime",
    "Network Security: Enterprise-grade firewalls, network segmentation, secure Wi-Fi, and VPN setup",
    "Multi-Carrier Connectivity: Access to 24+ global providers for redundancy, failover, and better pricing",
    "Support & Monitoring: Proactive 24/7 monitoring, troubleshooting, and maintenance",
  ],
  experience: "10+ years of telecom and IT consultancy expertise",
  providers: "24+ global providers for vendor-neutral solutions",
  approach: "Vendor-neutral consultancy that recommends what's best for your business",
  industries: [
    "Small & Medium Business",
    "Professional Offices (legal, accounting, medical)",
    "Multi-Location Teams",
    "Hybrid & Remote workforces",
  ],
  location: "Based in Langley, BC, serving businesses across Canada",
  security: "Security-first design with multiple layers including firewalls, encryption, and monitoring",
}

function findRelevantInfo(query: string): string {
  const lowerQuery = query.toLowerCase()

  if (lowerQuery.includes("service") || lowerQuery.includes("offer") || lowerQuery.includes("do")) {
    return `We offer the following services:\n\n${knowledgeBase.services.map((s, i) => `${i + 1}. ${s}`).join("\n\n")}\n\nWould you like to know more about any specific service?`
  }

  if (lowerQuery.includes("voip") || lowerQuery.includes("phone") || lowerQuery.includes("call")) {
    return `Our VoIP solutions include complete setup, migration, and optimization for businesses of all sizes. We guarantee 99.9% uptime and crystal-clear call quality. We work with 24+ providers to find the best fit for your needs and budget.`
  }

  if (lowerQuery.includes("security") || lowerQuery.includes("secure") || lowerQuery.includes("protect")) {
    return `Security is our top priority. We implement enterprise-grade firewalls, network segmentation, secure Wi-Fi, VPN setup, and multiple layers of protection including encryption and 24/7 monitoring to keep your business data safe.`
  }

  if (lowerQuery.includes("price") || lowerQuery.includes("cost") || lowerQuery.includes("pricing")) {
    return `Our pricing varies based on your specific needs and scale. Because we work with 24+ providers and maintain a vendor-neutral approach, we can often provide better pricing than major carriers. I'd recommend booking a free consultation so we can assess your requirements and provide an accurate quote.`
  }

  if (lowerQuery.includes("experience") || lowerQuery.includes("how long") || lowerQuery.includes("years")) {
    return `Profit Practice has over 10 years of experience in telecom and IT consultancy. We've helped hundreds of businesses modernize their communication systems with proven methodologies and best practices.`
  }

  if (lowerQuery.includes("provider") || lowerQuery.includes("carrier") || lowerQuery.includes("vendor")) {
    return `We maintain partnerships with 24+ global providers, which gives us a vendor-neutral advantage. Unlike major carriers, we can offer you choice, flexibility, better pricing, and built-in redundancy by selecting the best providers for your specific needs.`
  }

  if (lowerQuery.includes("industry") || lowerQuery.includes("who") || lowerQuery.includes("business")) {
    return `We serve a wide range of industries including:\n• Small & Medium Businesses\n• Professional Offices (legal, accounting, medical practices)\n• Multi-Location Teams\n• Hybrid & Remote workforces\n\nOur solutions are tailored to meet the specific needs of each industry and organization size.`
  }

  if (
    lowerQuery.includes("contact") ||
    lowerQuery.includes("consultation") ||
    lowerQuery.includes("talk") ||
    lowerQuery.includes("schedule")
  ) {
    return `I'd be happy to help you schedule a free consultation! Please fill out the contact form on this page with your details, and our team will typically respond within 24 hours. You can also scroll down to the contact section to provide more details about your needs.`
  }

  if (lowerQuery.includes("location") || lowerQuery.includes("where") || lowerQuery.includes("based")) {
    return `We're based in Langley, BC, and serve businesses across Canada. Many of our solutions are cloud-based, which allows us to support clients remotely with the same high quality of service.`
  }

  return `Thank you for your question! Based on our expertise, I can tell you that Profit Practice specializes in VoIP solutions, network security, and IT infrastructure with over 10 years of experience. We work with 24+ global providers to deliver vendor-neutral solutions.\n\nCould you please provide more details about what you're looking for? Or would you like to schedule a free consultation to discuss your specific needs?`
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 })
    }

    // Generate response based on knowledge base
    const response = findRelevantInfo(message)

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
