import Link from 'next/link';
import { Logo } from '@/components/ui/logo/logo';
import { PolicyLink } from '@/components/ui/policy-link/policy-link';
import footer from '@/data/footer.json';

export const Footer = () => {
  const { copyright } = footer;

  return (
    <footer>
      <div className="container py-8 bg-additionalColorLt dark:bg-accentBgColorDt rounded-t-[60px]">
        <div className="flex items-center justify-between">
          <Logo />
          <div>social list</div>
        </div>
        <div className="w-full h-[1px] my-[15px] bg-accentColorLt dark:bg-accentColorDt"></div>
        <div className="flex items-center justify-center gap-[15px]">
          <PolicyLink />
          <div className="flex items-center gap-1">
            <p className="text-textColorLt dark:text-textColorDt font-comfortaa text-sm font-medium -tracking-[0.42px]">
              {copyright} |
            </p>
            <Link
              href="/"
              className="text-accentColorLt dark:text-accentColorDt font-comfortaa text-sm font-medium -tracking-[0.42px] underline animation hover:text-accentHoverColorLt hover:dark:text-accentHoverColorDt"
            >
              {copyright}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
