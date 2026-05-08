/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Briefcase, 
  Book,
  Brain,
  TrendingUp,
  User, 
  Heart, 
  Clock, 
  CheckCircle2, 
  Mail, 
  Facebook, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck,
  Scale,
  ExternalLink,
  Globe,
  Loader2,
  Send,
  LayoutDashboard,
  Shield,
  Zap,
  Star
} from 'lucide-react';

// --- Constants ---

const SERVICES = [
  {
    id: "career",
    title: "Career growth / Programs",
    description: "Structured professional guidance to accelerate your career trajectory and leadership potential.",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-sage/40",
    pattern: "bg-linear-to-tr from-sage/20 to-accent/10"
  },
  {
    id: "relationship",
    title: "Relationship guidance",
    description: "Strategic advisory for interpersonal dynamics, conflict resolution, and building strong connections.",
    icon: <Heart className="w-6 h-6" />,
    color: "bg-accent/10",
    pattern: "bg-linear-to-tr from-accent/20 to-sage/10"
  },
  {
    id: "consultation",
    title: "Consultation / Coaching session",
    description: "Personalized one-on-one advisory focused on specific challenges and immediate decision-making.",
    icon: <User className="w-6 h-6" />,
    color: "bg-sage/40",
    pattern: "bg-linear-to-tr from-secondary/10 to-accent/10"
  },
  {
    id: "wellbeing",
    title: "Well-being / Peace of mind",
    description: "Holistic strategies to maintain clarity, reduce stress, and achieve professional-personal balance.",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-accent/10",
    pattern: "bg-linear-to-tr from-sage/30 to-ivory"
  }
];

const PACKAGES = [
  {
    name: "Introductory Consulting Session",
    duration: "Standard",
    price: "£20",
    features: ["Initial assessment", "Goal definition", "Basic strategy outline"]
  },
  {
    name: "Private Guidance Session",
    duration: "Extended",
    price: "£30",
    features: ["Deep-dive analysis", "Custom action plan", "Intervention strategies"]
  },
  {
    name: "Advanced Insight Session",
    duration: "Strategic",
    price: "£40",
    features: ["Complex problem tackling", "Scenario planning", "Performance optimization"]
  },
  {
    name: "Comprehensive Advisory Session",
    duration: "Premium",
    price: "£50",
    features: ["Full professional audit", "360° strategic view", "Long-term roadmap"]
  },
  {
    name: "Elite Private Advisory Session",
    duration: "Executive",
    price: "£75 – £90",
    features: ["Confidential high-level advisory", "Priority scheduling", "Direct constant access"]
  }
];

const ADVANCED_PROGRAMS = [
  {
    name: "Strategic Guidance Programs",
    price: "£100 – £250",
    description: "A series of sessions focused on specific development milestones and strategic execution."
  },
  {
    name: "Advanced Advisory Programs",
    price: "£300 – £600",
    description: "Comprehensive support for complex transitions or sustained professional growth."
  },
  {
    name: "Executive Consulting Programs",
    price: "£700 – £1,000",
    description: "High-impact strategies for senior leaders and entrepreneurs seeking market dominance."
  },
  {
    name: "Elite Private Consulting",
    price: "£1,500 – £3,000",
    description: "Exclusive partnership with dedicated strategic resources for transformative results."
  },
  {
    name: "Premier Intensive Advisory Programs",
    price: "£4,000 – £5,000",
    description: "Ultimate immersion program for total strategic overhaul and large-scale visionary implementation."
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Programs', href: '#programs' },
    { name: 'Contact', href: '#contact' },
    { name: 'Policies', href: '#policies' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-white/90 border-b border-ink/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center group-hover:border-accent transition-colors duration-500">
             <span className="text-accent font-serif text-xl font-bold italic">C</span>
          </div>
          <span className="font-serif text-xl tracking-tight font-medium text-ink">Cardibuy</span>
        </a>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
          ))}
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary py-2.5 px-6">Explore</button>
        </div>

        <button className="md:hidden text-ink p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-ink/10 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-ink hover:text-accent py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <header id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
    <div className="absolute inset-0 bg-sage/20 -z-10" />
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">Strategic Solutions</span>
        <h1 className="text-4xl md:text-6xl font-serif font-medium leading-[1.2] mb-8">
          Providing Structured Guidance to Support <span className="italic text-accent">Personal and Professional Growth.</span>
        </h1>
        <p className="text-ink-muted text-md mb-8 max-w-xl leading-relaxed">
          Cardibuy provides professional consulting and advisory services focused on personal development, strategic guidance, and relationship support. Our approach is structured, practical, and designed to help clients make informed decisions with clarity and confidence.
        </p>
        <div className="bg-white/50 backdrop-blur-sm border border-accent/10 p-6 rounded-2xl mb-10 max-w-xl">
          <p className="text-[11px] font-bold uppercase tracking-widest text-accent mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3" /> Who We Serve
          </p>
          <p className="text-xs text-ink-muted leading-relaxed">
            We support individuals seeking clarity in personal or professional matters, clients navigating important life decisions, and individuals looking for structured guidance and practical insight.
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">Get Started</button>
          <button onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary gap-2">
            View Programs <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <p className="mt-8 text-[10px] text-ink/40 max-w-md italic leading-relaxed">
          <Shield className="w-3 h-3 inline-block mr-1 opacity-50" />
          Outcome Disclaimer: All services are delivered as professional consulting and guidance. We do not guarantee specific outcomes, as results depend on individual circumstances, personal commitment, and external factors beyond our control.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative aspect-square"
      >
        <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="relative z-10 w-full h-full glass-card overflow-hidden flex items-center justify-center bg-linear-to-br from-ivory to-sage/30">
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
                <div className="text-center p-12 relative z-10">
                    <div className="w-24 h-24 rounded-2xl border border-accent/20 flex items-center justify-center mx-auto mb-8 bg-white shadow-xl">
                        <Shield className="w-12 h-12 text-accent" />
                    </div>
                    <h3 className="text-2xl font-serif text-ink mb-2">Verified Strategic Excellence</h3>
                    <p className="text-xs text-ink/40 uppercase tracking-widest font-bold">Advisory Intelligence Tier I</p>
                </div>
                <div className="absolute bottom-10 right-10 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent animate-ping" />
                    <div className="w-3 h-3 rounded-full bg-accent/40" />
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  </header>
);

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16">
    {subtitle && (
      <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] block mb-5">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight">
      {children}
    </h2>
    <div className="h-px bg-accent/30 mt-8 w-16" />
  </div>
);

