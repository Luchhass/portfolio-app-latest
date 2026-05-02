import ContactHero from "@/components/Contact/ContactHero/ContactHero";
import MarqueeText from "@/components/MarqueeText/MarqueeText";
import ContactForm from "@/components/Contact/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <MarqueeText text="LET&apos;S TALK" duration="50s" />
      <ContactForm />
    </main>
  );
}
