import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-pearl-pink/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-pearl-silver">
            04 — Contact
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left side - Info */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-6xl italic"
            >
              Let's <span className="text-gradient-pearl">connect</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-muted-foreground leading-relaxed"
            >
              Whether you have a project in mind, want to collaborate, 
              or simply wish to say hello — I'd love to hear from you.
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 pt-8"
            >
              <a href="#" className="block font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors group">
                <span className="inline-block w-2 h-2 rounded-full bg-pearl-pink mr-3 group-hover:shadow-glow transition-shadow" />
                Instagram
              </a>
              <a href="#" className="block font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors group">
                <span className="inline-block w-2 h-2 rounded-full bg-pearl-blue mr-3 group-hover:shadow-glow transition-shadow" />
                Twitter / X
              </a>
              <a href="#" className="block font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors group">
                <span className="inline-block w-2 h-2 rounded-full bg-pearl-lavender mr-3 group-hover:shadow-glow transition-shadow" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right side - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Name
              </label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-transparent border-b border-foreground/20 py-3 font-body text-foreground focus:outline-none focus:border-pearl-pink transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-transparent border-b border-foreground/20 py-3 font-body text-foreground focus:outline-none focus:border-pearl-pink transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Message
              </label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
                className="w-full bg-transparent border-b border-foreground/20 py-3 font-body text-foreground focus:outline-none focus:border-pearl-pink transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-full py-4 bg-gradient-pearl text-background font-body text-sm tracking-[0.3em] uppercase rounded-sm hover:shadow-pearl transition-shadow duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 pt-8 border-t border-foreground/10"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-display text-2xl italic text-gradient-pearl">
            Phoebe Pan
          </p>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
            © 2024 All Rights Reserved
          </p>
        </div>
      </motion.footer>
    </section>
  );
}