const Services = () => (
  <section id="services" className="section-padding bg-white">
    <div className="max-w-7xl mx-auto">
      <SectionHeading subtitle="What We Offer">Tailored Solutions for <br /> Modern Organizations</SectionHeading>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card flex flex-col hover:border-accent/40 group cursor-default"
          >
            <div className={`h-48 w-full ${service.pattern} overflow-hidden rounded-t-2xl flex items-center justify-center relative`}>
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <pattern id={`pattern-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill="currentColor" />
                      </pattern>
                      <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                  </svg>
              </div>
              <div className="opacity-20 group-hover:opacity-40 transition-opacity duration-500 transform group-hover:scale-110 transition-transform">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-24 h-24" })}
              </div>
            </div>
            <div className="p-8">
              <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-medium mb-3">{service.title}</h3>
              <p className="text-ink-muted text-xs leading-relaxed mb-6 h-12">
                {service.description}
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-accent text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
              >
                Inquire <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
    <section id="programs" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Service Packages">Consultation Options</SectionHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl border ${index === 2 ? 'border-accent bg-accent/5' : 'border-ink/5 bg-white shadow-sm'} flex flex-col`}
            >
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2 leading-tight h-12 flex items-center">{pkg.name}</h3>
                <p className="text-2xl font-serif text-accent">{pkg.price}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-[11px] text-ink-muted">
                    <CheckCircle2 className="w-3 h-3 text-accent mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className={`w-full py-3 rounded-xl font-bold uppercase tracking-widest text-[9px] transition-all ${index === 2 ? 'bg-accent text-white hover:bg-accent-light' : 'border border-accent/20 text-accent hover:bg-accent hover:text-white'}`}>
                Book Now
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading subtitle="Extended Support">Advanced Consulting Programs</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADVANCED_PROGRAMS.map((prog, index) => (
              <motion.div
                key={prog.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-medium mb-3">{prog.name}</h3>
                  <p className="text-2xl font-serif text-accent mb-4">{prog.price}</p>
                  <p className="text-ink-muted text-sm leading-relaxed mb-6">
                    {prog.description}
                  </p>
                </div>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary w-full"
                >
                  Inquire
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 glass-card bg-accent text-white border-none flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-xl font-serif mb-2">Pricing Transparency</h4>
            <p className="text-xs text-white/80 leading-relaxed font-light">
              Consulting sessions and service packages are available upon request. Our structured approach ensures value-based pricing for all strategic interventions. Please contact our team for a tailored proposal.
            </p>
          </div>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-white text-accent rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] whitespace-nowrap">
            Request Quote
          </button>
        </div>
      </div>
    </section>
);

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <section id="contact" className="section-padding bg-sage/10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
                <div>
                    <SectionHeading subtitle="Connect">Let's Discuss Your <br /> Strategic Growth</SectionHeading>
                    <p className="text-ink-muted mb-12">
                        We are currently accepting new strategic advisory partnerships for the upcoming quarter. Reach out to schedule a preliminary assessment.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                <Mail className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-widest text-ink/40">Inquiries</p>
                                <span className="text-ink-muted text-sm">Contact@cardibuy.com</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-widest text-ink/40">Support</p>
                                <span className="text-ink-muted text-sm">Support@cardibuy.com</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                <Clock className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-widest text-ink/40">Business Hours</p>
                                <span className="text-ink-muted text-sm">Monday – Friday, 09:00 – 18:00 CET</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-card p-10 bg-white">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2 block">Full Name</label>
                            <input required type="text" className="w-full bg-ivory border-0 rounded-xl px-5 py-4 focus:ring-1 focus:ring-accent outline-none text-sm" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2 block">Email Address</label>
                            <input required type="email" className="w-full bg-ivory border-0 rounded-xl px-5 py-4 focus:ring-1 focus:ring-accent outline-none text-sm" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2 block">Message</label>
                            <textarea required rows={4} className="w-full bg-ivory border-0 rounded-xl px-5 py-4 focus:ring-1 focus:ring-accent outline-none text-sm resize-none" placeholder="How can we assist you?" />
                        </div>
                        <button disabled={status !== 'idle'} className="btn-primary w-full disabled:opacity-50">
                            {status === 'idle' && <><Send className="w-4 h-4" /> Send Inquiry</>}
                            {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                            {status === 'success' && <><CheckCircle2 className="w-4 h-4" /> Your message has been received successfully.</>}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-12 px-6 border-t border-ink/5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center">
                    <span className="text-accent font-serif text-sm font-bold italic">C</span>
                </div>
                <span className="font-serif text-lg tracking-tight font-medium text-ink">Cardibuy</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/30">
                &copy; {new Date().getFullYear()} Cardibuy Global Advisory. All rights reserved.
            </p>
            <div className="flex gap-6">
                <a href="#" className="text-ink/30 hover:text-accent transition-colors"><Shield className="w-4 h-4" /></a>
                <a href="#" className="text-ink/30 hover:text-accent transition-colors"><Globe className="w-4 h-4" /></a>
            </div>
        </div>
    </footer>
);

const Policies = () => (
    <section id="policies" className="section-padding bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="Legal Compliance">Policies & Procedures</SectionHeading>
            <div className="grid md:grid-cols-2 gap-12">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-10 glass-card bg-ivory/30"
                >
                    <h3 className="text-xl font-medium mb-6 flex items-center gap-3">
                        <Scale className="w-5 h-5 text-accent" /> Refund & Cancellation Policy
                    </h3>
                    <div className="space-y-4 text-xs text-ink-muted leading-relaxed">
                        <p>At Cardibuy, we prioritize professional commitment. Cancellations made 48 hours prior to a scheduled session are eligible for a full credit or partial refund.</p>
                        <p>Requests made within 24 hours of the appointment or no-shows are generally non-refundable due to the dedicated resource allocation.</p>
                        <p>We reserve the right to assess refunds on a case-by-case basis depending on unforeseen circumstances.</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-10 glass-card bg-ivory/30"
                >
                    <h3 className="text-xl font-medium mb-6 flex items-center gap-3">
                        <Clock className="w-5 h-5 text-accent" /> Service Delivery Policy
                    </h3>
                    <div className="space-y-4 text-xs text-ink-muted leading-relaxed">
                        <p>Our consulting sessions are delivered via secure digital platforms or in-person as per the specific program agreement.</p>
                        <p>All guidance provided is professional advisory only. Implementation and final decision-making remain the responsibility of the client.</p>
                        <p>Confidentiality is fundamental; we uphold strict non-disclosure standards for all client data and strategic discussions.</p>
                    </div>
                </motion.div>
            </div>
            <div className="mt-16 p-12 glass-card border-dashed border-accent/20 text-center">
                <p className="text-sm font-serif italic text-ink-muted max-w-3xl mx-auto">
                    "Cardibuy is committed to maintaining the highest ethical standards in all advisory engagements. Our goal is to provide clarity, structure, and actionable insights that drive sustainable progress."
                </p>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-accent">Professional Standards Team</p>
            </div>
        </div>
    </section>
);

export default function App() {
  return (
    <div className="relative selection:bg-accent/20">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <Policies />
      <Footer />
    </div>
  );
}
