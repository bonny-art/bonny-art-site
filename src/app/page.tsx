import { Logo } from '@/components/ui/logo/logo';
import { Navigation } from '@/components/ui/navigation/navigation';

export default function Home() {
  return (
    <main>
      <div className="container">
        <Logo className="mt-5" />
        <Navigation className="mt-5" />
      </div>
    </main>
  );
}
