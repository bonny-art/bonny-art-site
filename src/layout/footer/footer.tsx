import Link from 'next/link';
import { Logo } from '@/components/ui/logo/logo';
import { Social } from '@/components/ui/social/social';
import { PolicyLink } from '@/components/ui/policy-link/policy-link';
import footer from '@/data/footer.json';

export const Footer = () => {
  const { copyright } = footer;

  return (
    <footer className="bg-additionalVarLt dark:bg-additionalVarDt rounded-t-[30px] md:rounded-t-[60px]">
      <div className="container py-5 md:py-8">
        <div className="flex items-center justify-between flex-col gap-6 md:flex-row md:h-[84px]">
          <Logo className="mt-[14px]" />
          <Social section="footer" />
        </div>
        <div className="w-full h-[1px] my-[15px] bg-accentLt dark:bg-accentDt"></div>
        <div className="flex items-center justify-center flex-col gap-[15px] md:flex-row">
          <PolicyLink />
          <div className="flex items-center gap-1">
            <p className="text-textLt dark:text-textDt font-comfortaa text-sm font-medium -tracking-[0.42px]">
              {copyright} |
            </p>
            <Link
              href="/"
              className="text-accentLt dark:text-accentDt font-comfortaa text-sm font-medium -tracking-[0.42px] underline animation hover:text-hoverLt hover:dark:text-hoverDt"
            >
              {copyright}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
