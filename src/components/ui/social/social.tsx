import clsx from 'clsx';
import { iconMap, SocialProps } from './types';
import common from '@/data/common.json';

export const Social = ({ section }: SocialProps) => {
  const { social } = common;

  return (
    <ul
      className={clsx(
        'flex',
        section === 'contact' ? 'flex-col gap-3' : 'gap-2'
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
              className="inline-flex items-center text-accentColorLt dark:text-accentColorDt animation group"
            >
              <div
                className={clsx(
                  'w-11 h-11 dark:bg-additionalColorDt rounded-full flex justify-center items-center animation group-hover:bg-accentColorLt group-hover:dark:bg-accentColorDt',
                  section === 'header'
                    ? 'bg-textColorDt'
                    : 'bg-additionalColorLt'
                )}
              >
                {Icon && (
                  <Icon
                    width={20}
                    height={20}
                    className="group-hover:text-textColorDt animation"
                  />
                )}
              </div>
              {section === 'contact' && (
                <span className="text-textColorLt dark:text-textColorDt ml-4 text-xl font-medium leading-normal group-hover:text-accentColorLt group-hover:dark:text-accentColorDt">
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
