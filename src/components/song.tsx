import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SongPreview } from '@/utils/types';
import styles from '@/components/home/home.module.css';

export default function SongPreivew(
  {
    id,
    name,
    keys,
    bpm,
    signature,
    src,
    author,
  }:SongPreview,
) {
  return (
    <div className="bg-gradient-to-r from-light-gray from-30% to-transparent w-[85vw] flex md:max-w-[400px]">
      <Link href={`/home/${encodeURIComponent(id)}`}>
        <Image
          className={`w-32 object-cover ${styles.someshadow}`}
          src={src}
          alt="Imagen de Album"
          width={500}
          height={500}
        />
      </Link>
      <div className="pl-2">
        <Link href={`/home/${encodeURIComponent(id)}`}>
          <p className="text-md font-bold">{name}</p>
        </Link>
        <p>{author}</p>
        <div className="flex">
          {keys.map((key: string, index:number) => {
            if (index === keys.length - 1 && keys.length !== 1) {
              return <p key={key[0]}>{key}</p>;
            }
            if (index === 0) {
              if (keys.length === 1) {
                return <p key={key[0]}>{`Tono: ${key}`}</p>;
              }
              return <p key={key[0]}>{`Tono: ${key}->`}</p>;
            }
            return <p key={key[0]}>{`${key}->`}</p>;
          })}
        </div>
        <p>{`BPM: ${bpm}`}</p>
        <p>{`Compas: ${signature}`}</p>
      </div>
    </div>
  );
}
