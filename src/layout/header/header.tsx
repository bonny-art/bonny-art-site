import ThemeButton from '@/components/common/theme-button/theme-button';
import { LangToggle } from '@/components/ui/lang-toggle/lang-toggle';
import { Logo } from '@/components/ui/logo/logo';
import { Navigation } from '@/components/ui/navigation/navigation';

export const Header = () => {
  return (
    <header>
      <div className="container flex justify-between py-8">
        <Logo />
        <Navigation />
        <div className="flex gap-6 items-center">
          <LangToggle />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
