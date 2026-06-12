import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Send, CalendarDays, ArrowRight } from "lucide-react";
import { useState } from "react";
import { usePageTitle } from "@/hooks/use-page-title";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ContactPage() {
  usePageTitle("Contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:channelsokunade@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen pb-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">Get In Touch</div>
          <h1 className="font-display text-5xl md:text-6xl mb-5">
            Let's <span className="text-accent italic">Work Together</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            Open to full time opportunities, collaborations, or conversations about product and AI.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* ── Left column ── */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease }}
          >
            {/* Book a call card */}
            <motion.a
              href="https://calendly.com/channelsokunade/chat-with-channels"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-accent/10 border border-accent/30 hover:border-accent/55 rounded-xl px-6 py-5 group transition-colors"
              whileHover={{ y: -3, boxShadow: "0 0 0 1px rgba(201,169,110,0.3), 0 16px 40px rgba(0,0,0,0.4)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                  <CalendarDays className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-foreground font-semibold text-[15px]">Book a 15-min Call</div>
                  <div className="text-text-secondary text-sm">Let's discuss your project.</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform shrink-0" />
            </motion.a>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-border-subtle" />
              <span className="text-text-secondary text-xs uppercase tracking-widest">Or reach me directly</span>
              <div className="flex-1 h-px bg-border-subtle" />
            </div>

            {/* Direct contact links */}
            <div className="space-y-2.5">
              <a
                href="tel:+2348160424398"
                className="flex items-center gap-3.5 px-5 py-3.5 bg-card border border-border-subtle hover:border-accent/40 rounded-xl group transition-colors"
              >
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <div>
                  <div className="text-[11px] text-text-secondary uppercase tracking-widest mb-0.5">Phone</div>
                  <div className="text-foreground text-sm font-medium group-hover:text-accent transition-colors">+(234) 816-0424-398</div>
                </div>
              </a>
              <a
                href="mailto:channelsokunade@gmail.com"
                className="flex items-center gap-3.5 px-5 py-3.5 bg-card border border-border-subtle hover:border-accent/40 rounded-xl group transition-colors"
              >
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <div>
                  <div className="text-[11px] text-text-secondary uppercase tracking-widest mb-0.5">Email</div>
                  <div className="text-foreground text-sm font-medium group-hover:text-accent transition-colors">channelsokunade@gmail.com</div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/channels-oladapo-67253a187/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-5 py-3.5 bg-card border border-border-subtle hover:border-accent/40 rounded-xl group transition-colors"
              >
                <Linkedin className="w-4 h-4 text-accent shrink-0" />
                <div>
                  <div className="text-[11px] text-text-secondary uppercase tracking-widest mb-0.5">LinkedIn</div>
                  <div className="text-foreground text-sm font-medium group-hover:text-accent transition-colors">channels-oladapo-67253a187</div>
                </div>
              </a>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-2.5 px-5 py-3 bg-card border border-border-subtle rounded-xl">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
              <span className="text-text-secondary text-sm">Available for PM opportunities globally · remote or hybrid</span>
            </div>
          </motion.div>

          {/* ── Right column — form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease }}
          >
            <div className="bg-card border border-border-subtle rounded-2xl p-7">
              <h2 className="font-display text-xl text-foreground mb-1">Send a Message</h2>
              <p className="text-text-secondary text-sm mb-6">I reply within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs text-text-secondary uppercase tracking-widest mb-1.5">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="w-full bg-background border border-border-subtle rounded-lg px-4 py-2.5 text-foreground text-sm placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    data-testid="contact-form-name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs text-text-secondary uppercase tracking-widest mb-1.5">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-background border border-border-subtle rounded-lg px-4 py-2.5 text-foreground text-sm placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    data-testid="contact-form-email"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-xs text-text-secondary uppercase tracking-widest mb-1.5">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    required
                    placeholder="What's this about?"
                    className="w-full bg-background border border-border-subtle rounded-lg px-4 py-2.5 text-foreground text-sm placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    data-testid="contact-form-subject"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs text-text-secondary uppercase tracking-widest mb-1.5">Message</label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                    rows={7}
                    placeholder="Tell me about the role, project, or conversation you have in mind..."
                    className="w-full bg-background border border-border-subtle rounded-lg px-4 py-2.5 text-foreground text-sm placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
                    data-testid="contact-form-message"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-background rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="contact-form-submit"
                >
                  Send Message <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
