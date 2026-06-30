import React from 'react';
import { ArrowLeft, Scale, Shield, FileText, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

interface TermsAndConditionsProps {
  onBackToHome: () => void;
}

export default function TermsAndConditions({ onBackToHome }: TermsAndConditionsProps) {
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
            Legal Framework
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-light text-[#1E1E1E] leading-tight tracking-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-[15px] sm:text-[16px] text-[#4A4A4A] mt-4 leading-relaxed max-w-2xl font-sans">
            These Terms and Conditions govern the use of the Cardibuy website and the consulting, guidance, and strategic advisory services provided by CARDIBUY LTD.
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

        {/* Reusable Notice Box - Governing Law (Top-level Notice) */}
        <div className="mb-12 border border-[#DDE4E1] bg-[#5F8E8D]/5 p-6 sm:p-8 rounded-[20px] flex items-start gap-5 box-border w-full max-w-full relative overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[#5F8E8D]">
          <Scale className="w-6 h-6 text-[#5F8E8D] shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <span className="font-semibold text-[#1E1E1E] block mb-2 text-sm uppercase tracking-wider font-sans">
              Governing Law Statement
            </span>
            <p className="text-[#4A4A4A] text-xs sm:text-sm leading-relaxed font-sans">
              These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>
        </div>

        {/* Main Document Content Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="p-8 md:p-10 bg-white border border-[#DDE4E1] rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D] block mb-2">Section 01 / Scope</span>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1E1E1E]">1. Acceptance of Terms</h3>
            </div>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] font-sans">
              <p>
                By accessing, browsing, or scheduling a consultation on our website (https://cardibuy.com or associated portals), you fully acknowledge, understand, and agree to be bound by these Terms and Conditions. If you do not agree to all terms specified herein, you must immediately cease using this website and any associated digital services.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="p-8 md:p-10 bg-white border border-[#DDE4E1] rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D] block mb-2">Section 02 / Offerings</span>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1E1E1E]">2. Description of Services</h3>
            </div>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] font-sans">
              <p>
                CARDIBUY LTD provides digital consultation, strategic coaching, and guidance services. These services are delivered through structured one-on-one virtual conversations, customized advisory insights, and tailored perspectives to support clients in personal growth, emotional wellbeing, relationship dynamics, and life transitions.
              </p>
              <p>
                All advisory services, suggestions, and insights are intended solely for personal self-development and educational purposes. Cardibuy does not guarantee specific outcomes, and clients assume full responsibility for their decisions and actions.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="p-8 md:p-10 bg-white border border-[#DDE4E1] rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D] block mb-2">Section 03 / Responsibility</span>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1E1E1E]">3. Professional Advisory Disclaimer</h3>
            </div>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] font-sans">
              {/* Special Notice Box for Disclaimer */}
              <div className="border border-[#DDE4E1] bg-[#5F8E8D]/5 p-6 rounded-[20px] flex items-start gap-5 box-border w-full max-w-full relative overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[#5F8E8D]">
                <ShieldCheck className="w-6 h-6 text-[#5F8E8D] shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-[#1E1E1E] block mb-2 text-sm uppercase tracking-wider font-sans">
                    Not Medical or Psychological Advice
                  </span>
                  <p className="text-[#4A4A4A] text-xs sm:text-sm leading-relaxed font-sans">
                    CARDIBUY LTD is not a licensed clinical medical provider, crisis intervention center, psychiatric facility, or legal/financial advisory firm. Our team does not diagnose conditions, prescribe treatments, or provide clinical therapy.
                  </p>
                </div>
              </div>
              <p className="mt-4">
                If you are undergoing severe psychological distress, mental health crisis, clinical depression, or are in danger of self-harm, you must immediately seek the care of a licensed healthcare practitioner or local emergency crisis services.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="p-8 md:p-10 bg-white border border-[#DDE4E1] rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D] block mb-2">Section 04 / Commercial</span>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1E1E1E]">4. Payment, Booking & Pricing</h3>
            </div>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] font-sans">
              <p>
                Service prices are displayed transparently on our Service Packages page (such as our standard Consulting Session at £20 up to Premium options). All payments are handled securely using encrypted, industry-standard merchant processors.
              </p>
              <p>
                Payment is required in advance of the scheduled advisory session to confirm your booking. For security and verification purposes, we may ask you to confirm your transaction details, registered email address, and active telephone number prior to delivery.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="p-8 md:p-10 bg-white border border-[#DDE4E1] rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D] block mb-2">Section 05 / IP Protection</span>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1E1E1E]">5. Intellectual Property</h3>
            </div>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] font-sans">
              <p>
                All website designs, layout interfaces, copy, logos, graphics, and materials delivered during consultations remain the intellectual property of CARDIBUY LTD. Users are granted a limited, personal, non-commercial license to access the site and read our supportive resources. You are strictly prohibited from copying, reproducing, redistributing, or selling any part of our digital materials without explicit written authorization.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="p-8 md:p-10 bg-white border border-[#DDE4E1] rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D] block mb-2">Section 06 / Jurisdiction</span>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1E1E1E]">6. Governing Law & Dispute Resolution</h3>
            </div>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] font-sans">
              <p>
                These Terms and Conditions, your relationship with CARDIBUY LTD, and any dispute or claim arising out of or in connection with them or their subject matter shall be governed by, and interpreted strictly under, the laws of England and Wales.
              </p>
              <p>
                You agree that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute, controversy, or claim that may arise from using our website or receiving our advisory services.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="p-8 md:p-10 bg-white border border-[#DDE4E1] rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D] block mb-2">Section 07 / Communication</span>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1E1E1E]">7. Contact Information</h3>
            </div>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] font-sans">
              <p>
                For any questions regarding these terms, your compliance profile, or billing inquiries, please contact our administrative support team using the official channels below:
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
