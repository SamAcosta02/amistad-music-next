'use client';

/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/components/home/home.module.css';
import MAJOR_KEYS, { NOTE_STYLE, MAJOR_SCALES } from '@/consts/consts';
import {
  ofrenda,
  santo,
  hermoso,
  aqui,
} from '@/utils/mock';

function getNoteFromNumber(num: number, scale: string[]): string {
  if (num < 0) {
    // For negative numbers, get the corresponding minor note
    const note = scale[Math.abs(num) - 1];
    return `${note}m`;
  }
  if (num >= 10 && num < 100) {
    // For numbers 10 and above, split into two notes
    const digits = Array.from(String(num), Number);
    return digits.map((digit) => scale[digit - 1]).join('/');
  }
  if (num === 8) {
    return '/';
  }
  if (num === 9) {
    return '-';
  }
  if (num === 0) {
    return '|';
  }
  if (num === 200) {
    return 'x';
  }
  if (num === 201) {
    return 'I';
  }
  // For single digit numbers, get the corresponding note
  return scale[num - 1];
}

export default function Song({ params }: { params: { songId: string } }) {
  const [defKey, setDefKey] = useState('C');
  const [song, setSong] = useState(ofrenda);
  const [src, setSrc] = useState('/ofrenda.png');
  const [name, setName] = useState('Ofrenda');

  useEffect(() => {
    if (params.songId === '1') {
      setSong(santo);
      setSrc('/Albums/Santo.png');
      setName('Santo/Quien es el rey');
    } else if (params.songId === '2') {
      setSong(hermoso);
      setSrc('/Songs/Hermoso.png');
      setName('Hermoso nombre/Santo');
    } else if (params.songId === '3') {
      setSong(aqui);
      setSrc('/Songs/Aqui.png');
      setName('qui te esperare + (2)');
    }
  }, [params]);

  const transpose = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDefKey(event.target.value);
  };

  return (
    <div>
      <section id="song-info" className="bg-light-gray">
        <div className="flex flex-row gap-2 items-center justify-center p-4">
          <Image
            className={`w-32 object-cover ${styles.someshadow}`}
            src={src}
            alt="Imagen de Album"
            width={500}
            height={500}
          />
          <div>
            <h1 className="text-2xl font-bold text-orange">{`${name}`}</h1>
            <h2>Majo y Dan</h2>
            <p>Tono: B</p>
            <p>BPM: 70</p>
            <p>Compas: 4/4</p>
          </div>
        </div>
        <div className="md:flex items-center justify-center hidden">
          <iframe
            className="w-2/3"
            src="https://www.youtube.com/embed/LNNuhi1jJWU?si=ZlWOsV1dO-0-IFRh"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section id="settings" className="flex flex-col items-center gap-2 pt-2">

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-orange">Acordes</h1>
          <div>
            <label htmlFor="version" className="flex flex-row gap-2">
              <p>Version:</p>
              <select id="version" name="version" className="bg-light-gray rounded-md p-1">
                <option value="original">Original</option>
              </select>
            </label>
          </div>
        </div>

        <div className="flex flex-row gap-2 bg-light-gray p-1 pb-2 rounded-lg w-2/3 justify-evenly">

          <div>
            <label htmlFor="trans" className="flex flex-col items-center">
              <p>Transportar</p>
              <select className="rounded-lg" onChange={transpose}>
                {MAJOR_KEYS.map((majorKey:string, index:number) => (
                  <option key={index} value={majorKey}>{majorKey}</option>
                ))}
              </select>
            </label>
          </div>

          <div>
            <label htmlFor="trans" className="flex flex-col items-center">
              <p>Cifrado</p>
              <select className="rounded-lg">
                {NOTE_STYLE.map((style:string, index:number) => (
                  <option key={index} value="notes">{style}</option>
                ))}
              </select>
            </label>
          </div>

        </div>

      </section>

      <section id="content" className="flex justify-center pt-4">
        <div className="bg-light-gray w-11/12 rounded-lg p-2">
          {song.map((row, i) => {
            if (row.length === 1) {
              if (row[0] === 101) {
                return <div className="text-2xl font-bold text-orange">Intro</div>;
              }
              if (row[0] === 102) {
                return <div className="text-2xl font-bold text-orange">Verso</div>;
              }
              if (row[0] === 103) {
                return <div className="text-2xl font-bold text-orange">Pre-coro</div>;
              }
              if (row[0] === 104) {
                return <div className="text-2xl font-bold text-orange">Coro</div>;
              }
              if (row[0] === 105) {
                return <div className="text-2xl font-bold text-orange">Inter</div>;
              }
              if (row[0] === 106) {
                return <div className="text-2xl font-bold text-orange">Puente</div>;
              }
              if (row[0] === 107) {
                return <div className="text-2xl font-bold text-orange">Extra</div>;
              }
            }
            return (
              <div key={i} className="flex gap-1 font-bold">
                {row.map((num, j) => (
                  <div key={j}>{getNoteFromNumber(num, MAJOR_SCALES[defKey])}</div>
                ))}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
