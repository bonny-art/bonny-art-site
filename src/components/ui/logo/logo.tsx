import Link from 'next/link';
import clsx from 'clsx';
import LogoIcon from '@/../public/images/icons/logo.svg';
import { LogoProps } from './types';
import common from '@/data/common.json';

export const Logo = ({ className }: LogoProps) => {
  const { logo } = common;
  return (
    <Link
      href="/"
      aria-label={logo.aria_label}
      className={clsx('inline-flex items-center', className)}
    >
      <LogoIcon
        width={208}
        height={44}
        className="animation hover:scale-105 focus:scale-105"
      />
    </Link>
  );
};
