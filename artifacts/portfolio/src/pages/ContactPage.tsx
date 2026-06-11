import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: (i = 0) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.55, ease },
  }),
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
      <div className="container mx-auto px-5 sm:px-8 pt-16 max-w-5xl">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="text-accent text-sm font-bold tracking-widest uppercase mb-4">Get In Touch</div>
          <h1 className="font-display text-5xl md:text-6xl mb-6">
            Let's <span className="text-accent italic">Connect</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Interested in building something together, sharing opportunities, or having a great conversation at the intersection of product management and AI? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left column — contact options */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
          >

            {/* Book a Call — featured card */}
            <motion.a
              href="tel:+2348160424398"
              custom={0}
              variants={fadeUp}
              className="block bg-accent/10 border border-accent/30 hover:border-accent/60 rounded-xl p-6 group transition-colors"
              data-testid="contact-phone"
              whileHover={{ y: -3, boxShadow: "0 0 0 1px rgba(201,169,110,0.3), 0 16px 40px rgba(0,0,0,0.35)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-accent uppercase tracking-widest font-bold mb-1">Book a Call</div>
                  <div className="text-foreground font-semibold text-lg group-hover:text-accent transition-colors">+(234) 816-0424-398</div>
                </div>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:channelsokunade@gmail.com"
              custom={1}
              variants={fadeUp}
              className="block bg-card border border-border-subtle hover:border-accent/40 rounded-xl p-5 group transition-colors"
              data-testid="contact-email"
              whileHover={{ y: -3, boxShadow: "0 0 0 1px rgba(201,169,110,0.2), 0 12px 30px rgba(0,0,0,0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-text-secondary uppercase tracking-widest mb-1">Email</div>
                  <div className="text-foreground font-medium group-hover:text-accent transition-colors">channelsokunade@gmail.com</div>
                </div>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/channels-oladapo-67253a187/"
              target="_blank"
              rel="noopener noreferrer"
              custom={2}
              variants={fadeUp}
              className="block bg-card border border-border-subtle hover:border-accent/40 rounded-xl p-5 group transition-colors"
              data-testid="contact-linkedin"
              whileHover={{ y: -3, boxShadow: "0 0 0 1px rgba(201,169,110,0.2), 0 12px 30px rgba(0,0,0,0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-text-secondary uppercase tracking-widest mb-1">LinkedIn</div>
                  <div className="text-foreground font-medium group-hover:text-accent transition-colors">channels-oladapo-67253a187</div>
                </div>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/codeconnoisseur-channels/"
              target="_blank"
              rel="noopener noreferrer"
              custom={3}
              variants={fadeUp}
              className="block bg-card border border-border-subtle hover:border-accent/40 rounded-xl p-5 group transition-colors"
              data-testid="contact-github"
              whileHover={{ y: -3, boxShadow: "0 0 0 1px rgba(201,169,110,0.2), 0 12px 30px rgba(0,0,0,0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-text-secondary uppercase tracking-widest mb-1">GitHub</div>
                  <div className="text-foreground font-medium group-hover:text-accent transition-colors">codeconnoisseur-channels</div>
                </div>
              </div>
            </motion.a>

            {/* Available for opportunities */}
            <motion.div custom={4} variants={fadeUp} className="bg-card border border-border-subtle rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Available for Opportunities Globally</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Open to entry-to-mid level roles, remote or hybrid, in early-stage to high-growth stage startups.
              </p>
            </motion.div>

          </motion.div>

          {/* Right column — contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease }}
          >
            <div>
              <label htmlFor="contact-name" className="block text-xs text-text-secondary uppercase tracking-widest mb-2">Name</label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                placeholder="Your name"
                className="w-full bg-card border border-border-subtle rounded-lg px-4 py-3 text-foreground placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors"
                data-testid="contact-form-name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs text-text-secondary uppercase tracking-widest mb-2">Email</label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full bg-card border border-border-subtle rounded-lg px-4 py-3 text-foreground placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors"
                data-testid="contact-form-email"
              />
            </div>
            <div>
              <label htmlFor="contact-subject" className="block text-xs text-text-secondary uppercase tracking-widest mb-2">Subject</label>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                required
                placeholder="What's this about?"
                className="w-full bg-card border border-border-subtle rounded-lg px-4 py-3 text-foreground placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors"
                data-testid="contact-form-subject"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs text-text-secondary uppercase tracking-widest mb-2">Message</label>
              <textarea
                id="contact-message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                rows={8}
                placeholder="Tell me about the role, project, or conversation you have in mind..."
                className="w-full bg-card border border-border-subtle rounded-lg px-4 py-3 text-foreground placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors resize-none"
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
