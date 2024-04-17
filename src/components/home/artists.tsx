import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GroupProps } from '@/utils/types';
import styles from './home.module.css';

export default function ArtistFace(
  {
    src,
    name,
    href = '#',
  }: GroupProps,
) {
  return (
    <div className="flex flex-col shrink-0 px-4">
      <Link href={href}>
        <Image
          className={`w-32 xl:w-[10vw] xl:max-w-[175px] object-cover ${styles.someshadow}`}
          src={src}
          alt="Imagen de grupo"
          width={500}
          height={500}
        />
      </Link>
      <h1 className="text-xs xl:text-lg">{name}</h1>
    </div>
  );
}
