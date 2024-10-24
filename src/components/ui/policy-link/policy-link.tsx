'use client';

import Link from 'next/link';
import { useIsPolicyPage } from '@/hooks/use-is-policy-page';
import footer from '@/data/footer.json';

export const PolicyLink = () => {
  const isPolicyPage = useIsPolicyPage();

  const { home, policy } = footer.policyPage;
  const { href, name } = isPolicyPage ? policy : home;

  return (
    <Link
      href={href}
      className="text-accentLt dark:text-accentDt font-comfortaa text-sm font-bold -tracking-[0.42px] underline animation hover:text-hoverLt hover:dark:text-hoverDt"
    >
      {name}
    </Link>
  );
};
