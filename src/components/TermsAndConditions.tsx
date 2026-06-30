import React from 'react';
import { ArrowLeft, Scale, Shield, FileText, Phone, Mail, MapPin } from 'lucide-react';

interface TermsAndConditionsProps {
  onBackToHome: () => void;
}

export default function TermsAndConditions({ onBackToHome }: TermsAndConditionsProps) {
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
          <span className="text-[#5F8E8D] text-[10px] font-bold uppercase tracking-[0.15em] block mb-3 leading-relaxed">
            These Terms and Conditions are governed by the laws of England and Wales.
          </span>
          <span className="text-[#5F8E8D]/60 text-[9px] font-bold uppercase tracking-[0.4em] block mb-3">
            Legal Framework
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-normal text-[#1E1E1E] leading-tight tracking-tight [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
            Terms & Conditions
          </h1>
          <p className="text-[15px] sm:text-[16px] text-[#4A4A4A] mt-4 leading-relaxed max-w-2xl font-sans [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
            These Terms and Conditions govern the use of the Cardibuy website and the consulting, guidance, and strategic advisory services provided by CARDIBUY LTD.
          </p>
          <div className="mt-6 p-4 bg-[#5F8E8D]/5 border-l-2 border-[#5F8E8D] rounded-r-xl">
            <p className="text-sm font-semibold text-[#1E1E1E] [overflow-wrap:break-word] [word-break:break-word]">
              Governing Law Statement:
            </p>
            <p className="text-xs text-[#4A4A4A] mt-1 leading-relaxed [overflow-wrap:break-word] [word-break:break-word]">
              These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>
        </div>

        {/* Corporate Registration Details Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 bg-white border border-[#DDE4E1] p-6 rounded-2xl shadow-xs">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#5F8E8D] shrink-0 mt-0.5" />
            <div>
              <span className="text-[9px] uppercase tracking-wider font-bold text-[#5F8E8D] block">Registered Entity</span>
              <span className="text-xs font-semibold text-[#1E1E1E] block mt-0.5">CARDIBUY LTD</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Scale className="w-5 h-5 text-[#5F8E8D] shrink-0 mt-0.5" />
            <div>
              <span className="text-[9px] uppercase tracking-wider font-bold text-[#5F8E8D] block">Companies House No.</span>
              <span className="text-xs font-semibold text-[#1E1E1E] block mt-0.5">16112761</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#5F8E8D] shrink-0 mt-0.5" />
            <div>
              <span className="text-[9px] uppercase tracking-wider font-bold text-[#5F8E8D] block">Registered Address</span>
              <span className="text-xs font-semibold text-[#1E1E1E] block mt-0.5">20 Wenlock Road, London, N1 7TA, UK</span>
            </div>
          </div>
        </div>

        {/* Main Document Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="p-6 md:p-8 bg-white border border-[#DDE4E1] rounded-[18px] shadow-xs hover:shadow-sm transition-all duration-300">
            <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">1. Acceptance of Terms</h3>
            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
              By accessing, browsing, or scheduling a consultation on our website (https://cardibuy.com or associated portals), you fully acknowledge, understand, and agree to be bound by these Terms and Conditions. If you do not agree to all terms specified herein, you must immediately cease using this website and any associated digital services.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-6 md:p-8 bg-white border border-[#DDE4E1] rounded-[18px] shadow-xs hover:shadow-sm transition-all duration-300">
            <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">2. Description of Services</h3>
            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] mb-4 [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
              CARDIBUY LTD provides digital consultation, strategic coaching, and guidance services. These services are delivered through structured one-on-one virtual conversations, customized advisory insights, and tailored perspectives to support clients in personal growth, emotional wellbeing, relationship dynamics, and life transitions.
            </p>
            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
              All advisory services, suggestions, and insights are intended solely for personal self-development and educational purposes. Cardibuy does not guarantee specific outcomes, and clients assume full responsibility for their decisions and actions.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-6 md:p-8 bg-white border border-[#DDE4E1] rounded-[18px] shadow-xs hover:shadow-sm transition-all duration-300">
            <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">3. Professional Advisory Disclaimer</h3>
            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] mb-4 [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
              <strong>Not Medical or Psychological Advice:</strong> CARDIBUY LTD is not a licensed clinical medical provider, crisis intervention center, psychiatric facility, or legal/financial advisory firm. Our team does not diagnose conditions, prescribe treatments, or provide clinical therapy.
            </p>
            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
              If you are undergoing severe psychological distress, mental health crisis, clinical depression, or are in danger of self-harm, you must immediately seek the care of a licensed healthcare practitioner or local emergency crisis services.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-6 md:p-8 bg-white border border-[#DDE4E1] rounded-[18px] shadow-xs hover:shadow-sm transition-all duration-300">
            <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">4. Payment, Booking & Pricing</h3>
            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] mb-4 [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
              Service prices are displayed transparently on our Service Packages page (such as our standard Consulting Session at £20 up to Premium options). All payments are handled securely using encrypted, industry-standard merchant processors.
            </p>
            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
              Payment is required in advance of the scheduled advisory session to confirm your booking. For security and verification purposes, we may ask you to confirm your transaction details, registered email address, and active telephone number prior to delivery.
            </p>
          </div>

          {/* Section 5 */}
          <div className="p-6 md:p-8 bg-white border border-[#DDE4E1] rounded-[18px] shadow-xs hover:shadow-sm transition-all duration-300">
            <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">5. Intellectual Property</h3>
            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
              All website designs, layout interfaces, copy, logos, graphics, and materials delivered during consultations remain the intellectual property of CARDIBUY LTD. Users are granted a limited, personal, non-commercial license to access the site and read our supportive resources. You are strictly prohibited from copying, reproducing, redistributing, or selling any part of our digital materials without explicit written authorization.
            </p>
          </div>

          {/* Section 6 */}
          <div className="p-6 md:p-8 bg-white border border-[#DDE4E1] rounded-[18px] shadow-xs hover:shadow-sm transition-all duration-300">
            <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">6. Governing Law & Dispute Resolution</h3>
            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] mb-4 [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
              These Terms and Conditions, your relationship with CARDIBUY LTD, and any dispute or claim arising out of or in connection with them or their subject matter shall be governed by, and interpreted strictly under, the laws of England and Wales.
            </p>
            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
              You agree that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute, controversy, or claim that may arise from using our website or receiving our advisory services.
            </p>
          </div>

          {/* Section 7 */}
          <div className="p-6 md:p-8 bg-white border border-[#DDE4E1] rounded-[18px] shadow-xs hover:shadow-sm transition-all duration-300">
            <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">7. Contact Information</h3>
            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] mb-6 [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
              For any questions regarding these terms, your compliance profile, or billing inquiries, please contact our administrative support team using the official channels below:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#5F8E8D]/5 border border-[#DDE4E1] rounded-xl flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#5F8E8D] shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F8E8D] block">Inquiries</span>
                  <a href="mailto:Contact@cardibuy.com" className="text-xs sm:text-sm font-semibold text-[#1E1E1E] hover:underline block mt-0.5">
                    Contact@cardibuy.com
                  </a>
                </div>
              </div>
              <div className="p-4 bg-[#5F8E8D]/5 border border-[#DDE4E1] rounded-xl flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#5F8E8D] shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F8E8D] block">Support</span>
                  <a href="mailto:Support@cardibuy.com" className="text-xs sm:text-sm font-semibold text-[#1E1E1E] hover:underline block mt-0.5">
                    Support@cardibuy.com
                  </a>
                </div>
              </div>
              <div className="p-4 bg-[#5F8E8D]/5 border border-[#DDE4E1] rounded-xl flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#5F8E8D] shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F8E8D] block">Telephone</span>
                  <a href="tel:+447446986308" className="text-xs sm:text-sm font-semibold text-[#1E1E1E] hover:underline block mt-0.5">
                    +44 7446 986308
                  </a>
                </div>
              </div>
              <div className="p-4 bg-[#5F8E8D]/5 border border-[#DDE4E1] rounded-xl flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#5F8E8D] shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F8E8D] block">Company Registry</span>
                  <span className="text-xs font-semibold text-[#1E1E1E] block mt-0.5">
                    Registered in the UK #16112761
                  </span>
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
