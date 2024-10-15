import ThemeButton from '@/components/common/theme-button/theme-button';
import { Logo } from '@/components/ui/logo/logo';
import { Navigation } from '@/components/ui/navigation/navigation';

export const Header = () => {
  return (
    <header>
      <div className="container flex justify-between py-8">
        <Logo />
        <Navigation />
        <div>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
