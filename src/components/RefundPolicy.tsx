import React from 'react';
import { ArrowLeft, Scale, Shield, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

interface RefundPolicyProps {
  onBackToHome: () => void;
}

export default function RefundPolicy({ onBackToHome }: RefundPolicyProps) {
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
          <span className="text-[#5F8E8D] text-[10px] font-bold uppercase tracking-[0.4em] block mb-3">
            Financial Terms
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-normal text-[#1E1E1E] leading-tight tracking-tight [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
            Refund & Cancellation Policy
          </h1>
          <p className="text-[15px] sm:text-[16px] text-[#4A4A4A] mt-4 leading-relaxed max-w-2xl font-sans [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
            CARDIBUY LTD is committed to maintaining a fair, transparent, and fully secure experience for all clients using our digital guidance, strategic coaching, and consulting services.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="p-6 bg-[#5F8E8D]/5 border-l-4 border-[#5F8E8D] rounded-r-[18px] mb-12 box-border">
          <h4 className="text-sm font-semibold text-[#1E1E1E] font-sans uppercase tracking-wider">Crucial Refund Timeline Notice</h4>
          <p className="text-xs text-[#4A4A4A] mt-2 leading-relaxed [overflow-wrap:break-word] [word-break:break-word] whitespace-normal">
            Clients may submit a refund request within <strong>120 days</strong> from the original payment confirmation date. Refund requests submitted after 120 days are strictly not eligible for review or refund consideration due to completed session delivery timelines, operational limitations, corporate records retention protocols, and merchant payment processing regulations.
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

        {/* Policy Body Content */}
        <div className="space-y-8 text-[15px] sm:text-[16px] text-[#4A4A4A] leading-[1.8] font-sans">
          
          <div className="p-6 md:p-8 bg-white border border-[#DDE4E1] rounded-[18px] shadow-xs">
            <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">1. Eligibility for Refund Requests</h3>
            <p className="mb-4 [overflow-wrap:break-word] [word-break:break-word]">
              All refund requests are reviewed individually on a strict case-by-case basis and are not automatically approved. Refund requests may be considered in situations involving:
            </p>
            <ul className="space-y-3 pl-1 mb-4">
              {[
                "Unintentional, duplicate, or errant transaction bookings.",
                "Service non-delivery or platform malfunction preventing scheduled sessions.",
                "Unforeseen force majeure events preventing strategic scheduling within a 30-day window.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-[#4A4A4A] leading-[1.6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F8E8D] shrink-0 mt-2.5" />
                  <span className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">{item}</span>
                </li>
              ))}
            </ul>
            <p className="[overflow-wrap:break-word] [word-break:break-word]">
              Due to the nature of custom, personalized consultation and digital advisory services, refunds are generally not provided once a strategic session has been initiated, completed, or confirmed by the client.
            </p>
          </div>

          <div className="p-6 md:p-8 bg-white border border-[#DDE4E1] rounded-[18px] shadow-xs">
            <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">2. Investigation & Documentation Requirements</h3>
            <p className="mb-4 [overflow-wrap:break-word] [word-break:break-word]">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F8E8D] shrink-0 mt-2.5" />
                  <span className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 md:p-8 bg-white border border-[#DDE4E1] rounded-[18px] shadow-xs">
            <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">3. Refund Denials</h3>
            <p className="mb-4 [overflow-wrap:break-word] [word-break:break-word]">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F8E8D] shrink-0 mt-2.5" />
                  <span className="[overflow-wrap:break-word] [word-break:break-word] whitespace-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 md:p-8 bg-white border border-[#DDE4E1] rounded-[18px] shadow-xs">
            <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">4. Resolution & Support</h3>
            <p className="mb-6 [overflow-wrap:break-word] [word-break:break-word]">
              Clients are strongly encouraged to contact our support team directly before initiating any external payment dispute or credit card chargeback. Our administration always reviews disputes transparently and attempts to provide an amicable, appropriate resolution.
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

          <div className="p-6 md:p-8 bg-white border border-[#DDE4E1] rounded-[18px] shadow-xs">
            <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">5. Governing Law</h3>
            <p className="[overflow-wrap:break-word] [word-break:break-word]">
              This Refund & Cancellation Policy shall be governed by and construed in accordance with the laws of England and Wales. By acquiring our services, clients explicitly acknowledge, accept, and agree to be bound by these financial terms under the jurisdiction of England and Wales.
            </p>
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
