import { useState } from "react";

export default function Contact() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSend = () => {
    const { name, email, message } = fields;
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!email.match(emailPattern)) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Message cannot be empty";
      isValid = false;
    }
    setErrors(newErrors);
    if (isValid) {
      const whatsappMessage = `Hello Edwin, \nMy name is ${name}.\n\nEmail: ${email}\n\nMessage:\n${message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/2349052870113?text=${encodedMessage}`, "_blank");
    }
  };

  return (
    <div className="relative bg-[#0f172a] py-25 px-6 overflow-hidden">
      <div className="text-center mb-14 fade-up">
        <h2 className="text-3xl font-bold text-slate-100 mb-3 tracking-tight">
          Contact Me
        </h2>
        <p className="text-slate-500 text-md lg:text-[1rem]">
          Got a project, idea, or opportunity? Let's talk.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="fade-up delay-2 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-xl">
          <h3 className="text-slate-200 text-lg font-semibold mb-6">Get in touch</h3>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            Need to get in touch? I'd love to hear from you. Whether it's a project,
            collaboration, or just a quick question.
          </p>
          <div className="flex items-center gap-4 mb-6 group">
            <div className="w-11 h-11 rounded-xl bg-indigo-500/15 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wider">Phone</p>
              <a href="tel:09052870113" className="text-slate-300 group-hover:text-white transition">
                09052870113
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-11 h-11 rounded-xl bg-sky-500/15 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </div>
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wider">Email</p>
              <a href="mailto:adeyieddieuel@gmail.com" className="text-slate-300 group-hover:text-white transition">
                adeyieddieuel@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="fade-up delay-3 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-xl">
          <h3 className="text-slate-200 text-lg font-semibold mb-6">Send a Message</h3>
          <div className="mb-5">
            <label className="block text-slate-400 text-sm mb-2">Name</label>
            <input type="text" name="name" value={fields.name} onChange={handleChange} className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.06] transition" placeholder="Enter your name"/>
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="mb-5">
            <label className="block text-slate-400 text-sm mb-2">Email</label>
            <input type="email" name="email" value={fields.email} onChange={handleChange} className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.06] transition" placeholder="Enter your email"/>
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-slate-400 text-sm mb-2">Message</label>
            <textarea name="message" value={fields.message} onChange={handleChange} className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.06] transition" placeholder="Write your message"/>
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          <button onClick={handleSend} className="w-full bg-indigo-600 text-white py-3 rounded-lg text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300">Send Message</button>
        </div>
      </div>
    </div>
  );
}