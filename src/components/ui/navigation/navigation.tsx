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
              className="
                min-w-[150px]
                inline-flex 
                items-center 
                justify-center 
                py-4 
                px-10 
                rounded-[30px] 
                border 
                
                animation 
                font-medium 

                border-text60Lt 
                dark:border-text60Dt 
                
                hover:border-accentLt 
                dark:hover:border-accentDt 

                hover:text-accentLt 
                dark:hover:text-accentDt 
                
                text-sm 
                leading-[1.28] 
                -tracking-[0.42px] 

                md:text-base 
                md:leading-5 
                md:-tracking-[0.48px] 
              "
            >
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
