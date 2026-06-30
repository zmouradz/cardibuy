import React from 'react';
import { ArrowLeft, Scale, Shield, Mail, Phone, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface RefundPolicyProps {
  onBackToHome: () => void;
}

export default function RefundPolicy({ onBackToHome }: RefundPolicyProps) {
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
            Financial Terms
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-light text-[#1E1E1E] leading-tight tracking-tight mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-[15px] sm:text-[16px] text-[#4A4A4A] mt-4 leading-relaxed max-w-2xl font-sans">
            CARDIBUY LTD is committed to maintaining a fair, transparent, and fully secure experience for all clients using our digital guidance, strategic coaching, and consulting services.
          </p>
        </div>

        {/* Reusable Notice Box - Refund timeline highlight banner */}
        <div className="mb-12 border border-[#DDE4E1] bg-[#5F8E8D]/5 p-6 sm:p-8 rounded-[20px] flex items-start gap-5 box-border w-full max-w-full relative overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[#5F8E8D]">
          <ShieldCheck className="w-6 h-6 text-[#5F8E8D] shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <span className="font-semibold text-[#1E1E1E] block mb-2 text-sm uppercase tracking-wider font-sans">
              Crucial Refund Timeline Notice
            </span>
            <p className="text-[#4A4A4A] text-xs sm:text-sm leading-relaxed font-sans">
              Clients may submit a refund request within <strong>120 days</strong> from the original payment confirmation date. Refund requests submitted after 120 days are strictly not eligible for review or refund consideration due to completed session delivery timelines, operational limitations, corporate records retention protocols, and merchant payment processing regulations.
            </p>
          </div>
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
          {/* Section 1 */}
          <div className="p-8 md:p-10 bg-white border border-[#DDE4E1] rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D] block mb-2">Section 01 / Eligibility</span>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1E1E1E]">1. Eligibility for Refund Requests</h3>
            </div>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] font-sans">
              <p>
                All refund requests are reviewed individually on a strict case-by-case basis and are not automatically approved. Refund requests may be considered in situations involving:
              </p>
              <ul className="space-y-3 pl-1 mb-4">
                {[
                  "Unintentional, duplicate, or errant transaction bookings.",
                  "Service non-delivery or platform malfunction preventing scheduled sessions.",
                  "Unforeseen force majeure events preventing strategic scheduling within a 30-day window.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-[#4A4A4A] leading-[1.6]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5F8E8D] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Due to the nature of custom, personalized consultation and digital advisory services, refunds are generally not provided once a strategic session has been initiated, completed, or confirmed by the client.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="p-8 md:p-10 bg-white border border-[#DDE4E1] rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D] block mb-2">Section 02 / Evidence</span>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1E1E1E]">2. Investigation & Documentation Requirements</h3>
            </div>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] font-sans">
              <p>
                To help our compliance department investigate and process your inquiry fairly, you may be asked to provide:
              </p>
              <ul className="space-y-3 pl-1 mb-4">
                {[
                  "Original transaction reference, invoice number, or booking ID.",
                  "The primary email address and phone number used during scheduling.",
                  "A brief description of the circumstances leading to the refund inquiry.",
                  "Any written communications with Cardibuy regarding scheduling difficulties.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-[#4A4A4A] leading-[1.6]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5F8E8D] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="p-8 md:p-10 bg-white border border-[#DDE4E1] rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D] block mb-2">Section 03 / Refusal</span>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1E1E1E]">3. Refund Denials</h3>
            </div>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] font-sans">
              <p>
                CARDIBUY LTD reserves the right to deny refund requests in cases involving:
              </p>
              <ul className="space-y-3 pl-1 mb-4">
                {[
                  "Abusive refund patterns or strategic chargeback exploitation.",
                  "Fraudulent, misidentified, or unverified transaction information.",
                  "Unsolicited cancellation or rescheduling requests made less than 24 hours prior to a booked slot.",
                  "Completed consulting or coaching sessions where delivery was confirmed.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-[#4A4A4A] leading-[1.6]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5F8E8D] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="p-8 md:p-10 bg-white border border-[#DDE4E1] rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D] block mb-2">Section 04 / Dispute Mediation</span>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1E1E1E]">4. Resolution & Support</h3>
            </div>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] font-sans">
              <p>
                Clients are strongly encouraged to contact our support team directly before initiating any external payment dispute or credit card chargeback. Our administration always reviews disputes transparently and attempts to provide an amicable, appropriate resolution.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="p-8 md:p-10 bg-white border border-[#DDE4E1] rounded-[24px] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5F8E8D]" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#5F8E8D] block mb-2">Section 05 / Legal Standing</span>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1E1E1E]">5. Governing Law</h3>
            </div>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.8] text-[#4A4A4A] font-sans">
              <p>
                This Refund & Cancellation Policy shall be governed by and construed in accordance with the laws of England and Wales. By acquiring our services, clients explicitly acknowledge, accept, and agree to be bound by these financial terms under the jurisdiction of England and Wales.
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
