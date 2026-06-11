import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function ContactPage() {
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
      <div className="container mx-auto px-6 pt-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-accent text-sm font-bold tracking-widest uppercase mb-4">LET'S CONNECT</div>
          <h1 className="font-display text-5xl md:text-6xl mb-4">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Open to full-time roles, contract engagements, and product conversations worth having. I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
          >
            <motion.div custom={0} variants={fadeUp} className="bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xs text-text-secondary uppercase tracking-widest mb-1">Email</div>
                <a href="mailto:channelsokunade@gmail.com" className="text-foreground hover:text-accent transition-colors font-medium" data-testid="contact-email">
                  channelsokunade@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div custom={1} variants={fadeUp} className="bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xs text-text-secondary uppercase tracking-widest mb-1">Phone</div>
                <a href="tel:+2348160424398" className="text-foreground hover:text-accent transition-colors font-medium" data-testid="contact-phone">
                  +(234) 816-0424-398
                </a>
              </div>
            </motion.div>

            <motion.div custom={2} variants={fadeUp} className="bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xs text-text-secondary uppercase tracking-widest mb-1">Location</div>
                <span className="text-foreground font-medium">Lagos State, Nigeria</span>
              </div>
            </motion.div>

            <motion.div custom={3} variants={fadeUp} className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/channels-oladapo-67253a187/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-card border border-border-subtle rounded-lg text-text-secondary hover:text-accent hover:border-accent transition-all text-sm font-medium"
                data-testid="contact-linkedin"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/codeconnoisseur-channels/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-card border border-border-subtle rounded-lg text-text-secondary hover:text-accent hover:border-accent transition-all text-sm font-medium"
                data-testid="contact-github"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </motion.div>

            <motion.div custom={4} variants={fadeUp} className="bg-card border border-border-subtle rounded-xl p-6 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-text-secondary">Available for opportunities</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Currently building at the intersection of LLMs, AI Agents, and automation. Looking for roles where product thinking and technical execution both matter.
              </p>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-text-secondary uppercase tracking-widest mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full bg-card border border-border-subtle rounded-lg px-4 py-3 text-foreground placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                  data-testid="contact-form-name"
                />
              </div>
              <div>
                <label className="block text-xs text-text-secondary uppercase tracking-widest mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-card border border-border-subtle rounded-lg px-4 py-3 text-foreground placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                  data-testid="contact-form-email"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-text-secondary uppercase tracking-widest mb-2">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                required
                placeholder="What's this about?"
                className="w-full bg-card border border-border-subtle rounded-lg px-4 py-3 text-foreground placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                data-testid="contact-form-subject"
              />
            </div>
            <div>
              <label className="block text-xs text-text-secondary uppercase tracking-widest mb-2">Message</label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                rows={8}
                placeholder="Tell me about the role, project, or conversation you have in mind..."
                className="w-full bg-card border border-border-subtle rounded-lg px-4 py-3 text-foreground placeholder-text-secondary focus:outline-none focus:border-accent transition-colors resize-none"
                data-testid="contact-form-message"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              data-testid="contact-form-submit"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
