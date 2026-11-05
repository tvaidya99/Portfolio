import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, slideIn, textVariant } from '../utils/motion';
import { sendHover, github } from '../assets';

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_waewq03';
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_nm7okn7';
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YWGV4r3mKNSgvY22k';
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'tvaidya@mun.ca';

// SVG Icons
const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => current[name] ? { ...current, [name]: null } : current);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          from_name: form.name.trim(),
          to_name: 'Tanmay Vaidya',
          from_email: form.email.trim(),
          to_email: contactEmail,
          message: form.message.trim(),
        },
        emailPublicKey
      );
      setSubmitStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative py-10 sm:py-14">
      <div className={`${styles.innerWidth} mx-auto`}>
        <motion.div
          variants={textVariant()}
          className="mx-auto mb-9 max-w-2xl text-center sm:mb-10"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadTextLight} id="contact-heading">Contact.</h2>
          <p className="mt-4 text-taupe text-lg leading-relaxed">
            I&apos;m always open to discussing new opportunities, interesting projects, or just a quick chat about tech.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] xl:gap-8">
          {/* Contact Form */}
          <motion.div
            variants={slideIn('left', 'spring', 0.1, 0.8)}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-7"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
              noValidate
              aria-label="Contact form"
            >
              <div>
                <label htmlFor="name" className="block text-timberWolf font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What&apos;s your name?"
                  className="min-h-12 w-full rounded-md border border-white/15 bg-eerieBlack/50 px-4 py-3 font-medium text-timberWolf outline-none transition-colors placeholder:text-taupe focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                  disabled={loading}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  autoComplete="name"
                  required
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-red-400 text-sm" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-timberWolf font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What&apos;s your email?"
                  className="min-h-12 w-full rounded-md border border-white/15 bg-eerieBlack/50 px-4 py-3 font-medium text-timberWolf outline-none transition-colors placeholder:text-taupe focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                  disabled={loading}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  autoComplete="email"
                  required
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-red-400 text-sm" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-timberWolf font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What&apos;s your message?"
                  className="w-full resize-y rounded-md border border-white/15 bg-eerieBlack/50 px-4 py-3 font-medium text-timberWolf outline-none transition-colors placeholder:text-taupe focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                  disabled={loading}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  required
                  minLength={10}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-red-400 text-sm" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-primary px-6 py-3 font-beckman text-base font-bold text-eerieBlack transition-colors duration-200 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                aria-busy={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send
                    <img src={sendHover} alt="" className="w-5 h-5 object-contain" aria-hidden="true" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <p className="font-medium">Thanks for reaching out! I&apos;ll get back to you soon.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center"
                  role="alert"
                  aria-live="assertive"
                >
                  <p className="font-medium">Something went wrong. Please try again or email me directly.</p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Links */}
          <motion.div
            variants={slideIn('right', 'spring', 0.2, 0.8)}
            className="space-y-6"
          >
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-7">
              <h3 className="font-beckman text-lg font-bold text-white-100 sm:text-xl">Other ways to connect</h3>
              <div className="mt-3 divide-y divide-white/10">
                <a
                  href="mailto:tvaidya@mun.ca"
                  className="group flex min-h-16 items-center gap-3 py-3 transition-colors hover:text-white-100"
                  aria-label="Email me at tvaidya@mun.ca"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/5 text-timberWolf transition-colors group-hover:bg-white/10">
                    <MailIcon />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-taupe text-sm uppercase tracking-wider font-medium">Email</p>
                    <p className="break-all text-sm font-medium leading-5 text-timberWolf group-hover:text-white-100 sm:break-normal">tvaidya@mun.ca</p>
                  </div>
                </a>

                <a
                  href="https://github.com/tvaidya99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-16 items-center gap-3 py-3 transition-colors hover:text-white-100"
                  aria-label="View my GitHub profile"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/5 text-timberWolf transition-colors group-hover:bg-white/10">
                    <img src={github} alt="" className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-taupe text-sm uppercase tracking-wider font-medium">GitHub</p>
                    <p className="break-all text-sm font-medium leading-5 text-timberWolf group-hover:text-white-100 sm:break-normal">github.com/<wbr />tvaidya99</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/tvaidya99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-16 items-center gap-3 py-3 transition-colors hover:text-white-100"
                  aria-label="Connect on LinkedIn"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/5 text-timberWolf transition-colors group-hover:bg-white/10">
                    <LinkedInIcon />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-taupe text-sm uppercase tracking-wider font-medium">LinkedIn</p>
                    <p className="break-all text-sm font-medium leading-5 text-timberWolf group-hover:text-white-100 sm:break-normal">linkedin.com/<wbr />in/tvaidya99</p>
                  </div>
                </a>

                <a
                  href="tel:+17097252557"
                  className="group flex min-h-16 items-center gap-3 py-3 transition-colors hover:text-white-100"
                  aria-label="Call Tanmay Vaidya at 709-725-2557"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/5 text-timberWolf" aria-hidden="true">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-taupe text-sm uppercase tracking-wider font-medium">Phone</p>
                    <p className="text-sm font-medium leading-5 text-timberWolf transition-colors group-hover:text-white-100">709-725-2557</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability status */}
            <motion.div
              variants={fadeIn('up', 'spring', 0.3, 0.6)}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-bold font-beckman text-white-100">Location</h3>
              </div>
              <p className="text-taupe text-sm">
                New Glasgow, Nova Scotia, Canada.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, 'contact');