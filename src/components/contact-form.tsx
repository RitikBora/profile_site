"use client";

import { useState } from "react";
import { toast } from "sonner";
import { sendContact } from "@/app/contact/actions";

const fieldClass =
  "w-full rounded-lg border border-border bg-input px-3 py-2.5 text-sm text-foreground outline-none transition-[border-color,box-shadow] focus:border-em focus:shadow-glow";
const labelClass =
  "rb-mono mb-1.5 block text-[11px] tracking-wide text-muted-foreground";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setSending(true);
    const res = await sendContact(form);
    setSending(false);
    if (res.ok) {
      toast.success("Message sent — I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } else {
      toast.error(res.error ?? "Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-border bg-card p-6 shadow-xl md:p-7"
    >
      <div className="flex flex-col gap-4">
        <div>
          <label className={labelClass} htmlFor="cf-name">
            name
          </label>
          <input id="cf-name" className={fieldClass} value={form.name} onChange={set("name")} placeholder="Your name" autoComplete="name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-email">
            email
          </label>
          <input id="cf-email" type="email" className={fieldClass} value={form.email} onChange={set("email")} placeholder="you@example.com" autoComplete="email" />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-message">
            message
          </label>
          <textarea id="cf-message" rows={5} className={`${fieldClass} resize-none`} value={form.message} onChange={set("message")} placeholder="What would you like to build?" />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="rb-cta-primary rb-mono mt-1 justify-center self-start rounded-lg px-7 py-3 text-center text-[13px] font-semibold disabled:cursor-not-allowed disabled:opacity-60"
          style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
        >
          {sending ? "sending…" : "send message →"}
        </button>
      </div>
    </form>
  );
}
