"use server";

import { Resend } from "resend";
import { EMAIL } from "@/constants/site";

export type ContactResult = { ok: boolean; error?: string };

export async function sendContact(data: {
  name: string;
  email: string;
  message: string;
}): Promise<ContactResult> {
  const name = data.name?.trim();
  const email = data.email?.trim();
  const message = data.message?.trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in all fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not configured yet — set RESEND_API_KEY in .env.local to enable sending.
    return { ok: false, error: "Email isn't set up yet — reach me directly." };
  }

  try {
    const resend = new Resend(apiKey);
    // CONTACT_FROM should be a verified-domain sender (e.g. contact@ritikboradev.com);
    // defaults to Resend's shared sender so it works before domain verification.
    const from = process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>";
    const { error } = await resend.emails.send({
      from,
      to: EMAIL,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    if (error) return { ok: false, error: "Couldn't send — please email me directly." };
    return { ok: true };
  } catch {
    return { ok: false, error: "Couldn't send — please email me directly." };
  }
}
