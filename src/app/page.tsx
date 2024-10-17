import { ContactForm } from '@/components/common/contact-form/contact-form';
import { About } from '@/sections/About/About';
import { Hero } from '@/sections/hero/hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <div className="container">
        <ContactForm />
      </div>
    </main>
  );
}
