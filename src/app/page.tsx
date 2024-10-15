import { ContactForm } from '@/components/common/contact-form/contact-form';
import { About } from '@/sections/About/About';

export default function Home() {
  return (
    <main>
      <About />
      <div className="container">
        <ContactForm />
      </div>
    </main>
  );
}
