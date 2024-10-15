import ThemeButton from '@/components/common/themeButton';
import { ContactForm } from '@/components/common/contact-form/contact-form';
import { Logo } from '@/components/ui/logo/logo';
import { Navigation } from '@/components/ui/navigation/navigation';
import { AboutInfo } from '@/components/common/about-info/aboutInfo';
import { About } from '@/sections/About/About';

export default function Home() {
  return (
    <main>
      <About />
      <div className="container">
        <Logo className="mt-5" />
        <Navigation className="mt-5" />
        <br />
        <ThemeButton />
        <br />
        <button type="button" className="yellow-button ">
          Переглянути каталог
        </button>

        <br />
        <br />

        <ContactForm />
      </div>
    </main>
  );
}
