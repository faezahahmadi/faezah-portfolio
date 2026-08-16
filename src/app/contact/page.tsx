import type { Metadata } from "next";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Faezah Ahmadi",
  description: "Get in touch about frontend roles, freelance work, or collaboration.",
};

const contactItems = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: contact.location, href: undefined },
  { icon: Linkedin, label: "LinkedIn", value: "faezah-ahmadi-dev", href: contact.linkedin },
  { icon: Github, label: "GitHub", value: "faezahahmadi", href: contact.github },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something together"
        description="Open to frontend roles, freelance work, and collaborations on projects with real community impact."
      />
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 flex flex-col gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="card p-5 flex items-center gap-4 h-full">
                  <div className="icon-btn" style={{ cursor: "default" }}>
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="font-label" style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: "0.9rem", fontWeight: 500 }}>{item.value}</p>
                  </div>
                </div>
              );
              if (!item.href) return <div key={item.label}>{inner}</div>;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ textDecoration: "none", color: "var(--text)" }}
                >
                  {inner}
                </a>
              );
            })}
          </div>

          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
