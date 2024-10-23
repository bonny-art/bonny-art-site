'use client';

import Link from 'next/link';
import { useIsHomePage } from '@/hooks/use-is-home-page';
import footer from '@/data/footer.json';

export const PolicyLink = () => {
  const isHomePage = useIsHomePage();

  const { home, policy } = footer.policyPage;
  const { href, name } = isHomePage ? policy : home;

  return (
    <Link
      href={href}
      className="text-accentLt dark:text-accentDt font-comfortaa text-sm font-bold -tracking-[0.42px] underline animation hover:text-hoverLt hover:dark:text-hoverDt"
    >
      {name}
    </Link>
  );
};
