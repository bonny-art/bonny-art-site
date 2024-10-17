import hero from '@/data/hero.json';
import Image from 'next/image';

export const Hero = () => {
  const { title, img } = hero;

  return (
    <section>
      <div className="container">
        <h1 className="bg-yellow-500 rounded-t-[60px] px-12 py-9 text-right font-marmelad text-[90px] font-normal leading-[1.12] -tracking-[2.7px]">
          {title.part1}
          <span>{title.part2}</span>
        </h1>
        <Image
          src={img.src}
          width={1216}
          height={384}
          alt={img.alt}
          priority
          className="rounded-b-[60px]"
        />
      </div>
    </section>
  );
};
