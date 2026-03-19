import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Linkedin, Send, CheckCircle } from "lucide-react";

// TODO: Replace with your Formspree endpoint — https://formspree.io/f/XXXXXXXX
const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setServerError("Something went wrong. Please try emailing me directly.");
      }
    } catch {
      setServerError("Something went wrong. Please try emailing me directly.");
    }
  };

  const inputBase =
    "w-full rounded-xl px-4 py-3 text-sm outline-none transition-all";
  const inputStyle = {
    background: "hsl(210 28% 9%)",
    border: "1px solid hsl(210 20% 20%)",
    color: "hsl(210 25% 88%)",
  };
  const focusClass = "focus:ring-2 focus:ring-[hsl(174_80%_60%/0.4)]";

  return (
    <div className="min-h-screen bg-[hsl(210_35%_5%)] text-white">
      <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 pt-10 sm:pt-14 pb-20">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3" style={{ color: "hsl(210 40% 98%)" }}>
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base leading-relaxed max-w-lg" style={{ color: "hsl(210 20% 55%)" }}>
            Open to PM roles, contract work, or just a good product conversation. Fill in the form and I'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div
                className="rounded-2xl p-10 flex flex-col items-center text-center gap-4"
                style={{ background: "hsl(210 28% 11%)", border: "1px solid hsl(174 80% 60% / 0.3)" }}
              >
                <CheckCircle size={40} style={{ color: "hsl(174 80% 60%)" }} />
                <h2 className="text-lg font-bold" style={{ color: "hsl(210 40% 98%)" }}>
                  Message sent!
                </h2>
                <p className="text-sm" style={{ color: "hsl(210 20% 55%)" }}>
                  Thanks for reaching out — I'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="rounded-2xl p-6 sm:p-8 space-y-5"
                style={{ background: "hsl(210 28% 11%)", border: "1px solid hsl(210 20% 20%)" }}
              >
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "hsl(210 20% 60%)" }}>
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Your name"
                    className={`${inputBase} ${focusClass}`}
                    style={inputStyle}
                  />
                  {errors.name && (
                    <p className="text-[11px] mt-1.5" style={{ color: "hsl(0 75% 65%)" }}>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "hsl(210 20% 60%)" }}>
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="your@email.com"
                    className={`${inputBase} ${focusClass}`}
                    style={inputStyle}
                  />
                  {errors.email && (
                    <p className="text-[11px] mt-1.5" style={{ color: "hsl(0 75% 65%)" }}>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "hsl(210 20% 60%)" }}>
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="What's on your mind?"
                    className={`${inputBase} ${focusClass} resize-none`}
                    style={inputStyle}
                  />
                  {errors.message && (
                    <p className="text-[11px] mt-1.5" style={{ color: "hsl(0 75% 65%)" }}>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {serverError && (
                  <p className="text-[12px] font-semibold" style={{ color: "hsl(0 75% 65%)" }}>
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{ background: "hsl(174 80% 60%)", color: "hsl(210 35% 5%)" }}
                >
                  <Send size={14} />
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-4">
            <div
              className="rounded-2xl p-6"
              style={{ background: "hsl(210 28% 11%)", border: "1px solid hsl(210 20% 20%)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(210 15% 45%)" }}>
                Or reach me directly
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:lucas.daneluz@gmail.com"
                  className="flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: "hsl(210 25% 75%)" }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(174 80% 60% / 0.1)", color: "hsl(174 80% 60%)" }}
                  >
                    <Mail size={15} />
                  </span>
                  lucas.daneluz@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/lucasdaneluz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: "hsl(210 25% 75%)" }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(174 80% 60% / 0.1)", color: "hsl(174 80% 60%)" }}
                  >
                    <Linkedin size={15} />
                  </span>
                  linkedin.com/in/lucasdaneluz
                </a>
              </div>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: "hsl(210 28% 11%)", border: "1px solid hsl(210 20% 20%)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "hsl(210 15% 45%)" }}>
                Availability
              </p>
              {/* TODO: Update this to reflect your current availability */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "hsl(142 70% 55%)" }} />
                <p className="text-sm" style={{ color: "hsl(210 25% 75%)" }}>
                  Open to new opportunities
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <span className="text-[11px]" style={{ color: "hsl(210 15% 40%)" }}>
            © {new Date().getFullYear()} Lucas Daneluz
          </span>
          <div className="flex items-center gap-4">
            <a
              href="mailto:lucas.daneluz@gmail.com"
              className="text-[11px] flex items-center gap-1.5 transition-opacity hover:opacity-70"
              style={{ color: "hsl(210 15% 45%)" }}
            >
              <Mail size={11} />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/lucasdaneluz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] flex items-center gap-1.5 transition-opacity hover:opacity-70"
              style={{ color: "hsl(210 15% 45%)" }}
            >
              <Linkedin size={11} />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
