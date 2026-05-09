import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xreyjeww";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Hero headline stagger
  useEffect(() => {
    const lines = document.querySelectorAll("h1.display .line");
    lines.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = i * 80 + "ms";
    });
    requestAnimationFrame(() => lines.forEach((el) => el.classList.add("in")));
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Focus success panel when it appears
  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  const onSubmit = async (data: FormData) => {
    setSendError(false);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSent(true);
        reset();
      } else throw new Error();
    } catch {
      setSendError(true);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="hero contact-page">
        <div className="hero-main">
          <div className="wrap">
            <h1 className="display">
              <span className="line">GET IN</span>
              <span className="line">TOUCH.</span>
            </h1>
            <p className="contact-tagline">
              Whether you'd like to discuss a role, collaborate on something, or just say hello.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="contact-body">
        <div className="wrap">
          <div className="contact-narrow">
            <p className="contact-intro reveal">
              Reach me directly at{" "}
              <a href="mailto:lucas.daneluz@gmail.com">lucas.daneluz@gmail.com</a>
              {" "}or on{" "}
              <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            </p>
            <p className="contact-avail reveal" style={{ transitionDelay: "60ms" }}>
              <span className="pulse" />
              <span style={{ color: "var(--accent)" }}>Open to new opportunities</span>
              <span className="contact-avail-sep">·</span>
              London, UK
            </p>

            <hr className="contact-rule reveal" style={{ transitionDelay: "120ms" }} />

            {sent ? (
              <div
                className="contact-success reveal in"
                ref={successRef}
                tabIndex={-1}
              >
                <div className="contact-success-icon">✓</div>
                <p className="contact-success-heading">Message sent.</p>
                <p className="contact-success-sub">I'll get back to you shortly.</p>
                <Link to="/" className="contact-success-reset">← Back home</Link>
              </div>
            ) : (
              <>
                <p className="contact-form-label reveal" style={{ transitionDelay: "180ms" }}>
                  Prefer a form? I'll aim to get back within 48 hours.
                </p>
                <form className="form-b reveal" style={{ transitionDelay: "240ms" }} onSubmit={handleSubmit(onSubmit)} noValidate>
                  <label>
                    <div className="lbl">NAME</div>
                    <input type="text" {...register("name")} placeholder="Your name" />
                    {errors.name && <div className="field-error">{errors.name.message}</div>}
                  </label>
                  <label>
                    <div className="lbl">EMAIL</div>
                    <input type="email" {...register("email")} placeholder="your@email.com" />
                    {errors.email && <div className="field-error">{errors.email.message}</div>}
                  </label>
                  <label>
                    <div className="lbl">MESSAGE</div>
                    <textarea {...register("message")} rows={5} placeholder="What's on your mind?" />
                    {errors.message && <div className="field-error">{errors.message.message}</div>}
                  </label>
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "SENDING…" : "SEND MESSAGE →"}
                  </button>
                  {sendError && (
                    <p className="status" style={{ color: "#ff6a6a" }}>
                      ● Something went wrong. Email me directly.
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <footer className="footer-b">
        <div className="wrap">
          <span>© 2026 Lucas Daneluz · Product Manager</span>
          <div className="socials">
            <a href="mailto:lucas.daneluz@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
