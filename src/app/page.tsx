import ThemeButton from '@/components/common/themeButton';
import { ContactForm } from '@/components/common/contact-form/contact-form';
import { Logo } from '@/components/ui/logo/logo';
import { Navigation } from '@/components/ui/navigation/navigation';

export default function Home() {
  return (
    <main>
      <div className="container">
        <Logo className="mt-5" />
        <Navigation className="mt-5" />
        <br />
        <ThemeButton />
        <br />
        <button type="button" className="yellow-button ">
          Переглянути каталог
        </button>
        <ContactForm />
      </div>
    </main>
  );
}
