import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { CertificateCard } from "@/components/certificates/CertificateCard";
import { certificates } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Certificates — Faezah Ahmadi",
  description: "Courses and certifications completed.",
};

export default function CertificatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certificates"
        title="Courses & certifications"
        description="Add a link to each certificate file once it's hosted to make these clickable."
      />
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert) => (
            <CertificateCard key={cert.name} certificate={cert} />
          ))}
        </div>
      </section>
    </>
  );
}
