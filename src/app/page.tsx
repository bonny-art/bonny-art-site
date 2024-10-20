import { ContactForm } from '@/components/common/contact-form/contact-form';
import { Social } from '@/components/ui/social/social';
import { About } from '@/sections/About/About';
import { Hero } from '@/sections/hero/hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <div className="container">
        <div className="bg-additionalVarDt">
          <Social section="header" />
        </div>
        <Social section="contact" />
        <ContactForm />
      </div>
    </main>
  );
}
