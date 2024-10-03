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
      className={clsx('inline-flex', className)}
    >
      <LogoIcon
        width={178}
        height={40}
        className="animation hover:scale-105 focus:scale-105"
      />
    </Link>
  );
};
