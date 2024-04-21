'use client';

/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/components/home/home.module.css';
import MAJOR_KEYS, { NOTE_STYLE, MAJOR_SCALES } from '@/consts/consts';
import {
  santoSong,
  merariSong,
  aquiSong,
} from '@/utils/mock';
import { Version } from '@/utils/types';
import getNoteFromNumber, { generateLyrics } from '@/utils/helpers';

export default function Song({ params }: { params: { songId: string } }) {
  const [defKey, setDefKey] = useState<string>('C');
  const [cypher, setCypher] = useState<string>('Notas');
  const [focus, setFocus] = useState<boolean>(true);
  const [song, setSong] = useState(santoSong);
  const [version, setVersion] = useState<Version>(santoSong.versions[0]);

  const changeCypher = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCypher(event.target.value);
  };

  const changeVersion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const change = event.target.value as unknown as number;
    setVersion(song.versions[change]);
  };

  const transpose = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDefKey(event.target.value);
  };

  const changeFocus = () => {
    setFocus(!focus);
  };

  useEffect(() => {
    if (params.songId === '1') {
      setSong(santoSong);
    } else if (params.songId === '2') {
      setSong(aquiSong);
      setVersion(aquiSong.versions[0]);
    } else {
      setSong(merariSong);
      setVersion(merariSong.versions[0]);
    }
  }, [params]);

  return (
    <div>
      <section id="song-info" className="bg-light-gray md:flex md:flex-row md:justify-center">
        <div className="flex flex-row gap-2 items-center justify-center p-4">
          <Image
            className={`w-32 object-cover ${styles.someshadow} md:size-[20vh] md:max-w-[250px] md:max-h-[250px]`}
            src={song.src}
            alt="Imagen de Album"
            width={500}
            height={500}
          />
          <div>
            <div className="flex flex-col">
              <h1 className="text-lg md:text-2xl font-bold text-orange pb-1">{`${song.name} ${params.songId}`}</h1>
              <h2 className="relative bottom-2 font-extrabold">{song.author}</h2>
            </div>
            <p>
              <span className="font-semibold">Tono: </span>
              {song.keys[0]}
            </p>
            <p>
              <span className="font-semibold text-light-blue">BPM: </span>
              {song.bpm}
            </p>
            <p>
              <span className="font-semibold">Compas: </span>
              {song.signature}
            </p>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <button
              id="option"
              type="button"
              className="bg-nav-blue text-white rounded-lg p-1"
              onClick={changeFocus}
            >
              {focus ? 'Acordes' : 'Letra'}
            </button>
          </div>
        </div>
        <div className="md:flex items-center justify-center hidden">
          <iframe
            className="p-4 rounded-xl h-full"
            src={song.reference}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section id="settings" className="flex flex-col md:flex-row md:justify-center items-center gap-2 md:gap-4 pt-2">

        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold text-orange">{focus ? 'Acordes' : 'Letra'}</h1>
          <div>
            <label htmlFor="version" className="flex flex-row gap-2">
              <p className="font-bold">Version:</p>
              <select id="version" name="version" className="bg-light-gray rounded-md p-1" onChange={changeVersion}>
                {song.versions.map((ver:Version, index:number) => (
                  <option value={index} key={index}>{ver.title}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {focus && (
          <div className="flex flex-row gap-2 bg-light-gray p-1 pb-2 rounded-lg w-2/3 justify-evenly max-w-[350px]">

            <div>
              <label htmlFor="trans" className="flex flex-col items-center">
                <p>Transportar</p>
                <select className="rounded-lg p-1" onChange={transpose}>
                  {MAJOR_KEYS.map((majorKey:string) => (
                    <option key={majorKey} value={majorKey}>{majorKey}</option>
                  ))}
                </select>
              </label>
            </div>

            <div>
              <label htmlFor="trans" className="flex flex-col items-center">
                <p>Cifrado</p>
                <select className="rounded-lg p-1" onChange={changeCypher}>
                  {NOTE_STYLE.map((style:string) => (
                    <option key={style} value={style}>{style}</option>
                  ))}
                </select>
              </label>
            </div>

          </div>
        )}

      </section>

      {focus && (
        <section id="content" className="flex justify-center pt-4 pb-8">
          <div className="bg-light-gray w-11/12 rounded-lg p-2 max-w-[780px]">
            {version.content.map((row, i) => {
              if (row.length === 1) {
                return (
                  <div key={i} className="flex flex-row gap-2 items-end lg:pt-2">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-orange">{version.contentHeaders[row[0]][0]}</h2>
                    <p className="lg:text-lg italic">{version.contentHeaders[row[0]][1]}</p>
                  </div>
                );
              }
              return (
                <div key={i} className="flex gap-1 font-bold">
                  {row.map((num, j) => (
                    <div className="text-lg" key={j}>{getNoteFromNumber(num, MAJOR_SCALES[defKey], cypher)}</div>
                  ))}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {!focus && (
        <section id="lyrics" className="flex justify-center pt-4 pb-8">
          <div className="bg-light-gray w-11/12 rounded-lg p-2 max-w-[780px]">
            {version.lyrics.map((row, i) => (
              <div key={i}>
                {row.map((line, j) => (
                  <div key={j}>{generateLyrics(line)}</div>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
