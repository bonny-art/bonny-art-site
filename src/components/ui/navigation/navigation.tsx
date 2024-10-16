import Link from 'next/link';
import { NavProps } from './types';
import common from '@/data/common.json';

export const Navigation = ({ className }: NavProps) => {
  const { navigates } = common;

  return (
    <nav className={className}>
      <ul className="flex flex-col gap-[10px] xl:flex-row">
        {navigates.map((i) => (
          <li key={i.id}>
            <Link
              href={i.href}
              className="min-w-[150px] inline-flex items-center justify-center py-4 px-10 rounded-[30px] border border-buttonTextColor border-opacity-40 dark:border-whiteTransparencyZeroFour animation text-sm leading-[1.28] font-medium -tracking-[0.42px] hover:border-orangePrimary hover:text-orangePrimary dark:hover:border-orangePrimary dark:hover:text-orangePrimary md:text-base md:leading-5 md:-tracking-[0.48px]"
            >
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
