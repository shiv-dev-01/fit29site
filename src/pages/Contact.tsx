import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, RefreshCw } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { toast } from "@/hooks/use-toast";

function makeCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 5; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact us — FIT29";
  }, []);

  const [captchaCode, setCaptchaCode] = useState(makeCaptcha);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consentNonMarketing: false,
    consentMarketing: false,
    captcha: "",
  });

  const reloadCaptcha = () => {
    setCaptchaCode(makeCaptcha());
    setForm((f) => ({ ...f, captcha: "" }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.message.trim()) {
      toast({ title: "Please complete all required fields.", variant: "destructive" });
      return;
    }
    if (form.captcha.trim().toUpperCase() !== captchaCode) {
      toast({ title: "Captcha does not match. Try again.", variant: "destructive" });
      reloadCaptcha();
      return;
    }
    toast({ title: "Message sent", description: "Our team will get back to you shortly." });
    setForm({ name: "", email: "", phone: "", message: "", consentNonMarketing: false, consentMarketing: false, captcha: "" });
    reloadCaptcha();
  };

  const inputClass =
    "w-full border rounded-md px-4 py-3 text-[15px] outline-none transition-colors focus:border-[hsl(var(--deep-forest))]";
  const inputStyle: React.CSSProperties = {
    borderColor: "hsl(var(--line))",
    background: "hsl(var(--stone))",
    color: "hsl(var(--charcoal))",
    fontFamily: "inherit",
  };
  const labelStyle: React.CSSProperties = {
    fontSize: 15,
    fontWeight: 600,
    color: "hsl(var(--charcoal))",
    marginBottom: 8,
    display: "inline-block",
  };
  const req = <span style={{ color: "#e11d48", marginLeft: 4 }}>*</span>;

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div style={{ paddingTop: 84 }} />

      <section style={{ background: "hsl(var(--warm-ivory))" }}>
        <div className="site-container" style={{ paddingTop: 72, paddingBottom: 96 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left column */}
            <div style={{ color: "hsl(var(--charcoal))" }}>
              <span className="eyebrow" style={{ letterSpacing: "0.32em" }}>Contact</span>
              <h1
                className="mt-4 neon-headline neon-cyan"
                style={{
                  fontSize: "clamp(2.5rem, 1.5rem + 4vw, 4rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  color: "hsl(var(--charcoal))",
                }}
              >
                Contact <span className="serif-italic" style={{ color: "hsl(var(--soft-gold))" }}>us.</span>
              </h1>

              <ul className="mt-10 space-y-5 text-[15px]">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4" strokeWidth={1.6} style={{ color: "hsl(var(--neon-cyan))" }} />
                  <a href="mailto:support@fit29.com" className="hover:underline">support@fit29.com</a>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1" strokeWidth={1.6} style={{ color: "hsl(var(--neon-cyan))" }} />
                  <div>
                    <div style={{ fontWeight: 700 }}>Our customer support hours are:</div>
                    <div>9:00am – 6:00pm, Mon to Sun</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right column: form */}
            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label style={labelStyle}>Name{req}</label>
                  <input
                    type="text"
                    className={inputClass}
                    style={inputStyle}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>E-mail{req}</label>
                  <input
                    type="email"
                    className={inputClass}
                    style={inputStyle}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    required
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Phone{req}</label>
                <input
                  type="tel"
                  placeholder="(000) 000-0000"
                  className={inputClass}
                  style={inputStyle}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  maxLength={20}
                  required
                />
              </div>

              <div>
                <label style={labelStyle}>Message{req}</label>
                <textarea
                  rows={6}
                  className={inputClass}
                  style={{ ...inputStyle, resize: "vertical" }}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={2000}
                  required
                />
              </div>

              <label className="flex items-start gap-3 text-[14px]" style={{ color: "hsl(var(--charcoal))", lineHeight: 1.55 }}>
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={form.consentNonMarketing}
                  onChange={(e) => setForm({ ...form, consentNonMarketing: e.target.checked })}
                />
                <span>
                  I consent to receive non-marketing text messages from Fit29 regarding order updates, shipping notifications, and doctor communication. Message frequency varies. Message and data rates may apply. Reply HELP for assistance. Reply STOP to opt out.
                </span>
              </label>

              <label className="flex items-start gap-3 text-[14px]" style={{ color: "hsl(var(--charcoal))", lineHeight: 1.55 }}>
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={form.consentMarketing}
                  onChange={(e) => setForm({ ...form, consentMarketing: e.target.checked })}
                />
                <span>
                  I consent to receive marketing text messages from Fit29 regarding promotions and special offers. Message frequency varies. Message and data rates may apply. Reply HELP for assistance. Reply STOP to opt out.
                </span>
              </label>

              <p className="text-[14px] text-center" style={{ color: "hsl(var(--charcoal))" }}>
                Mobile information will not be sold or shared with third parties.
              </p>

              <p className="text-[14px] text-center" style={{ color: "hsl(var(--charcoal))" }}>
                <Link to="/privacy" className="underline" style={{ color: "hsl(var(--neon-cyan))" }}>Privacy Policy</Link>
                {" | "}
                <Link to="/terms" className="underline" style={{ color: "hsl(var(--neon-cyan))" }}>Terms of Use</Link>
                {" | "}
                <Link to="/sms-terms" className="underline" style={{ color: "hsl(var(--neon-cyan))" }}>SMS Terms and Conditions</Link>
              </p>

              <div>
                <label style={labelStyle}>Please verify that you are human{req}</label>
                <div
                  className="mt-2 rounded-md overflow-hidden"
                  style={{ border: "1px solid hsl(var(--line))", maxWidth: 320 }}
                >
                  <div
                    className="flex items-center justify-between px-4 py-3"
                    style={{
                      background: "repeating-linear-gradient(45deg, hsl(var(--stone)), hsl(var(--stone)) 6px, hsl(var(--neon-violet) / 0.18) 6px, hsl(var(--neon-violet) / 0.18) 12px)",
                      borderBottom: "1px solid hsl(var(--line))",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: 22,
                        letterSpacing: "0.5em",
                        fontWeight: 700,
                        color: "hsl(var(--charcoal))",
                        textDecoration: "line-through",
                        userSelect: "none",
                      }}
                    >
                      {captchaCode}
                    </span>
                    <button
                      type="button"
                      onClick={reloadCaptcha}
                      aria-label="Reload captcha"
                      style={{ color: "hsl(var(--neon-cyan))" }}
                    >
                      <RefreshCw className="w-4 h-4" strokeWidth={1.8} />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="w-full px-4 py-3 text-[15px] outline-none"
                    style={{ background: "hsl(var(--stone))", color: "hsl(var(--charcoal))" }}
                    value={form.captcha}
                    onChange={(e) => setForm({ ...form, captcha: e.target.value })}
                    maxLength={8}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-pill-dark" style={{ marginTop: 8 }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
