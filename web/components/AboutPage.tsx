import React from "react";
import { FadeInSection, SlideUpSection, ScaleSection } from "./ScrollAnimations";
import { FiServer, FiGlobe, FiShield, FiZap, FiUsers, FiTrendingUp } from "react-icons/fi";
import { BiGame } from "react-icons/bi";
import { AiOutlineCloud } from "react-icons/ai";

const keyFeatures = [
  {
    icon: <FiZap className="w-8 h-8 text-blue-500" />,
    title: "Ultra-Low Latency",
    description: "Sub-second response time with WebRTC streaming"
  },
  {
    icon: <BiGame className="w-8 h-8 text-blue-500" />,
    title: "Device Agnostic", 
    description: "Play on any device - laptops, tablets, smartphones"
  },
  {
    icon: <FiServer className="w-8 h-8 text-blue-500" />,
    title: "Game Library Integration",
    description: "Connect your existing Steam, Epic, Origin accounts"
  },
  {
    icon: <FiTrendingUp className="w-8 h-8 text-blue-500" />,
    title: "Affordable Pricing",
    description: "Freemium model starting with free tier"
  },
  {
    icon: <FiGlobe className="w-8 h-8 text-blue-500" />,
    title: "Local Infrastructure",
    description: "Edge servers for minimal latency in SEA region"
  }
];

const techStack = [
  {
    category: "Game Streaming Layer",
    technologies: ["Sunshine (C++ - self-hosted game streaming)", "Moonlight (NVIDIA GameStream protocol)", "Docker + NVIDIA Container Runtime"]
  },
  {
    category: "Frontend",
    technologies: ["Next.js 15 with TypeScript", "Tailwind CSS", "Moonlight web client integration"]
  },
  {
    category: "Backend",
    technologies: ["Node.js 20+ with TypeScript", "Express.js (REST API)", "JWT-based authentication"]
  },
  {
    category: "Infrastructure",
    technologies: ["Docker & Docker Compose", "AWS (EC2 G4/G5 instances)", "CloudFlare CDN"]
  }
];

const milestones = [
  {
    phase: "Phase 1",
    title: "Sunshine + Moonlight Integration",
    timeline: "Weeks 1-4",
    description: "Get Sunshine streaming working with Moonlight clients with <300ms latency",
    status: "In Progress"
  },
  {
    phase: "Phase 2", 
    title: "Web Platform Foundation",
    timeline: "Weeks 5-8",
    description: "Build user-facing web platform with backend API and session management",
    status: "Planning"
  },
  {
    phase: "Phase 3",
    title: "Auto-Scaling & Multi-User",
    timeline: "Weeks 9-12", 
    description: "Dynamic instance management and concurrent user support (20+ users)",
    status: "Planning"
  },
  {
    phase: "Phase 4",
    title: "Game Library Integration",
    timeline: "Weeks 13-16",
    description: "Full Steam/Epic integration with enhanced user experience",
    status: "Planning"
  },
  {
    phase: "Phase 5",
    title: "Production Launch",
    timeline: "Weeks 17-20",
    description: "Production-ready platform with SEA optimization and 100+ beta users",
    status: "Planning"
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 max-w-6xl mx-auto">
      {/* Hero Section */}
      <FadeInSection delay={100}>
        <section className="text-center py-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <AiOutlineCloud className="w-16 h-16 text-blue-500" />
            <h1 className="text-4xl md:text-6xl font-extrabold">Sky Play</h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            🎮 Gaming experience for everyone through cloud computing!
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            A cloud gaming platform that enables users with low-end devices to play AAA games by streaming from powerful GPU servers. 
            Built for the Indonesian/Southeast Asian market with ultra-low latency and affordable pricing.
          </p>
        </section>
      </FadeInSection>

      {/* Key Features */}
      <SlideUpSection delay={200}>
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">⚡ Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, idx) => (
              <ScaleSection key={feature.title} delay={idx * 100}>
                <div className="bg-[#181818] rounded-xl p-6 border border-[#232323] hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    {feature.icon}
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </ScaleSection>
            ))}
          </div>
        </section>
      </SlideUpSection>

      {/* Tech Stack */}
      <SlideUpSection delay={300}>
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">🛠 Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((stack, idx) => (
              <ScaleSection key={stack.category} delay={idx * 150}>
                <div className="bg-[#181818] rounded-xl p-6 border border-[#232323] hover:border-gray-400 hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300">
                  <h3 className="font-bold text-xl mb-4 text-blue-400">{stack.category}</h3>
                  <ul className="space-y-2">
                    {stack.technologies.map((tech, techIdx) => (
                      <li key={techIdx} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScaleSection>
            ))}
          </div>
        </section>
      </SlideUpSection>

      {/* Development Roadmap */}
      <SlideUpSection delay={400}>
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">🎯 Development Roadmap</h2>
          <div className="space-y-6">
            {milestones.map((milestone, idx) => (
              <FadeInSection key={milestone.phase} delay={idx * 200}>
                <div className="bg-[#181818] rounded-xl p-6 border border-[#232323] hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {milestone.phase}
                      </span>
                      <h3 className="font-bold text-xl">{milestone.title}</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400 text-sm">{milestone.timeline}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        milestone.status === "In Progress" 
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                      }`}>
                        {milestone.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>
      </SlideUpSection>

      {/* Vision Statement */}
      <ScaleSection delay={500}>
        <section className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30">
          <FiShield className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            To democratize gaming by making high-end gaming experiences accessible to everyone, 
            regardless of their device capabilities or economic situation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <FiUsers className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Accessibility</h3>
              <p className="text-sm text-gray-400">Gaming for everyone, everywhere</p>
            </div>
            <div className="text-center">
              <FiZap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Performance</h3>
              <p className="text-sm text-gray-400">Ultra-low latency experience</p>
            </div>
            <div className="text-center">
              <FiGlobe className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Regional Focus</h3>
              <p className="text-sm text-gray-400">Optimized for Southeast Asia</p>
            </div>
          </div>
        </section>
      </ScaleSection>
    </div>
  );
}

