import clsx from 'clsx';
import { iconMap, SocialProps } from './types';
import common from '@/data/common.json';

export const Social = ({ section }: SocialProps) => {
  const { social } = common;

  return (
    <ul
      className={clsx(
        'flex',
        section === 'contact'
          ? 'flex-col gap-3'
          : section === 'mobile'
            ? 'gap-5'
            : 'gap-2'
      )}
    >
      {social.map((i) => {
        const Icon = iconMap[i.name as keyof typeof iconMap];

        return (
          <li key={i.id}>
            <a
              href={i.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={i.ariaLabel}
              className="inline-flex items-center text-textLt dark:text-textDt animation group"
            >
              <div
                className={clsx(
                  'w-11 h-11 rounded-full flex justify-center items-center animation group-hover:bg-accentLt group-hover:dark:bg-accentDt',
                  section === 'footer'
                    ? 'bg-bgFormLt dark:bg-bgFormDt'
                    : 'bg-additionalLt dark:bg-additionalDt'
                )}
              >
                {Icon && (
                  <Icon
                    width={20}
                    height={20}
                    className="text-accentLt dark:text-accentDt group-hover:text-textInvertLt group-hover:dark:text-textInvertDt animation"
                  />
                )}
              </div>
              {section === 'contact' && (
                <span
                  className="text-textLt 
                dark:text-textDt
                ml-2
                text-[15px]
                font-medium
                leading-normal
                tracking-[-0.3px]
                md:ml-4 md:text-xl
                group-hover:text-accentLt
                group-hover:dark:text-accentDt"
                >
                  {i.text}
                </span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
