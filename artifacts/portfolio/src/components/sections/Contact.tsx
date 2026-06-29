import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                I am open to full-time roles, contract engagements, and interesting conversations about products worth building.
              </p>

              <div className="space-y-6 mb-12">
                <a href="mailto:channelsokunade@gmail.com" className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">channelsokunade@gmail.com</span>
                </a>
                
                <a href="https://www.linkedin.com/in/channels-oladapo-67253a187/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">LinkedIn Profile</span>
                </a>

                <a href="https://github.com/codeconnoisseur-channels/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">GitHub Repository</span>
                </a>

                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-primary">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">Lagos State, Nigeria (GMT+1)</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form 
                action="mailto:channelsokunade@gmail.com" 
                method="POST" 
                encType="text/plain"
                className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 space-y-6"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</label>
                  <Input id="name" name="name" placeholder="John Doe" required className="h-12 bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required className="h-12 bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                  <Input id="subject" name="subject" placeholder="New Opportunity" required className="h-12 bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                  <Textarea id="message" name="message" placeholder="Hello Channels, I'd like to discuss..." rows={5} required className="bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none" />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-base">
                  Send Message
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-32 border-t border-gray-100 pt-8 text-center text-sm font-medium text-gray-400">
        <p>&copy; {new Date().getFullYear()} Channels Okunade Oladapo. Built with precision.</p>
      </div>
    </section>
  );
}
