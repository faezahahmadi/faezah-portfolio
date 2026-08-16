"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Send } from "lucide-react";

const schema = yup.object({
  name: yup.string().trim().required("Your name is required"),
  email: yup.string().trim().email("Enter a valid email").required("Your email is required"),
  message: yup.string().trim().min(10, "Message should be at least 10 characters").required("A message is required"),
});

type FormValues = yup.InferType<typeof schema>;

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem 1rem",
  borderRadius: "10px",
  background: "var(--bg-soft)",
  border: "1px solid var(--border)",
  color: "var(--text)",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.92rem",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "0.8rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
  display: "block",
};

const errorStyle: React.CSSProperties = {
  color: "#e0685f",
  fontSize: "0.8rem",
  marginTop: "0.4rem",
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  // Wire this up to your own backend, form service (e.g. Formspree, Resend),
  // or an API route at /api/contact — this just simulates a submission.
  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log("Contact form submission:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <p className="font-display" style={{ fontSize: "1.3rem", fontWeight: 600 }}>
          Message sent.
        </p>
        <p style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="font-label"
          style={{ color: "var(--gold)", marginTop: "1rem", background: "none", border: "none", cursor: "pointer", fontSize: "0.85rem" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-8" noValidate>
      <div className="mb-5">
        <label htmlFor="name" style={labelStyle}>
          Name
        </label>
        <input id="name" type="text" style={inputStyle} {...register("name")} aria-invalid={!!errors.name} />
        {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input id="email" type="email" style={inputStyle} {...register("email")} aria-invalid={!!errors.email} />
        {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="message" style={labelStyle}>
          Message
        </label>
        <textarea id="message" rows={5} style={{ ...inputStyle, resize: "vertical" }} {...register("message")} aria-invalid={!!errors.message} />
        {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
      </div>

      <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ width: "100%", justifyContent: "center" }}>
        {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
      </button>
    </form>
  );
}
