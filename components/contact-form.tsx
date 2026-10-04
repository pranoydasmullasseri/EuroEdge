"use client"

import React, { useState } from "react"
import { Send, CheckCircle2, Loader2, Lock, Mail, Copy, Check, AlertCircle } from "lucide-react"

interface ContactFormProps {
  showHeading?: boolean
}

export function ContactForm({ showHeading = true }: ContactFormProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Technical Inquiry",
    location: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [copied, setCopied] = useState(false)

  const subject = `Technical Inquiry: ${formData.service || "General"} - ${formData.name}`
  const emailBody = `Dear Euro Edge Technical Services Team,

I would like to submit a technical inquiry with the following details:

• Full Name: ${formData.name}
• Email Address: ${formData.email}
• Phone / WhatsApp: ${formData.phone}
• Service Required: ${formData.service}
• Project Location: ${formData.location || "Dubai / UAE"}

Project Details / Scope:
${formData.message || "Please contact me regarding this technical requirement."}

Sent via Euro Edge Technical Services Website (https://euroedgets.com)`

  const mailtoUrl = `mailto:info@euroedgets.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`

  const whatsappMsg = `Hi Euro Edge Technical Services,

I would like to enquire about:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Service: ${formData.service}
• Location: ${formData.location || "Dubai, UAE"}
• Details: ${formData.message || "Please contact me regarding this technical requirement."}`

  const whatsappUrl = `https://wa.me/971543909946?text=${encodeURIComponent(whatsappMsg)}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg("")

    // Validation — Name, Email, and Phone/WhatsApp are strictly required
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your full name.")
      return
    }

    if (!formData.email.trim()) {
      setErrorMsg("Please enter your email address.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg("Please enter a valid email address.")
      return
    }

    if (!formData.phone.trim()) {
      setErrorMsg("Please enter your phone / WhatsApp number.")
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to deliver inquiry. Please try again or reach out on WhatsApp.")
      }

      setSubmittedEmail(formData.email)
      setSubmitted(true)
    } catch (err: any) {
      setErrorMsg(
        err.message || "Network issue delivering email. You can also send directly via email client or WhatsApp below."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(`To: info@euroedgets.com\nSubject: ${subject}\n\n${emailBody}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-6 sm:py-8 px-2 sm:px-4 text-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0a2540] text-[#fbb03b] rounded-2xl flex items-center justify-center mb-4 sm:mb-5 shadow-sm border border-white/10">
          <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-bold tracking-tight">
          Inquiry Successfully Sent!
        </h3>
        <p className="mt-2 text-muted-foreground text-xs sm:text-sm font-sans max-w-md leading-relaxed">
          Thank you, <span className="font-bold text-foreground">{formData.name || "valued client"}</span>. Our operations desk has received your request.
        </p>

        {/* 2-way email confirmation callout */}
        <div className="mt-5 w-full max-w-lg p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-left space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0066cc] text-white flex items-center justify-center shrink-0 mt-0.5">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-xs sm:text-sm font-bold text-[#0a2540]">
                Confirmation Sent to Your Inbox
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed break-all">
                An automated receipt and copy of your inquiry has been dispatched to:
              </p>
              <div className="mt-1.5 inline-block px-2.5 py-1 rounded-md bg-white border border-blue-200 text-xs font-mono font-semibold text-[#0066cc] break-all">
                {submittedEmail || formData.email}
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                (If you do not see it within a few minutes, please check your spam/junk folder)
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-blue-100 flex items-center justify-between text-[11px] text-slate-600">
            <span>Delivered to Euro Edge Desk:</span>
            <span className="font-bold text-[#0a2540]">info@euroedgets.com</span>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1fa851] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm min-h-[48px]"
          >
            <Send className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:+971543909946"
            className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl bg-[#0a2540] hover:bg-[#0066cc] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm min-h-[48px]"
          >
            <Mail className="w-4 h-4 text-[#fbb03b]" />
            <span>Call +971 54 390 9946</span>
          </a>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-600 font-medium">Inquiry Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Inquiry Details</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setFormData({
              name: "",
              email: "",
              phone: "",
              service: "General Technical Inquiry",
              location: "",
              message: "",
            })
          }}
          className="mt-6 text-xs font-mono font-bold uppercase tracking-wider text-primary hover:underline transition-colors"
        >
          Send Another Inquiry
        </button>
      </div>
    )
  }

  return (
    <>
      {showHeading && (
        <div className="mb-6">
          <h3 className="font-serif text-2xl font-bold text-foreground tracking-tight">
            Send Us a Technical Inquiry
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm font-sans mt-1.5 leading-relaxed">
            Tell us about your requirement and our technical team will get back to you promptly.
          </p>
        </div>
      )}

      {errorMsg && (
        <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium space-y-3">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{errorMsg}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-red-200/60">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-2xs"
            >
              <Send className="w-3 h-3" />
              Chat on WhatsApp
            </a>
            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold shadow-2xs"
            >
              <Mail className="w-3 h-3 text-[#fbb03b]" />
              Open in Mail App
            </a>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="text-xs sm:text-[12px] font-bold uppercase tracking-wider text-slate-700 font-sans block mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[16px] sm:text-sm font-sans text-[#0a2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066cc]/30 focus:border-[#0066cc] transition-all min-h-[48px] shadow-2xs"
            placeholder="Your full name"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="email" className="text-xs sm:text-[12px] font-bold uppercase tracking-wider text-slate-700 font-sans block">
                Email Address <span className="text-red-500">*</span>
              </label>
              <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">2-way confirmation</span>
            </div>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[16px] sm:text-sm font-sans text-[#0a2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066cc]/30 focus:border-[#0066cc] transition-all min-h-[48px] shadow-2xs"
                placeholder="name@company.com"
              />
            </div>
            <p className="text-[11px] text-slate-500 font-sans mt-1 leading-tight">
              You will receive an automated confirmation at this address.
            </p>
          </div>

          <div>
            <label htmlFor="phone" className="text-xs sm:text-[12px] font-bold uppercase tracking-wider text-slate-700 font-sans block mb-1.5">
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[16px] sm:text-sm font-sans text-[#0a2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066cc]/30 focus:border-[#0066cc] transition-all min-h-[48px] shadow-2xs"
              placeholder="+971 54 390 9946"
            />
          </div>
        </div>

        {/* Service Required */}
        <div>
          <label htmlFor="service" className="text-xs sm:text-[12px] font-bold uppercase tracking-wider text-slate-700 font-sans block mb-1.5">
            Service Required
          </label>
          <div className="relative">
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[16px] sm:text-sm font-sans text-[#0a2540] focus:outline-none focus:ring-2 focus:ring-[#0066cc]/30 focus:border-[#0066cc] transition-all min-h-[48px] shadow-2xs cursor-pointer"
            >
              <option value="General Technical Inquiry">General Technical Inquiry</option>

              <optgroup label="Our Main Services">
                <option value="Painting – Interior & Exterior">Painting – Interior & Exterior</option>
                <option value="Wall & Floor Tiling">Wall & Floor Tiling</option>
                <option value="Plastering">Plastering</option>
                <option value="False Ceiling & Gypsum Partitions">False Ceiling & Gypsum Partitions</option>
                <option value="Carpentry & Wood Flooring">Carpentry & Wood Flooring</option>

                <option value="Electrical Works">Electrical Works</option>
                <option value="Plumbing & Sanitary Works">Plumbing & Sanitary Works</option>
                <option value="AC & HVAC Works">AC & HVAC Works</option>
                <option value="Ventilation & Air Filtration">Ventilation & Air Filtration</option>
                <option value="Electromechanical Works">Electromechanical Works</option>

                <option value="Pool Construction">Pool Construction</option>
                <option value="Waterproofing">Waterproofing</option>
                <option value="Pool Tiling & Finishing">Pool Tiling & Finishing</option>
                <option value="Pool Equipment Installation">Pool Equipment Installation</option>
                <option value="Pool Maintenance">Pool Maintenance</option>

                <option value="Soft & Hard Landscaping">Soft & Hard Landscaping</option>
                <option value="Paving & Interlock">Paving & Interlock</option>
                <option value="Irrigation">Irrigation</option>
                <option value="Garden & Outdoor Works">Garden & Outdoor Works</option>
                <option value="Landscape Maintenance">Landscape Maintenance</option>

                <option value="Building & Villa Maintenance">Building & Villa Maintenance</option>
                <option value="Renovation & Repair Works">Renovation & Repair Works</option>
              </optgroup>

              <option value="Other / Custom Technical Solution">Other / Custom Technical Solution</option>
            </select>
          </div>
        </div>

        {/* Project Location */}
        <div>
          <label htmlFor="location" className="text-xs sm:text-[12px] font-bold uppercase tracking-wider text-slate-700 font-sans block mb-1.5">
            Project Location
          </label>
          <input
            id="location"
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[16px] sm:text-sm font-sans text-[#0a2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066cc]/30 focus:border-[#0066cc] transition-all min-h-[48px] shadow-2xs"
            placeholder="e.g., Dubai Marina, Business Bay, Al Quoz..."
          />
        </div>

        {/* Project Details / Requirements */}
        <div>
          <label htmlFor="message" className="text-xs sm:text-[12px] font-bold uppercase tracking-wider text-slate-700 font-sans block mb-1.5">
            Project Details / Requirements
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[16px] sm:text-sm font-sans text-[#0a2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066cc]/30 focus:border-[#0066cc] transition-all min-h-[110px] resize-none shadow-2xs"
            placeholder="Describe your location, technical requirements, project timeline, or questions..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-xl bg-[#0a2540] hover:bg-[#0066cc] active:bg-[#071a2e] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 mt-4 min-h-[50px] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer active:scale-[0.99]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>SENDING INQUIRY...</span>
            </>
          ) : (
            <>
              <span>SUBMIT INQUIRY</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>

        <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-muted-foreground font-sans">
          <Lock className="w-3.5 h-3.5 text-muted-foreground/70" />
          <span>Your information is delivered directly to info@euroedgets.com</span>
        </div>
      </form>
    </>
  )
}
