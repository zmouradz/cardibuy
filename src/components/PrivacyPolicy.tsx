import React from 'react';
import { ArrowLeft, Scale, Shield, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

export default function PrivacyPolicy({ onBackToHome }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-[#F9FBFB] font-sans text-[#4A4A4A] py-12 px-4 sm:px-6 md:px-12 lg:px-24 box-border">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5F8E8D] hover:text-[#4E7675] transition-colors duration-300 mb-8 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Header Block */}
        <div className="border-b border-[#DDE4E1] pb-8 mb-10">
          <span className="text-[#5F8E8D] text-[10px] font-bold uppercase tracking-[0.25em] block mb-3 leading-relaxed">
            Privacy Standards
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-light text-[#1E1E1E] leading-tight tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-[15px] sm:text-[16px] text-[#4A4A4A] mt-4 leading-relaxed max-w-2xl font-sans">
            CARDIBUY LTD is committed to maintaining a fair, transparent, and fully secure experience for all clients using our digital guidance, strategic coaching, and consulting services.
          </p>
        </div>

        {/* Global Compliance Information Cards Block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          <div className="p-6 bg-white border border-[#DDE4E1] rounded-2xl flex flex-col gap-2 shadow-xs hover:shadow-sm transition-all duration-300">
            <Shield className="w-5 h-5 text-[#5F8E8D] shrink-0 mb-1" />
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F8E8D]">Registered Entity</span>
            <span className="text-xs sm:text-sm font-semibold text-[#1E1E1E] leading-relaxed">CARDIBUY LTD</span>
          </div>

          <div className="p-6 bg-white border border-[#DDE4E1] rounded-2xl flex flex-col gap-2 shadow-xs hover:shadow-sm transition-all duration-300">
            <Scale className="w-5 h-5 text-[#5F8E8D] shrink-0 mb-1" />
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F8E8D]">Companies House Number</span>
            <span className="text-xs sm:text-sm font-semibold text-[#1E1E1E] leading-relaxed">16112761</span>
          </div>

          <div className="p-6 bg-white border border-[#DDE4E1] rounded-2xl flex flex-col gap-2 shadow-xs hover:shadow-sm transition-all duration-300">
            <MapPin className="w-5 h-5 text-[#5F8E8D] shrink-0 mb-1" />
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F8E8D]">Registered Address</span>
            <span className="text-xs sm:text-sm font-semibold text-[#1E1E1E] leading-relaxed">
              20 Wenlock Road, London, N1 7TA, United Kingdom
            </span>
          </div>

          <div className="p-6 bg-white border border-[#DDE4E1] rounded-2xl flex flex-col gap-2 shadow-xs hover:shadow-sm transition-all duration-300">
            <Phone className="w-5 h-5 text-[#5F8E8D] shrink-0 mb-1" />
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F8E8D]">Telephone</span>
            <a href="tel:+447446986308" className="text-xs sm:text-sm font-semibold text-[#1E1E1E] hover:text-[#5F8E8D] transition-colors leading-relaxed">
              +44 7446 986308
            </a>
          </div>

          <div className="p-6 bg-white border border-[#DDE4E1] rounded-2xl flex flex-col gap-2 shadow-xs hover:shadow-sm transition-all duration-300">
            <Mail className="w-5 h-5 text-[#5F8E8D] shrink-0 mb-1" />
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F8E8D]">Email</span>
            <a href="mailto:Contact@cardibuy.com" className="text-xs sm:text-sm font-semibold text-[#1E1E1E] hover:text-[#5F8E8D] transition-colors leading-relaxed break-all">
              Contact@cardibuy.com
            </a>
          </div>
        </div>

        {/* Main Document Content Sections */}
        <div className="space-y-8">
          <div className="p-8 md:p-10 bg-white border border-[#DDE4E1] rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col gap-6">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D] block mb-2">Section 01 / Guidelines</span>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1E1E1E]">Confidentiality, Privacy & Client Safety</h3>
            </div>
            <div className="space-y-6 text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] font-sans">
              <p>
                Cardibuy takes reasonable measures to protect client information and private communications. By using our services, clients acknowledge and agree that communications and service-related interactions may occur through third-party digital platforms, email services, messaging systems, or other online communication tools that are outside of Cardibuy’s direct control.
              </p>
              <p>
                While we make reasonable efforts to maintain privacy and data security, Cardibuy cannot guarantee absolute protection against technical failures, unauthorized access, cyber incidents, or third-party platform vulnerabilities.
              </p>
              <p>
                For security, compliance, quality assurance, dispute resolution, fraud prevention, and operational purposes, certain communications, scheduling details, payment confirmations, and service-related records may be retained in accordance with applicable legal and operational requirements.
              </p>
              <p>
                Clients must be at least 18 years of age or the legal age of majority in their jurisdiction to purchase or use Cardibuy services. By accessing, booking, or using our services, clients confirm that they meet the applicable legal age requirements and are legally authorized to enter into binding agreements and complete online payments.
              </p>

              {/* Reusable Notice Box - Critical Boundary Notice */}
              <div className="border border-[#DDE4E1] bg-[#5F8E8D]/5 p-6 rounded-[20px] flex items-start gap-5 box-border w-full max-w-full relative overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[#5F8E8D]">
                <ShieldCheck className="w-6 h-6 text-[#5F8E8D] shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-[#1E1E1E] block mb-2 text-sm uppercase tracking-wider font-sans">
                    Critical Boundary Notice — No Crisis Support
                  </span>
                  <p className="text-[#4A4A4A] text-xs sm:text-sm leading-relaxed font-sans">
                    Our services are not intended for crisis intervention, emergency situations, or licensed medical or psychological treatment services. Clients experiencing serious medical, psychological, or emergency situations should seek assistance from qualified professionals or appropriate local services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 bg-white border border-[#DDE4E1] rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D] block mb-2">Section 02 / Support</span>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1E1E1E]">Contact & Support</h3>
            </div>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] font-sans">
              <p>
                For any questions regarding this Privacy Policy, your compliance profile, or data inquiries, please contact our administrative support team using the official channels below:
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section at the Bottom */}
        <div className="mt-16 pt-16 border-t border-[#DDE4E1]">
          <h4 className="text-2xl font-serif text-[#1E1E1E] mb-2 text-center">Contact & Support</h4>
          <p className="text-[#4A4A4A] text-sm text-center mb-8 max-w-xl mx-auto">
            For any questions regarding our policies, legal compliance, or support inquiries, please contact our administrative team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-6 bg-white border border-[#DDE4E1] rounded-2xl flex flex-col items-center text-center gap-3 hover:shadow-md transition-all duration-300 shadow-xs h-full justify-center">
              <div className="w-10 h-10 rounded-full bg-[#5F8E8D]/10 flex items-center justify-center text-[#5F8E8D] mb-1 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F8E8D] block">Inquiries</span>
              <a href="mailto:Contact@cardibuy.com" className="text-xs sm:text-sm font-semibold text-[#1E1E1E] hover:text-[#5F8E8D] hover:underline transition-colors block leading-relaxed break-all">
                Contact@cardibuy.com
              </a>
            </div>

            <div className="p-6 bg-white border border-[#DDE4E1] rounded-2xl flex flex-col items-center text-center gap-3 hover:shadow-md transition-all duration-300 shadow-xs h-full justify-center">
              <div className="w-10 h-10 rounded-full bg-[#5F8E8D]/10 flex items-center justify-center text-[#5F8E8D] mb-1 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F8E8D] block">Support</span>
              <a href="mailto:Support@cardibuy.com" className="text-xs sm:text-sm font-semibold text-[#1E1E1E] hover:text-[#5F8E8D] hover:underline transition-colors block leading-relaxed break-all">
                Support@cardibuy.com
              </a>
            </div>

            <div className="p-6 bg-white border border-[#DDE4E1] rounded-2xl flex flex-col items-center text-center gap-3 hover:shadow-md transition-all duration-300 shadow-xs h-full justify-center">
              <div className="w-10 h-10 rounded-full bg-[#5F8E8D]/10 flex items-center justify-center text-[#5F8E8D] mb-1 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F8E8D] block">Telephone</span>
              <a href="tel:+447446986308" className="text-xs sm:text-sm font-semibold text-[#1E1E1E] hover:text-[#5F8E8D] hover:underline transition-colors block leading-relaxed break-all">
                +44 7446 986308
              </a>
            </div>

            <div className="p-6 bg-white border border-[#DDE4E1] rounded-2xl flex flex-col items-center text-center gap-3 hover:shadow-md transition-all duration-300 shadow-xs h-full justify-center">
              <div className="w-10 h-10 rounded-full bg-[#5F8E8D]/10 flex items-center justify-center text-[#5F8E8D] mb-1 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F8E8D] block">Registered Entity</span>
              <span className="text-xs sm:text-sm font-semibold text-[#1E1E1E] block leading-relaxed">
                CARDIBUY LTD
              </span>
            </div>

            <div className="p-6 bg-white border border-[#DDE4E1] rounded-2xl flex flex-col items-center text-center gap-3 hover:shadow-md transition-all duration-300 shadow-xs h-full justify-center">
              <div className="w-10 h-10 rounded-full bg-[#5F8E8D]/10 flex items-center justify-center text-[#5F8E8D] mb-1 shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F8E8D] block">Companies House Number</span>
              <span className="text-xs sm:text-sm font-semibold text-[#1E1E1E] block leading-relaxed">
                16112761
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
