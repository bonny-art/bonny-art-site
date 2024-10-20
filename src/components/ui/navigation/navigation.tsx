'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavProps } from './types';
import common from '@/data/common.json';
import clsx from 'clsx';

export const Navigation = ({ className }: NavProps) => {
  const pathname = usePathname();
  const { navigates } = common;

  return (
    <nav className={className}>
      <ul className="flex flex-col gap-[10px] xl:flex-row">
        {navigates.map((i) => {
          const isActive = pathname === i.href;
          return (
            <li key={i.id}>
              <Link
                href={i.href}
                className={clsx(
                  'min-w-[150px] inline-flex items-center justify-center py-4 px-10 rounded-[30px] border border-text60Lt border-opacity-40 dark:border-text60Dt animation text-sm leading-[1.28] font-medium -tracking-[0.42px] hover:border-accentLt hover:text-accentLt hover:dark:border-accentDt hover:dark:text-accentDt md:text-base md:leading-5 md:-tracking-[0.48px]',
                  isActive &&
                    'border-hoverLt bg-additionalLt text-hoverLt dark:border-hoverDt dark:bg-additionalDt dark:text-hoverDt'
                )}
              >
                {i.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
