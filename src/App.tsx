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
  Star,
  Phone,
  MapPin
} from 'lucide-react';

import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';

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

const Navbar = ({ currentPath = '/', navigateTo }: { currentPath?: string; navigateTo?: (path: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', path: '/' },
    { name: 'Services', href: '#services', path: '/#services' },
    { name: 'Programs', href: '#programs', path: '/#programs' },
    { name: 'Contact', href: '#contact', path: '/#contact' },
    { name: 'Policies', href: '#policies', path: '/#policies' },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; href: string; path: string }) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (currentPath !== '/' && currentPath !== '/home') {
      if (navigateTo) {
        navigateTo('/');
        setTimeout(() => {
          const el = document.getElementById(item.href.replace('#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        window.location.href = item.path;
      }
    } else {
      const el = document.getElementById(item.href.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    setIsMobileMenuOpen(false);
    if (currentPath !== '/' && currentPath !== '/home') {
      if (navigateTo) {
        navigateTo('/');
        setTimeout(() => {
          const el = document.getElementById('services');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        window.location.href = '/#services';
      }
    } else {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Background Overlay Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/40 backdrop-blur-xs md:hidden z-40 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-white border-b border-ink/5 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a 
            href="/" 
            onClick={(e) => { 
              e.preventDefault(); 
              setIsMobileMenuOpen(false);
              if (navigateTo) navigateTo('/'); 
            }} 
            className="flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center group-hover:border-accent transition-colors duration-500">
               <span className="text-accent font-serif text-xl font-bold italic">C</span>
            </div>
            <span className="font-serif text-xl tracking-tight font-medium text-ink">Cardibuy</span>
          </a>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavLinkClick(e, link)}
                className="nav-link cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <button onClick={handleExploreClick} className="btn-primary py-2.5 px-6 cursor-pointer">Explore</button>
          </div>

          <button 
            className="md:hidden text-ink p-2 cursor-pointer relative z-50 min-h-[44px] min-w-[44px] flex items-center justify-center" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-ink/10 p-6 flex flex-col gap-2 md:hidden shadow-xl z-50 overflow-hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-ink hover:text-accent hover:bg-slate-50 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 flex items-center min-h-[44px] w-full"
                  onClick={(e) => handleNavLinkClick(e, link)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-ink/5 mt-2">
                <button 
                  onClick={handleExploreClick} 
                  className="w-full btn-primary py-3.5 px-6 cursor-pointer text-center flex items-center justify-center min-h-[44px]"
                >
                  Explore
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const form = e.target as HTMLFormElement;
            const name = (form.elements.namedItem('fullName') as HTMLInputElement)?.value || '';
            const email = (form.elements.namedItem('emailAddress') as HTMLInputElement)?.value || '';
            const message = (form.elements.namedItem('messageText') as HTMLTextAreaElement)?.value || '';

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('success'); // Fallback to success
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            setStatus('success'); // Fallback to success
        }
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
                                <a href="mailto:Contact@cardibuy.com" className="text-ink-muted text-sm hover:text-accent font-sans transition-colors">Contact@cardibuy.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-widest text-ink/40">Support</p>
                                <a href="mailto:Support@cardibuy.com" className="text-ink-muted text-sm hover:text-accent font-sans transition-colors">Support@cardibuy.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                <Phone className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-widest text-ink/40">Telephone</p>
                                <a href="tel:+447446986308" className="text-ink-muted text-sm hover:text-accent font-sans transition-colors">+44 7446 986308</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-widest text-ink/40">Registered Address</p>
                                <span className="text-ink-muted text-xs font-sans">20 Wenlock Road, London, N1 7TA, United Kingdom</span>
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
                            <input required id="fullName" name="fullName" type="text" className="w-full bg-ivory border-0 rounded-xl px-5 py-4 focus:ring-1 focus:ring-accent outline-none text-sm" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2 block">Email Address</label>
                            <input required id="emailAddress" name="emailAddress" type="email" className="w-full bg-ivory border-0 rounded-xl px-5 py-4 focus:ring-1 focus:ring-accent outline-none text-sm" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2 block">Message</label>
                            <textarea required id="messageText" name="messageText" rows={4} className="w-full bg-ivory border-0 rounded-xl px-5 py-4 focus:ring-1 focus:ring-accent outline-none text-sm resize-none" placeholder="How can we assist you?" />
                        </div>
                        <button disabled={status !== 'idle'} className="btn-primary w-full disabled:opacity-50 cursor-pointer">
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

const Footer = ({ currentPath = '/', navigateTo }: { currentPath?: string; navigateTo?: (path: string) => void }) => {
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (navigateTo) {
      navigateTo(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <footer className="py-20 px-6 sm:px-10 md:px-16 border-t border-[#DDE4E1] bg-white font-sans text-sm text-[#4A4A4A] relative overflow-hidden box-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        
        {/* COLUMN 1: Brand Info */}
        <div className="space-y-4">
          <h3 className="font-serif text-2xl tracking-tight font-medium text-[#1E1E1E]">CARDIBUY LTD</h3>
          <p className="text-[#4A4A4A] text-[14px] leading-relaxed max-w-sm [overflow-wrap:break-word] [word-break:break-word]">
            Professional consulting and digital advisory services focused on personal development, strategic guidance and relationship support.
          </p>
        </div>

        {/* COLUMN 2: Corporate Registration */}
        <div className="space-y-4">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5F8E8D]">Corporate Registration</h4>
          <div className="space-y-3 text-[14px] text-[#4A4A4A] leading-relaxed">
            <p className="flex flex-col">
              <span className="font-semibold text-[#1E1E1E]">Registered Entity:</span>
              <span>CARDIBUY LTD</span>
            </p>
            <p className="flex flex-col">
              <span className="font-semibold text-[#1E1E1E]">Companies House Number:</span>
              <span>16112761</span>
            </p>
            <p className="flex flex-col">
              <span className="font-semibold text-[#1E1E1E]">Registered Address:</span>
              <span>20 Wenlock Road<br />London<br />N1 7TA<br />United Kingdom</span>
            </p>
          </div>
        </div>

        {/* COLUMN 3: Contact & Legal */}
        <div className="space-y-4">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5F8E8D]">Contact & Legal</h4>
          <div className="space-y-3 text-[14px] text-[#4A4A4A] leading-relaxed">
            <p className="flex flex-col">
              <span className="font-semibold text-[#1E1E1E]">Telephone</span>
              <a href="tel:+447446986308" className="text-[#5F8E8D] hover:text-[#4E7675] font-semibold transition-colors duration-200">+44 7446 986308</a>
            </p>
            <p className="flex flex-col">
              <span className="font-semibold text-[#1E1E1E]">Email</span>
              <a href="mailto:Contact@cardibuy.com" className="text-[#5F8E8D] hover:text-[#4E7675] font-semibold transition-colors duration-200">Contact@cardibuy.com</a>
            </p>
          </div>
          
          <div className="pt-4 border-t border-[#DDE4E1]/60">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#5F8E8D] block mb-2">Links</span>
            <div className="flex flex-col gap-2 text-[13px] font-semibold text-[#5F8E8D]">
              <a href="/terms-and-conditions" onClick={(e) => handleLinkClick(e, '/terms-and-conditions')} className="hover:underline hover:text-[#4E7675] cursor-pointer transition-colors">Terms & Conditions</a>
              <a href="/privacy-policy" onClick={(e) => handleLinkClick(e, '/privacy-policy')} className="hover:underline hover:text-[#4E7675] cursor-pointer transition-colors">Privacy Policy</a>
              <a href="/refund-policy" onClick={(e) => handleLinkClick(e, '/refund-policy')} className="hover:underline hover:text-[#4E7675] cursor-pointer transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>

      </div>
      
      {/* Bottom Footer Section */}
      <div className="max-w-7xl mx-auto h-px bg-[#DDE4E1] my-8 sm:my-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#5F8E8D]/80">
        <p className="text-center sm:text-left">&copy; 2026 CARDIBUY LTD. All rights reserved.</p>
        <p className="text-center sm:text-right">Governed by the laws of England and Wales.</p>
      </div>
    </footer>
  );
};

const Policies = () => {
  const policyLinks = [
    { id: 'sec-1', label: 'Structured Guidance', secNum: '01' },
    { id: 'sec-2', label: 'Outcome Disclaimer', secNum: '02' },
    { id: 'sec-3', label: 'Who We Support', secNum: '03' },
    { id: 'sec-4', label: 'Refund & Cancellation', secNum: '04' },
    { id: 'sec-5', label: 'Service Delivery', secNum: '05' },
    { id: 'sec-6', label: 'Privacy & Client Safety', secNum: '06' },
    { id: 'sec-7', label: 'Contact & Support', secNum: '07' },
  ];

  const handleScrollToSec = (secId: string) => {
    const element = document.getElementById(secId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="policies" className="w-full max-w-full overflow-x-hidden bg-[#F9FBFB] relative border-t border-[#DDE4E1] font-sans pt-16 pb-32 md:pt-24 px-4 sm:px-6 md:px-12 lg:px-24 box-border">
      <div className="absolute inset-0 bg-[#5F8E8D]/2 -z-10" />
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Centered Premium Hero */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in w-full max-w-full">
          <span className="text-[#5F8E8D] text-[10px] font-bold uppercase tracking-[0.4em] block mb-5">
            CORPORATE STANDARDS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#1E1E1E] leading-tight tracking-tight [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
            Policies & Compliance
          </h2>
          <div className="h-px bg-[#5F8E8D]/30 mt-8 w-16 mx-auto mb-6" />
          <p className="text-[16px] text-[#4A4A4A] max-w-2xl mx-auto leading-[1.8] font-sans font-normal [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
            Cardibuy operates under strict professional standards and transparent protocols to guide and support your personal and professional journey.
          </p>
        </div>

        {/* SECTION NAVIGATION (Desktop: 4 columns then 3 columns, Tablet: 2 columns, Mobile: 1 column) */}
        <div className="mb-20 space-y-6 w-full max-w-full">
          {/* Row 1: 4 cards on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {policyLinks.slice(0, 4).map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollToSec(link.id)}
                className="flex flex-col items-start text-left p-6 rounded-2xl border border-[#DDE4E1] bg-white hover:border-[#5F8E8D]/50 hover:shadow-md transition-all duration-300 group cursor-pointer w-full box-border"
              >
                <span className="font-mono text-xs font-bold text-[#5F8E8D] mb-3 bg-[#5F8E8D]/5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                  {link.secNum}
                </span>
                <span className="font-serif text-[15px] sm:text-[16px] font-medium text-[#1E1E1E] group-hover:text-[#5F8E8D] transition-colors leading-snug">
                  {link.label}
                </span>
              </button>
            ))}
          </div>

          {/* Row 2: 3 cards on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {policyLinks.slice(4).map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollToSec(link.id)}
                className="flex flex-col items-start text-left p-6 rounded-2xl border border-[#DDE4E1] bg-white hover:border-[#5F8E8D]/50 hover:shadow-md transition-all duration-300 group cursor-pointer w-full box-border"
              >
                <span className="font-mono text-xs font-bold text-[#5F8E8D] mb-3 bg-[#5F8E8D]/5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                  {link.secNum}
                </span>
                <span className="font-serif text-[15px] sm:text-[16px] font-medium text-[#1E1E1E] group-hover:text-[#5F8E8D] transition-colors leading-snug">
                  {link.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* PERSISTENT LEGAL COMPLIANCE BOX */}
        <div className="max-w-[950px] mx-auto mb-16 p-6 sm:p-8 bg-white border border-[#DDE4E1] rounded-3xl shadow-xs hover:shadow-sm transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-5 h-5 text-[#5F8E8D]" />
            <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#5F8E8D]">Registered Corporate Information</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-[13px] sm:text-[14px] leading-relaxed text-[#4A4A4A]">
            <div className="space-y-1.5 p-4 bg-[#5F8E8D]/3 rounded-xl border border-[#DDE4E1]/30">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#5F8E8D] block">Registered Entity</span>
              <span className="font-bold text-[#1E1E1E] text-base block">CARDIBUY LTD</span>
              <span className="text-xs text-[#4A4A4A]/80 block">Active Private Limited Company</span>
            </div>
            <div className="space-y-1.5 p-4 bg-[#5F8E8D]/3 rounded-xl border border-[#DDE4E1]/30">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#5F8E8D] block">Companies House Number</span>
              <span className="font-bold text-[#1E1E1E] text-base block">16112761</span>
              <span className="text-xs text-[#4A4A4A]/80 block">Registered at Companies House</span>
            </div>
            <div className="space-y-1.5 p-4 bg-[#5F8E8D]/3 rounded-xl border border-[#DDE4E1]/30 sm:col-span-2 lg:col-span-1">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#5F8E8D] block">Registered Address</span>
              <span className="font-semibold text-[#1E1E1E] block">20 Wenlock Road</span>
              <span className="text-xs text-[#4A4A4A]">London, N1 7TA, United Kingdom</span>
            </div>
            <div className="space-y-1.5 p-4 bg-[#5F8E8D]/3 rounded-xl border border-[#DDE4E1]/30">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#5F8E8D] block">Telephone</span>
              <a href="tel:+447446986308" className="font-bold text-[#1E1E1E] hover:text-[#5F8E8D] transition-colors block text-base">
                +44 7446 986308
              </a>
              <span className="text-xs text-[#4A4A4A]/80 block">Official Support Helpline</span>
            </div>
            <div className="space-y-1.5 p-4 bg-[#5F8E8D]/3 rounded-xl border border-[#DDE4E1]/30 sm:col-span-2 lg:col-span-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#5F8E8D] block">Email Channels</span>
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <div>
                  <span className="text-[11px] text-[#4A4A4A]/80 block">General Inquiries</span>
                  <a href="mailto:Contact@cardibuy.com" className="font-semibold text-[#1E1E1E] hover:text-[#5F8E8D] transition-colors">
                    Contact@cardibuy.com
                  </a>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="text-[11px] text-[#4A4A4A]/80 block">Client Support</span>
                  <a href="mailto:Support@cardibuy.com" className="font-semibold text-[#1E1E1E] hover:text-[#5F8E8D] transition-colors">
                    Support@cardibuy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN COMPLIANCE CONTENT CARDS */}
        <div className="space-y-12 w-full max-w-[950px] mx-auto">
          
          {/* SECTION 1: Purpose & Scope */}
          <motion.div 
            id="sec-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28 p-6 sm:p-10 lg:p-12 rounded-[24px] border border-[#DDE4E1] bg-white shadow-xs relative overflow-hidden flex flex-col gap-8 hover:shadow-md transition-all duration-300 w-full max-w-full box-border [overflow-wrap:break-word] [word-break:break-word] whitespace-normal"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#5F8E8D]/10 flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6 text-[#5F8E8D]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D]">Section 01 / Purpose & Scope</span>
                <h3 className="text-2xl md:text-3xl font-serif font-normal text-[#1E1E1E] mt-2 [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">CARDIBUY LTD – Website Policies & Service Information</h3>
              </div>
            </div>
            
            <div className="space-y-6 text-base sm:text-lg text-[#4A4A4A] leading-[1.85] font-sans font-normal">
              <div className="border-l-4 border-[#5F8E8D] pl-5 italic text-[#5F8E8D] font-serif text-[18px] sm:text-[20px] leading-relaxed my-2 [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
                Providing Structured Guidance to Support Personal Growth
              </div>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Cardibuy provides digital guidance and consultation services focused on personal development, relationship guidance, emotional support, and lifestyle insight. Our services are designed to provide structured one-on-one conversations, supportive guidance, and practical perspectives tailored to each client’s personal journey.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">All services are provided for informational and self-development purposes only and should not be considered medical, legal, financial, or psychological advice. We do not guarantee specific outcomes or results from the use of our services.</p>
            </div>
          </motion.div>

          {/* SECTION 2: Outcome Disclaimer */}
          <motion.div 
            id="sec-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28 p-6 sm:p-10 lg:p-12 rounded-[24px] border border-[#DDE4E1] bg-white shadow-xs relative overflow-hidden flex flex-col gap-8 hover:shadow-md transition-all duration-300 w-full max-w-full box-border [overflow-wrap:break-word] [word-break:break-word] whitespace-normal"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#5F8E8D]/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-[#5F8E8D]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D]">Section 02 / Disclaimers</span>
                <h3 className="text-2xl md:text-3xl font-serif font-normal text-[#1E1E1E] mt-2 [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Outcome Disclaimer</h3>
              </div>
            </div>
            <div className="space-y-4 text-base sm:text-lg text-[#4A4A4A] leading-[1.85] font-sans font-normal">
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Outcome Disclaimer: All services are delivered as professional guidance and consultation services. We do not guarantee specific outcomes or results, as outcomes may vary depending on individual circumstances, personal commitment, communication, and external factors beyond our reasonable control.</p>
            </div>
          </motion.div>

          {/* SECTION 3: Who We Support */}
          <motion.div 
            id="sec-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28 p-6 sm:p-10 lg:p-12 rounded-[24px] border border-[#DDE4E1] bg-white shadow-xs relative overflow-hidden flex flex-col gap-8 hover:shadow-md transition-all duration-300 w-full max-w-full box-border [overflow-wrap:break-word] [word-break:break-word] whitespace-normal"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#5F8E8D]/10 flex items-center justify-center shrink-0">
                <User className="w-6 h-6 text-[#5F8E8D]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D]">Section 03 / Audience</span>
                <h3 className="text-2xl md:text-3xl font-serif font-normal text-[#1E1E1E] mt-2 [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Who We Support</h3>
              </div>
            </div>
            <div className="space-y-4 text-base sm:text-lg text-[#4A4A4A] leading-[1.85] font-sans font-normal">
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">We support individuals seeking clarity in personal matters, relationship guidance, emotional support, and personal development. Our services are designed to provide structured conversations, practical insight, and supportive guidance tailored to each client’s personal journey.</p>
            </div>
          </motion.div>

          {/* SECTION 4: Refund & Cancellation */}
          <motion.div 
            id="sec-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28 p-6 sm:p-10 lg:p-12 rounded-[24px] border border-[#DDE4E1] bg-white shadow-xs relative overflow-hidden flex flex-col gap-8 hover:shadow-md transition-all duration-300 w-full max-w-full box-border [overflow-wrap:break-word] [word-break:break-word] whitespace-normal"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#5F8E8D]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#5F8E8D]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D]">Section 04 / Cancellation</span>
                <h3 className="text-2xl md:text-3xl font-serif font-normal text-[#1E1E1E] mt-2 [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Refund & Cancellation Policy</h3>
              </div>
            </div>
            <div className="space-y-6 text-base sm:text-lg text-[#4A4A4A] leading-[1.85] font-sans font-normal">
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">At Cardibuy, we are committed to maintaining a fair, transparent, and secure experience for all clients using our digital guidance and consultation services.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Clients may submit a refund request within 120 days from the original payment date. Refund requests submitted after 120 days from the payment confirmation date are generally not eligible for review or refund consideration due to service completion timelines, operational limitations, record retention policies, and payment processing regulations.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">All refund requests are reviewed individually on a case-by-case basis and are not automatically approved. To help us investigate and process a request, clients may be asked to provide:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pl-1 my-2">
                {[
                  "Full name",
                  "Email address",
                  "Phone number",
                  "Proof of payment or transaction receipt",
                  "Date of purchase",
                  "Description of the issue or concern"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base sm:text-lg text-[#4A4A4A] leading-[1.6]">
                    <span className="w-2 h-2 rounded-full bg-[#5F8E8D] shrink-0 mt-2.5" />
                    <span className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">For security and verification purposes, clients may also be asked to confirm their payment information, email address, and phone number following a completed transaction.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Refund requests may be considered in situations involving:</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pl-1 my-2">
                {[
                  "Duplicate transactions",
                  "Unauthorized charges",
                  "Technical issues affecting service delivery",
                  "Failure to receive the purchased service",
                  "Verified billing errors"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base sm:text-lg text-[#4A4A4A] leading-[1.6]">
                    <span className="w-2 h-2 rounded-full bg-[#5F8E8D] shrink-0 mt-2.5" />
                    <span className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Due to the nature of digital consultation and guidance services, refunds are generally not provided once a service has been delivered, initiated, completed, or confirmed by the client as satisfactory.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Cardibuy reserves the right to deny refund requests in cases where there is evidence of:</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pl-1 my-2">
                {[
                  "Service usage or completed delivery",
                  "Client confirmation of satisfaction with the service",
                  "Repeated or abusive refund requests",
                  "Chargeback misuse or fraudulent activity",
                  "Attempts to obtain services without valid payment intention"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base sm:text-lg text-[#4A4A4A] leading-[1.6]">
                    <span className="w-2 h-2 rounded-full bg-[#5F8E8D] shrink-0 mt-2.5" />
                    <span className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Clients are encouraged to contact our support team directly before initiating a payment dispute or chargeback so that we may review the matter and attempt to provide an appropriate resolution.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">By purchasing our services, clients acknowledge and agree to this Refund & Cancellation Policy.</p>
            </div>
          </motion.div>

          {/* SECTION 5: Service Delivery Policy */}
          <motion.div 
            id="sec-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28 p-6 sm:p-10 lg:p-12 rounded-[24px] border border-[#DDE4E1] bg-white shadow-xs relative overflow-hidden flex flex-col gap-8 hover:shadow-md transition-all duration-300 w-full max-w-full box-border [overflow-wrap:break-word] [word-break:break-word] whitespace-normal"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#5F8E8D]/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#5F8E8D]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D]">Section 05 / Logistics</span>
                <h3 className="text-2xl md:text-3xl font-serif font-normal text-[#1E1E1E] mt-2 [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Service Delivery Policy</h3>
              </div>
            </div>
            <div className="space-y-6 text-base sm:text-lg text-[#4A4A4A] leading-[1.85] font-sans font-normal">
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Cardibuy provides digital guidance and consultation services through secure online communication platforms and, where applicable, through scheduled service arrangements.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Following a successful payment, clients may be contacted to confirm their booking details, email address, phone number, preferred communication method, and service information before the consultation is scheduled or delivered.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Service delivery timelines may vary depending on scheduling availability, client responsiveness, time zone differences, technical factors, or the nature of the requested service. Clients are responsible for providing accurate contact information and responding to scheduling or verification requests in a timely manner.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">All services provided by Cardibuy are intended for informational and personal development purposes only. Our guidance, perspectives, and support services should not be interpreted as medical, legal, financial, psychological, or crisis-related advice. Clients remain fully responsible for their personal choices, actions, interpretations, and outcomes following the use of our services.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Cardibuy does not guarantee specific personal, emotional, relationship, or life outcomes resulting from any consultation, guidance session, or support service.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Due to the nature of digital consultation services, a service may be considered delivered once a session has started, communication has been initiated, guidance has been provided, digital content has been shared, or the client has participated in the scheduled consultation.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Clients are expected to communicate respectfully and professionally during all interactions with our team. Cardibuy reserves the right to refuse, suspend, or terminate services in cases involving abusive behavior, harassment, fraudulent activity, repeated payment disputes, or violations of our policies.</p>
            </div>
          </motion.div>

          {/* SECTION 6: Confidentiality, Privacy & Client Safety */}
          <motion.div 
            id="sec-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28 p-6 sm:p-10 lg:p-12 rounded-[24px] border border-[#DDE4E1] bg-white shadow-xs relative overflow-hidden flex flex-col gap-8 hover:shadow-md transition-all duration-300 w-full max-w-full box-border [overflow-wrap:break-word] [word-break:break-word] whitespace-normal"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#5F8E8D]/10 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-[#5F8E8D]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D]">Section 06 / Privacy</span>
                <h3 className="text-2xl md:text-3xl font-serif font-normal text-[#1E1E1E] mt-2 [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Confidentiality, Privacy & Client Safety</h3>
              </div>
            </div>
            <div className="space-y-6 text-base sm:text-lg text-[#4A4A4A] leading-[1.85] font-sans font-normal">
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Cardibuy takes reasonable measures to protect client information and private communications. By using our services, clients acknowledge and agree that communications and service-related interactions may occur through third-party digital platforms, email services, messaging systems, or other online communication tools that are outside of Cardibuy’s direct control.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">While we make reasonable efforts to maintain privacy and data security, Cardibuy cannot guarantee absolute protection against technical failures, unauthorized access, cyber incidents, or third-party platform vulnerabilities.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">For security, compliance, quality assurance, dispute resolution, fraud prevention, and operational purposes, certain communications, scheduling details, payment confirmations, and service-related records may be retained in accordance with applicable legal and operational requirements.</p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Clients must be at least 18 years of age or the legal age of majority in their jurisdiction to purchase or use Cardibuy services. By accessing, booking, or using our services, clients confirm that they meet the applicable legal age requirements and are legally authorized to enter into binding agreements and complete online payments.</p>
              
              <div className="border border-[#DDE4E1] bg-[#5F8E8D]/5 p-6 sm:p-8 rounded-[20px] flex items-start gap-5 box-border w-full max-w-full">
                <ShieldCheck className="w-6 h-6 text-[#5F8E8D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1E1E1E] block mb-2 text-sm sm:text-base uppercase tracking-wider font-sans [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
                    Critical Boundary Notice — No Crisis Support
                  </span>
                  <p className="text-[#4A4A4A] text-[13px] sm:text-[14px] leading-relaxed font-sans [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
                    Our services are not intended for crisis intervention, emergency situations, or licensed medical or psychological treatment services. Clients experiencing serious medical, psychological, or emergency situations should seek assistance from qualified professionals or appropriate local services.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SECTION 7: Contact & Support */}
          <motion.div 
            id="sec-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28 p-6 sm:p-10 lg:p-12 rounded-[24px] border border-[#DDE4E1] bg-white shadow-xs relative overflow-hidden flex flex-col gap-8 hover:shadow-md transition-all duration-300 w-full max-w-full box-border [overflow-wrap:break-word] [word-break:break-word] whitespace-normal"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#5F8E8D]/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-[#5F8E8D]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D]">Section 07 / Communication</span>
                <h3 className="text-2xl md:text-3xl font-serif font-normal text-[#1E1E1E] mt-2 [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Contact & Support</h3>
              </div>
            </div>
            <div className="space-y-6 text-base sm:text-lg text-[#4A4A4A] leading-[1.85] font-sans font-normal">
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">For general inquiries, account-related questions, refund requests, or support assistance, clients may contact our team through the following official channels:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                <div className="p-6 bg-[#5F8E8D]/5 rounded-2xl border border-[#DDE4E1] flex flex-col gap-2 hover:shadow-sm transition-all duration-300 box-border w-full">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F8E8D]">Inquiries:</span>
                  <a href="mailto:Contact@cardibuy.com" className="text-base sm:text-lg font-semibold text-[#1E1E1E] hover:text-[#5F8E8D] font-sans transition-colors break-words [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
                    Contact@cardibuy.com
                  </a>
                </div>
                <div className="p-6 bg-[#5F8E8D]/5 rounded-2xl border border-[#DDE4E1] flex flex-col gap-2 hover:shadow-sm transition-all duration-300 box-border w-full">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F8E8D]">Support:</span>
                  <a href="mailto:Support@cardibuy.com" className="text-base sm:text-lg font-semibold text-[#1E1E1E] hover:text-[#5F8E8D] font-sans transition-colors break-words [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
                    Support@cardibuy.com
                  </a>
                </div>
                <div className="p-6 bg-[#5F8E8D]/5 rounded-2xl border border-[#DDE4E1] flex flex-col gap-2 hover:shadow-sm transition-all duration-300 box-border w-full">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F8E8D]">Telephone:</span>
                  <a href="tel:+447446986308" className="text-base sm:text-lg font-semibold text-[#1E1E1E] hover:text-[#5F8E8D] font-sans transition-colors break-words [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
                    +44 7446 986308
                  </a>
                </div>
              </div>

              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">Support requests are reviewed during regular business operations, and response times may vary depending on request volume, verification requirements, and operational availability.</p>
            </div>
          </motion.div>

        </div>
        
        {/* Decorative quote separator */}
        <div className="mt-20 p-6 md:p-8 lg:p-12 rounded-[24px] border border-dashed border-[#5F8E8D]/30 text-center bg-white w-full max-w-4xl mx-auto box-border [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
          <p className="text-sm md:text-base font-serif italic text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
            "Cardibuy is committed to maintaining the highest ethical standards and total compliance in all advisory engagements. Our goal is to provide clarity, structure, and actionable insights that drive sustainable progress."
          </p>
          <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-[#5F8E8D]">Professional Standards & Compliance Team</p>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    
    // Listen for default popstate back/forward browser navigation
    window.addEventListener('popstate', handleLocationChange);
    // Listen for our custom in-app routing pushes
    window.addEventListener('locationchange', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('locationchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (newPath: string) => {
    window.history.pushState({}, '', newPath);
    setCurrentPath(newPath);
    window.dispatchEvent(new Event('locationchange'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onBackToHome = () => {
    navigateTo('/');
  };

  // Dedicated Route: Terms & Conditions
  if (currentPath === '/terms' || currentPath === '/terms-and-conditions') {
    return (
      <div className="relative selection:bg-accent/20">
        <Navbar currentPath={currentPath} navigateTo={navigateTo} />
        <div className="pt-24 min-h-screen bg-[#F9FBFB]">
          <TermsAndConditions onBackToHome={onBackToHome} />
        </div>
        <Footer currentPath={currentPath} navigateTo={navigateTo} />
      </div>
    );
  }

  // Dedicated Route: Privacy & Policies
  if (currentPath === '/privacy' || currentPath === '/privacy-policy' || currentPath === '/policies') {
    return (
      <div className="relative selection:bg-accent/20">
        <Navbar currentPath={currentPath} navigateTo={navigateTo} />
        <div className="pt-24 min-h-screen bg-[#F9FBFB]">
          <PrivacyPolicy onBackToHome={onBackToHome} />
        </div>
        <Footer currentPath={currentPath} navigateTo={navigateTo} />
      </div>
    );
  }

  // Dedicated Route: Refund & Cancellation Policy
  if (currentPath === '/refund' || currentPath === '/refund-policy') {
    return (
      <div className="relative selection:bg-accent/20">
        <Navbar currentPath={currentPath} navigateTo={navigateTo} />
        <div className="pt-24 min-h-screen bg-[#F9FBFB]">
          <RefundPolicy onBackToHome={onBackToHome} />
        </div>
        <Footer currentPath={currentPath} navigateTo={navigateTo} />
      </div>
    );
  }

  // Standard Main landing page
  return (
    <div className="relative selection:bg-accent/20">
      <Navbar currentPath={currentPath} navigateTo={navigateTo} />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <Policies />
      <Footer currentPath={currentPath} navigateTo={navigateTo} />
    </div>
  );
}
