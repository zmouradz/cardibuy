/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
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
    id: "relationship",
    title: "Relationship guidance",
    description: "Strategic advisory for interpersonal dynamics, conflict resolution, and building strong connections.",
    icon: <Heart className="w-6 h-6" />,
    image: "/images/relationship-guidance.png",
    alt: "Relationship guidance image",
    color: "bg-accent/10",
    pattern: "bg-linear-to-tr from-accent/20 to-sage/10"
  },
  {
    id: "consultation",
    title: "Consultation / Coaching session",
    description: "Personalized one-on-one advisory focused on specific challenges and immediate decision-making.",
    icon: <User className="w-6 h-6" />,
    image: "/images/consultation-coaching.png",
    alt: "Consultation coaching session image",
    color: "bg-sage/40",
    pattern: "bg-linear-to-tr from-secondary/10 to-accent/10"
  },
  {
    id: "wellbeing",
    title: "Well-being / Peace of mind",
    description: "Holistic strategies to maintain clarity, reduce stress, and achieve professional-personal balance.",
    icon: <Brain className="w-6 h-6" />,
    image: "/images/well-being.png",
    alt: "Well-being peace of mind image",
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
  <header id="home" className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen flex items-center overflow-hidden relative">
    <div className="absolute inset-0 bg-sage/20 -z-10" />
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center h-full w-full"
      >
        <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">Strategic Solutions</span>
        <h1 className="font-serif font-normal text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] xl:text-[80px] leading-[1.05] text-[#1E1E1E] mb-8">
          Providing Structured Guidance to Support <span className="italic text-[#5F8E8D]">Personal and Professional Growth.</span>
        </h1>
        <p className="text-[#4A4A4A] text-[16px] md:text-[20px] lg:text-[22px] leading-[1.8] mb-8 max-w-[600px] font-sans font-normal">
          Cardibuy provides professional consulting and advisory services focused on personal development, strategic guidance, and relationship support. Our approach is structured, practical, and designed to help clients make informed decisions with clarity and confidence.
        </p>

        {/* Vertically Stacked Premium Information Cards */}
        <div className="w-full max-w-[600px] flex flex-col gap-6 mb-8">
          {/* Card 1: Who We Serve */}
          <div className="w-full bg-white border border-[#DDE4E1] rounded-[20px] p-[28px] flex flex-col hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-5 h-5 text-[#5F8E8D] shrink-0" />
              <span className="text-[13px] font-semibold uppercase tracking-[2px] text-[#5F8E8D] font-sans">
                Who We Serve
              </span>
            </div>
            <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#4A4A4A] font-normal font-sans">
              We support individuals seeking clarity in personal or professional matters, clients navigating important life decisions, and individuals looking for structured guidance and practical insight.
            </p>
          </div>

          {/* Card 2: Outcome Disclaimer */}
          <div className="w-full bg-white border border-[#DDE4E1] rounded-[20px] p-[28px] flex flex-col hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-[#5F8E8D] shrink-0" />
              <span className="text-[13px] font-semibold uppercase tracking-[2px] text-[#5F8E8D] font-sans">
                Outcome Disclaimer
              </span>
            </div>
            <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#4A4A4A] font-normal font-sans">
              All services are delivered as professional consulting and guidance. We do not guarantee specific outcomes, as results depend on individual circumstances, personal commitment, and external factors beyond our control.
            </p>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} 
            className="h-[60px] px-8 bg-[#5F8E8D] text-white rounded-[14px] font-sans font-semibold uppercase tracking-[1.5px] text-[12px] hover:bg-[#4E7675] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-[#5F8E8D]/10"
          >
            Get Started
          </button>
          <button 
            onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })} 
            className="h-[60px] px-8 bg-white border border-[#DDE4E1] text-[#2D2D2D] rounded-[14px] font-sans font-semibold uppercase tracking-[1.5px] text-[12px] hover:shadow-md hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            View Programs <ArrowRight className="w-4 h-4 text-[#5F8E8D]" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative aspect-[3/4] max-h-[70vh] lg:max-h-none mx-auto w-full self-center"
      >
        <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="relative z-10 w-full h-full overflow-hidden rounded-[24px] shadow-xl border border-[#DDE4E1]/50 bg-white">
            <img 
              src="/images/hero.png" 
              alt="Cardibuy Strategic Advisory" 
              className="w-full h-full object-cover rounded-[24px]"
              loading="eager"
            />
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card flex flex-col hover:border-accent/40 group cursor-default"
          >
            <div className="h-64 w-full overflow-hidden rounded-t-2xl relative aspect-[3/4]">
              <img 
                src={service.image} 
                alt={service.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className={`absolute inset-0 ${service.pattern} opacity-10 pointer-events-none`} />
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

const Policies = () => {
  const policyLinks = [
    { id: 'sec-1', label: 'Structured Guidance', secNum: '01' },
    { id: 'sec-2', label: 'Outcome Disclaimer', secNum: '02' },
    { id: 'sec-3', label: 'Who We Support', secNum: '03' },
    { id: 'sec-4', label: 'Refund & Cancellation', secNum: '04' },
    { id: 'sec-5', label: 'Service Delivery Policy', secNum: '05' },
    { id: 'sec-6', label: 'Client Safety & Privacy', secNum: '06' },
    { id: 'sec-7', label: 'Contact & Support', secNum: '07' },
  ];

  const handleScrollToSec = (secId: string) => {
    const element = document.getElementById(secId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="policies" className="section-padding bg-ivory/20 overflow-hidden relative border-t border-ink/5 font-sans">
      <div className="absolute inset-0 bg-sage/5 -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] block mb-5">Corporate Standards</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-ink leading-tight tracking-tight">Policies & Compliance</h2>
          <div className="h-px bg-accent/30 mt-8 w-16 mx-auto mb-6" />
          <p className="text-sm md:text-base text-ink-muted max-w-2xl mx-auto leading-relaxed font-sans">
            Cardibuy operates under strict professional standards and transparent protocols to guide and support your personal and professional journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT SIDEBAR CONTROLS */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            {/* Mobile / Tablet Horizontal Navigation Scrollbar */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-4 -mx-6 px-6 scrollbar-none border-b border-ink/5">
              {policyLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollToSec(link.id)}
                  className="whitespace-nowrap flex items-center gap-2 py-2 px-4 rounded-full border border-ink/5 bg-white text-[11px] text-ink-muted hover:text-accent hover:border-accent/40 font-semibold transition-all duration-300 shrink-0 shadow-xs"
                >
                  <span className="font-mono text-[9px] text-accent/60 font-semibold">{link.secNum}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>

            {/* Desktop Table of Contents */}
            <div className="hidden lg:flex flex-col gap-1 p-6 bg-white border border-ink/5 rounded-2xl shadow-xs">
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-4 pl-3">On This Page</p>
              {policyLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollToSec(link.id)}
                  className="flex items-center gap-3 text-left py-2 px-3 rounded-xl hover:bg-accent/5 text-xs text-ink-muted hover:text-accent font-medium transition-all duration-200 group"
                >
                  <span className="font-mono text-[9px] text-accent/40 group-hover:text-accent tracking-wider font-semibold">{link.secNum}</span>
                  <span className="font-sans font-medium">{link.label}</span>
                </button>
              ))}
            </div>

            {/* Merchants and compliance indicators card */}
            <div className="glass-card p-6 md:p-8 bg-white/90 backdrop-blur-md border border-ink/5 shadow-xs flex flex-col gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold block mb-2">Compliance Review</span>
                <h3 className="text-xl font-serif text-ink font-medium leading-snug">Merchant & User Transparency</h3>
                <p className="text-xs text-ink-muted leading-relaxed mt-3 font-sans">
                  Our comprehensive policies are structured to fulfill the compliance requirements of global payment partners, merchant processors, and financial institutions (Stripe, PayPal, etc.).
                </p>
              </div>
              
              <div className="h-px bg-ink/5" />

              <div className="space-y-4">
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-1">Key Specifications</span>
                <div className="grid grid-cols-2 gap-3 text-[11px] leading-snug">
                  <div className="p-3 bg-sage/10 rounded-xl border border-accent/5 space-y-1">
                    <span className="text-ink-muted/80 block text-[9px] uppercase tracking-wider font-semibold">Refund Window</span>
                    <span className="text-accent font-semibold block">120 Days Limit</span>
                  </div>
                  <div className="p-3 bg-sage/10 rounded-xl border border-accent/5 space-y-1">
                    <span className="text-ink-muted/80 block text-[9px] uppercase tracking-wider font-semibold">Requirement</span>
                    <span className="text-accent font-semibold block">18+ Age Limit</span>
                  </div>
                  <div className="p-3 bg-sage/10 rounded-xl border border-accent/5 space-y-1">
                    <span className="text-ink-muted/80 block text-[9px] uppercase tracking-wider font-semibold">Last Audit</span>
                    <span className="text-accent font-semibold block">June 2026</span>
                  </div>
                  <div className="p-3 bg-sage/10 rounded-xl border border-accent/5 space-y-1">
                    <span className="text-ink-muted/80 block text-[9px] uppercase tracking-wider font-semibold">Advisory Tier</span>
                    <span className="text-accent font-semibold block">Self-Development</span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-ink/5" />

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <span className="text-[9px] text-ink-muted block uppercase tracking-wider font-semibold">Compliance Status</span>
                  <span className="text-xs text-accent font-semibold">Audited & Approved</span>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN COMPLIANCE CONTENT CARDS */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* SECTION 1 */}
            <motion.div 
              id="sec-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl border border-ink/5 bg-white shadow-xs relative overflow-hidden flex flex-col gap-6 hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Scale className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-accent">Section 01 / Purpose & Scope</span>
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-ink mt-1">Providing Structured Guidance to Support Personal Growth</h3>
                </div>
              </div>
              <div className="space-y-4 text-sm text-ink-muted leading-relaxed font-sans pl-1">
                <p>Cardibuy provides digital guidance and consultation services focused on personal development, relationship guidance, emotional support, and lifestyle insight.</p>
                <p>Our services are designed to provide structured one-on-one conversations, supportive guidance, and practical perspectives tailored to each client’s personal journey.</p>
                
                <div className="p-5 rounded-xl bg-sage/10 border border-accent/10 mt-4 leading-relaxed font-sans text-xs italic text-ink/90 shadow-2xs">
                  All services are provided for informational and self-development purposes only and should not be considered medical, legal, financial, or psychological advice. We do not guarantee specific outcomes or results from the use of our services.
                </div>
              </div>
            </motion.div>

            {/* SECTION 2 */}
            <motion.div 
              id="sec-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl border border-ink/5 bg-white shadow-xs relative overflow-hidden flex flex-col gap-6 hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-accent">Section 02 / Disclaimers</span>
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-ink mt-1">Outcome Disclaimer</h3>
                </div>
              </div>
              <div className="space-y-4 text-sm text-ink-muted leading-relaxed font-sans pl-1">
                <p>All services are delivered as professional consulting and guidance. We do not guarantee specific outcomes, as results depend on individual circumstances, personal commitment, and external factors beyond our control.</p>
              </div>
            </motion.div>

            {/* SECTION 3 */}
            <motion.div 
              id="sec-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl border border-ink/5 bg-white shadow-xs relative overflow-hidden flex flex-col gap-6 hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-accent">Section 03 / Audience</span>
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-ink mt-1">Who We Support</h3>
                </div>
              </div>
              <div className="space-y-4 text-sm text-ink-muted leading-relaxed font-sans pl-1">
                <p>We support individuals seeking clarity in personal matters, relationship guidance, emotional support, and personal development.</p>
                <p>Our services are designed to provide structured conversations, practical insight, and supportive guidance tailored to each client’s personal journey.</p>
              </div>
            </motion.div>

            {/* SECTION 4 */}
            <motion.div 
              id="sec-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl border border-ink/5 bg-white shadow-xs relative overflow-hidden flex flex-col gap-6 hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-accent">Section 04 / Cancellation</span>
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-ink mt-1">Refund & Cancellation Policy</h3>
                </div>
              </div>
              <div className="space-y-6 text-sm text-ink-muted leading-relaxed font-sans pl-1">
                <p>At Cardibuy, we are committed to maintaining a fair, transparent, and secure experience for all clients using our digital guidance and consultation services.</p>
                
                <div className="p-6 bg-accent/5 rounded-xl border border-accent/15 text-xs text-ink leading-relaxed flex items-start gap-4 my-4 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-2 font-mono">120-Day Refund window Limit</span>
                    <p className="font-semibold text-accent leading-relaxed">
                      Clients may submit a refund request within 120 days from the original payment date.
                    </p>
                    <p className="mt-2 text-ink-muted leading-relaxed font-normal">
                      Refund requests submitted after 120 days from the payment confirmation date are generally not eligible for review or refund consideration due to service completion timelines, operational limitations, record retention policies, and payment processing regulations.
                    </p>
                  </div>
                </div>

                <p>All refund requests are reviewed individually on a case-by-case basis and are not automatically approved.</p>
                
                <div className="h-px bg-ink/5" />

                <div className="space-y-3">
                  <p className="font-bold text-ink text-xs font-mono uppercase tracking-wider text-accent">Clients may be asked to provide:</p>
                  <ul className="grid sm:grid-cols-2 gap-3 pl-1">
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>Full name</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>Email address</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>Phone number</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>Proof of payment or transaction receipt</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>Date of purchase</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>Description of the issue or concern</span>
                    </li>
                  </ul>
                </div>

                <div className="h-px bg-ink/5" />

                <div className="space-y-3">
                  <p className="font-bold text-ink text-xs font-mono uppercase tracking-wider text-accent">Refund requests may be considered in situations involving:</p>
                  <ul className="grid sm:grid-cols-2 gap-3 pl-1">
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>Duplicate transactions</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>Unauthorized charges</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>Technical issues affecting service delivery</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>Failure to receive the purchased service</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>Verified billing errors</span>
                    </li>
                  </ul>
                </div>

                <div className="h-px bg-ink/5" />

                <p>Due to the nature of digital consultation and guidance services, refunds are generally not provided once a service has been delivered, initiated, completed, or confirmed by the client as satisfactory.</p>

                <div className="space-y-3 p-5 bg-sand/40 border border-ink/5 rounded-xl">
                  <p className="font-bold text-ink text-xs font-mono uppercase tracking-wider text-red-700/80">Cardibuy reserves the right to deny refund requests in cases where there is evidence of:</p>
                  <ul className="grid sm:grid-cols-2 gap-3 pl-1">
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600/30 shrink-0" />
                      <span>Service usage or completed delivery</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600/30 shrink-0" />
                      <span>Client confirmation of satisfaction</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600/30 shrink-0" />
                      <span>Repeated or abusive refund requests</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600/30 shrink-0" />
                      <span>Chargeback misuse</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600/30 shrink-0" />
                      <span>Fraudulent activity</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600/30 shrink-0" />
                      <span>Attempts to obtain services without valid payment intention</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-ivory border border-ink/10 rounded-xl leading-relaxed shadow-3xs mt-4">
                  <p className="font-bold text-ink text-xs uppercase tracking-wider font-mono text-accent mb-1">Dispute Resolution Protocol</p>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Clients are encouraged to contact support before initiating any chargeback or payment dispute.
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-wider font-bold text-accent">
                    By purchasing our services, clients acknowledge and agree to this Refund & Cancellation Policy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SECTION 5 */}
            <motion.div 
              id="sec-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl border border-ink/5 bg-white shadow-xs relative overflow-hidden flex flex-col gap-6 hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-accent">Section 05 / Logistics</span>
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-ink mt-1">Service Delivery Policy</h3>
                </div>
              </div>
              <div className="space-y-6 text-sm text-ink-muted leading-relaxed font-sans pl-1">
                <p>Cardibuy provides digital guidance and consultation services through secure online communication platforms and scheduled service arrangements.</p>
                
                <div className="space-y-3 p-5 bg-sage/5 border border-accent/10 rounded-xl">
                  <p className="font-bold text-ink text-xs font-mono uppercase tracking-wider text-accent">Following successful payment, clients may be contacted to confirm:</p>
                  <ul className="grid sm:grid-cols-2 gap-3 pl-1">
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                      <span>Booking details</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                      <span>Email address</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                      <span>Phone number</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                      <span>Preferred communication method</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                      <span>Service information</span>
                    </li>
                  </ul>
                </div>

                <p>Service delivery timelines may vary depending on scheduling availability, client responsiveness, time zone differences, technical factors, and service complexity. Clients are responsible for providing accurate contact information.</p>

                <div className="p-5 bg-sage/10 rounded-xl border border-accent/10 leading-relaxed">
                  <p className="font-bold text-accent text-xs font-mono uppercase tracking-wider mb-2">Professional Boundary Specifications</p>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    All services are intended for informational and personal development purposes only. Guidance provided should not be interpreted as medical, legal, financial, psychological, or crisis-related advice. Clients remain fully responsible for their personal choices, actions, interpretations, and outcomes.
                  </p>
                  <p className="mt-3 text-xs italic font-semibold text-ink/90">
                    Cardibuy does not guarantee specific personal, emotional, relationship, or life outcomes resulting from consultations.
                  </p>
                </div>

                <div className="h-px bg-ink/5" />

                <div className="space-y-3">
                  <p className="font-bold text-ink text-xs font-mono uppercase tracking-wider text-accent">A service may be considered delivered once:</p>
                  <ul className="grid sm:grid-cols-2 gap-3 pl-1">
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>A session has started</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>Communication has been initiated</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>Guidance has been provided</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>Digital content has been shared</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      <span>The client has participated in the scheduled consultation</span>
                    </li>
                  </ul>
                </div>

                <div className="h-px bg-ink/5" />

                <div className="space-y-3 p-5 bg-red-500/5 rounded-xl border border-red-500/10">
                  <p className="font-bold text-red-700 text-xs font-mono uppercase tracking-wider">Cardibuy reserves the right to suspend or terminate services involving:</p>
                  <ul className="grid sm:grid-cols-2 gap-3 pl-1">
                    <li className="flex items-center gap-2.5 text-xs text-red-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600/30 shrink-0" />
                      <span>Abusive behavior</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-red-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600/30 shrink-0" />
                      <span>Harassment</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-red-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600/30 shrink-0" />
                      <span>Fraudulent activity</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-red-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600/30 shrink-0" />
                      <span>Repeated payment disputes</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-red-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600/30 shrink-0" />
                      <span>Policy violations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* SECTION 6 */}
            <motion.div 
              id="sec-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl border border-ink/5 bg-white shadow-xs relative overflow-hidden flex flex-col gap-6 hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-accent">Section 06 / Privacy</span>
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-ink mt-1">Confidentiality, Privacy & Client Safety</h3>
                </div>
              </div>
              <div className="space-y-6 text-sm text-ink-muted leading-relaxed font-sans pl-1">
                <p>Cardibuy takes reasonable measures to protect client information and private communications.</p>
                <p>Clients acknowledge that communications may occur through third-party platforms, email services, messaging systems, or online communication tools outside Cardibuy's direct control.</p>
                
                <div className="p-5 bg-sage/5 rounded-xl border border-accent/10 flex flex-col gap-3">
                  <p className="font-bold text-accent text-xs font-mono uppercase tracking-wider">Platform & Communications Disclaimer:</p>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    While reasonable efforts are made to maintain privacy and security, Cardibuy cannot guarantee absolute protection against:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 pl-1">
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.2 h-1.2 rounded-full bg-accent" />
                      <span>Technical failures</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.2 h-1.2 rounded-full bg-accent" />
                      <span>Unauthorized access</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.2 h-1.2 rounded-full bg-accent" />
                      <span>Cyber incidents</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-ink-muted">
                      <span className="w-1.2 h-1.2 rounded-full bg-accent" />
                      <span>Third-party platform vulnerabilities</span>
                    </li>
                  </ul>
                </div>

                <p>For compliance, dispute resolution, fraud prevention, quality assurance, and operational purposes, certain communications and service records may be retained.</p>

                <p>Clients must be at least 18 years old or the legal age of majority in their jurisdiction to use Cardibuy services. By booking or using services, clients confirm they meet the applicable legal age requirements.</p>

                <div className="border border-rose-500/15 bg-rose-50/20 p-6 rounded-xl flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-rose-800 block mb-2 text-sm flex items-center gap-1.5">
                      Critical Boundary Notice — No Crisis Support
                    </span>
                    <p className="text-rose-950 font-bold text-xs leading-relaxed">
                      Cardibuy services are not intended for: crisis intervention, emergency situations, licensed medical treatment, or psychological treatment services.
                    </p>
                    <p className="mt-2 text-ink-muted text-xs leading-relaxed">
                      Individuals experiencing serious medical, psychological, or emergency situations should seek assistance from qualified professionals or local emergency services.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SECTION 7 */}
            <motion.div 
              id="sec-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl border border-ink/5 bg-white shadow-xs relative overflow-hidden flex flex-col gap-6 hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-accent">Section 07 / Communication</span>
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-ink mt-1">Contact & Support</h3>
                </div>
              </div>
              <div className="space-y-6 text-sm text-ink-muted leading-relaxed font-sans pl-1">
                <p>For inquiries, account-related questions, refund requests, or support assistance:</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-sand/30 hover:bg-sand/50 rounded-xl border border-ink/5 transition-all duration-300 flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted/80">General Inquiries</span>
                    <a href="mailto:Contact@cardibuy.com" className="text-sm font-semibold text-accent hover:underline font-mono">
                      Contact@cardibuy.com
                    </a>
                  </div>
                  <div className="p-5 bg-sand/30 hover:bg-sand/50 rounded-xl border border-ink/5 transition-all duration-300 flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted/80">Support Access</span>
                    <a href="mailto:Support@cardibuy.com" className="text-sm font-semibold text-accent hover:underline font-mono">
                      Support@cardibuy.com
                    </a>
                  </div>
                </div>

                <p>Support requests are reviewed during normal business operations. Response times may vary depending on request volume, verification requirements, and operational availability.</p>
              </div>
            </motion.div>

          </div>
        </div>
        
        <div className="mt-20 p-12 glass-card border-dashed border-accent/20 text-center bg-white/40">
          <p className="text-sm md:text-base font-serif italic text-ink-muted max-w-3xl mx-auto leading-relaxed">
            "Cardibuy is committed to maintaining the highest ethical standards and total compliance in all advisory engagements. Our goal is to provide clarity, structure, and actionable insights that drive sustainable progress."
          </p>
          <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-accent">Professional Standards & Compliance Team</p>
        </div>
      </div>
    </section>
  );
};

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
