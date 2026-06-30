import React from 'react';
import { ArrowLeft, Scale, Shield, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

export default function PrivacyPolicy({ onBackToHome }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-[#F9FBFB] font-sans text-[#4A4A4A] py-12 px-4 sm:px-6 md:px-12 lg:px-24 box-border">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5F8E8D] hover:text-[#4E7675] transition-colors duration-300 mb-12 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Header Block */}
        <div className="border-b border-[#DDE4E1] pb-8 mb-10">
          <span className="text-[#5F8E8D]/60 text-[9px] font-bold uppercase tracking-[0.4em] block mb-3">
            Privacy Standards
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-normal text-[#1E1E1E] leading-tight tracking-tight [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
            Privacy Policy
          </h1>
          <p className="text-[15px] sm:text-[16px] text-[#4A4A4A] mt-4 leading-relaxed max-w-2xl font-sans [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
            CARDIBUY LTD is committed to maintaining a fair, transparent, and fully secure experience for all clients using our digital guidance, strategic coaching, and consulting services.
          </p>
        </div>

        {/* Corporate Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <div className="p-5 bg-white border border-[#DDE4E1] rounded-xl flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#5F8E8D] shrink-0 mt-0.5" />
            <div>
              <span className="text-[9px] uppercase tracking-wider font-bold text-[#5F8E8D] block">Business Registration</span>
              <span className="text-xs font-semibold text-[#1E1E1E] block mt-1">CARDIBUY LTD (#16112761)</span>
              <span className="text-[11px] text-[#4A4A4A] block mt-1">Registered in England and Wales</span>
            </div>
          </div>
          <div className="p-5 bg-white border border-[#DDE4E1] rounded-xl flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#5F8E8D] shrink-0 mt-0.5" />
            <div>
              <span className="text-[9px] uppercase tracking-wider font-bold text-[#5F8E8D] block">Registered Office</span>
              <span className="text-xs font-semibold text-[#1E1E1E] block mt-1">20 Wenlock Road, London, N1 7TA</span>
              <span className="text-[11px] text-[#4A4A4A] block mt-1">United Kingdom</span>
            </div>
          </div>
        </div>

        {/* Main Document Content */}
        <div className="space-y-8 text-[15px] sm:text-[16px] text-[#4A4A4A] leading-[1.8] font-sans">
          <div className="p-6 md:p-8 bg-white border border-[#DDE4E1] rounded-[18px] shadow-xs hover:shadow-sm transition-all duration-300">
            <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">Confidentiality, Privacy & Client Safety</h3>
            <div className="space-y-6">
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
                Cardibuy takes reasonable measures to protect client information and private communications. By using our services, clients acknowledge and agree that communications and service-related interactions may occur through third-party digital platforms, email services, messaging systems, or other online communication tools that are outside of Cardibuy’s direct control.
              </p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
                While we make reasonable efforts to maintain privacy and data security, Cardibuy cannot guarantee absolute protection against technical failures, unauthorized access, cyber incidents, or third-party platform vulnerabilities.
              </p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
                For security, compliance, quality assurance, dispute resolution, fraud prevention, and operational purposes, certain communications, scheduling details, payment confirmations, and service-related records may be retained in accordance with applicable legal and operational requirements.
              </p>
              <p className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
                Clients must be at least 18 years of age or the legal age of majority in their jurisdiction to purchase or use Cardibuy services. By accessing, booking, or using our services, clients confirm that they meet the applicable legal age requirements and are legally authorized to enter into binding agreements and complete online payments.
              </p>

              <div className="border border-[#DDE4E1] bg-[#5F8E8D]/5 p-5 md:p-6 rounded-[16px] flex items-start gap-4 box-border w-full max-w-full mt-6">
                <ShieldCheck className="w-5 h-5 text-[#5F8E8D] shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-[#1E1E1E] block mb-2 text-sm uppercase tracking-wider font-sans [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
                    Critical Boundary Notice — No Crisis Support
                  </span>
                  <p className="text-[#4A4A4A] text-xs leading-relaxed font-sans [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
                    Our services are not intended for crisis intervention, emergency situations, or licensed medical or psychological treatment services. Clients experiencing serious medical, psychological, or emergency situations should seek assistance from qualified professionals or appropriate local services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact details for privacy matters */}
          <div className="p-6 md:p-8 bg-white border border-[#DDE4E1] rounded-[18px] shadow-xs">
            <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">Contact & Support</h3>
            <p className="mb-6 [overflow-wrap:break-word] [word-break:break-word]">
              For any questions regarding this Privacy Policy, your compliance profile, or data inquiries, please contact our administrative support team using the official channels below:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#5F8E8D]/5 border border-[#DDE4E1] rounded-xl flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#5F8E8D]" />
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#5F8E8D] block">Inquiries</span>
                  <a href="mailto:Contact@cardibuy.com" className="text-xs font-semibold text-[#1E1E1E] hover:underline">
                    Contact@cardibuy.com
                  </a>
                </div>
              </div>
              <div className="p-4 bg-[#5F8E8D]/5 border border-[#DDE4E1] rounded-xl flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#5F8E8D]" />
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#5F8E8D] block">Support</span>
                  <a href="mailto:Support@cardibuy.com" className="text-xs font-semibold text-[#1E1E1E] hover:underline">
                    Support@cardibuy.com
                  </a>
                </div>
              </div>
              <div className="p-4 bg-[#5F8E8D]/5 border border-[#DDE4E1] rounded-xl flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#5F8E8D]" />
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#5F8E8D] block">Telephone</span>
                  <a href="tel:+447446986308" className="text-xs font-semibold text-[#1E1E1E] hover:underline">
                    +44 7446 986308
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info block */}
        <div className="mt-16 text-center text-[11px] text-[#4A4A4A]/60 border-t border-[#DDE4E1] pt-8">
          <p>© {new Date().getFullYear()} CARDIBUY LTD. All rights reserved. Registered Company in England and Wales.</p>
        </div>
      </div>
    </div>
  );
}
