import { About } from '@/sections/About/About';
import { Contacts } from '@/sections/contacts/contacts';
import { Hero } from '@/sections/hero/hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Contacts />
    </main>
  );
}
