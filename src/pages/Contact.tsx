import { useEffect, useState } from "react";
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
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const lines = document.querySelectorAll("h1.display .line");
    lines.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = i * 80 + "ms";
    });
    requestAnimationFrame(() => lines.forEach((el) => el.classList.add("in")));
  }, []);

  const onSubmit = async (data: FormData) => {
    setStatusMsg("SENDING…");
    setStatusType("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatusMsg("● SENT. I'LL GET BACK TO YOU SHORTLY.");
        setStatusType("ok");
        reset();
      } else throw new Error();
    } catch {
      setStatusMsg("● ERROR. EMAIL ME DIRECTLY.");
      setStatusType("error");
    }
  };

  const statusColor =
    statusType === "ok" ? "var(--accent)" :
    statusType === "error" ? "#ff6a6a" :
    "var(--ink-mute)";

  return (
    <>
      {/* HERO */}
      <section className="hero">
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
            <p className="contact-intro">
              Reach me directly at{" "}
              <a href="mailto:lucas.daneluz@gmail.com">lucas.daneluz@gmail.com</a>
              {" "}or on{" "}
              <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            </p>
            <p className="contact-avail">
              <span className="pulse" />
              <span style={{ color: "var(--accent)" }}>Open to new opportunities</span>
              <span className="contact-avail-sep">·</span>
              London, UK
            </p>

            <hr className="contact-rule" />

            <p className="contact-form-label">Alternatively, use the form below.</p>

            <form className="form-b" onSubmit={handleSubmit(onSubmit)} noValidate>
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
              {statusMsg && (
                <p className="status" style={{ color: statusColor }}>{statusMsg}</p>
              )}
            </form>
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
