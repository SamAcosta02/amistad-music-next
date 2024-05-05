/* eslint-disable react/no-array-index-key */

'use client';

import React, { useState, useEffect } from 'react';
import { Song } from '@/utils/types';
import getNoteFromNumber from '@/utils/helpers';
import MAJOR_KEYS, { MAJOR_SCALES } from '@/consts/consts';

export default function Add() {
  const [song, setSong] = useState<Song>({
    id: '',
    name: '',
    keys: ['C'],
    bpm: 70,
    signature: '',
    src: '',
    reference: '',
    author: '',
    versions: [
      {
        title: 'Titulo',
        content: [
          [101],
          [0, 9, 0],
        ],
        contentHeaders: { 101: ['Intro', 'Letra de inicio'] },
        lyrics: [['#Intro'], ['Letra de inicio']],
      },
    ],
  });
  // const [preview, setPreview] = useState<boolean>(true);
  const preview = true;

  const changeNotes = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSong({ ...song, keys: [event.target.value] });
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleChangeVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    const id = url.split('?v=')[1];
    const embedLink = `https://www.youtube.com/embed/${id}`;
    setSong({ ...song, [e.target.name]: embedLink });
  };

  const handleChangeBPM = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleChangeSignature = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(song);
  }, [song]);

  return (
    <div className="flex flex-col items-center">
      <form>
        <section
          id="general-data"
          className="bg-light-gray p-4 rounded-lg flex flex-col gap-2 w-[80vw]"
        >
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold text-orange">
              Informacion General
            </h2>
          </div>
          <label
            htmlFor="Name"
            className="flex flex-row items-center gap-1 w-full"
          >
            <p>Nombre:</p>
            <input
              className="p-1 pl-2 rounded-lg w-[90%]"
              placeholder="Tengo Sed"
              type="text"
              name="name"
              value={song.name}
              onChange={handleChangeName}
            />
          </label>
          <label
            htmlFor="Name"
            className="flex flex-row items-center gap-1 w-full"
          >
            <p>Author:</p>
            <input
              className="p-1 pl-2 rounded-lg w-[90%]"
              placeholder="David Alfano"
              type="text"
              name="author"
              value={song.author}
              onChange={handleChangeAuthor}
            />
          </label>
          <label
            htmlFor="keys"
            className="flex flex-row items-center gap-1 w-full"
          >
            Tono:
            <select className="rounded-lg p-1" onChange={changeNotes}>
              {MAJOR_KEYS.map((majorKey: string) => (
                <option key={majorKey} value={majorKey}>
                  {majorKey}
                </option>
              ))}
            </select>
          </label>
          <label
            htmlFor="keys"
            className="flex flex-row items-center gap-1 w-full"
          >
            Video:
            <input
              className="p-1 pl-2 rounded-lg w-full"
              placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              type="text"
              name="reference"
              value={song.reference}
              onChange={handleChangeVideo}
            />
          </label>
          <div className="flex w-full items-center gap-2">
            <label
              htmlFor="Name"
              className="w-2/5 flex flex-row items-center gap-1"
            >
              <p>BPM: </p>
              <input
                className="p-1 pl-2 rounded-lg w-full"
                placeholder="70"
                type="number"
                name="bpm"
                value={song.bpm}
                onChange={handleChangeBPM}
              />
            </label>
            <label
              htmlFor="signature"
              className="w-3/5 flex flex-row items-center gap-1"
            >
              <p>Compas: </p>
              <input
                className="p-1 pl-2 rounded-lg w-full"
                placeholder="4/4"
                type="text"
                name="signature"
                value={song.signature}
                onChange={handleChangeSignature}
              />
            </label>
          </div>
        </section>

        <section>
          {Object.entries(song.versions[0].contentHeaders).map(([key, value]) => (
            <div key={key} className="flex gap-2 items-center">
              <p className="text-2xl lg:text-3xl font-semibold text-orange">{value[0]}</p>
              <p>{value[1]}</p>
            </div>
          ))}
        </section>
      </form>

      <section className="flex justify-center w-[80vw]">
        {preview && (
        <div className="flex flex-col w-full pt-4">
          <h2 className="text-3xl font-bold text-orange">Vista Previa</h2>
          <div id="content" className="pb-8 w-full">
            <div className="bg-light-gray w-full rounded-lg p-2 max-w-[780px]">
              {song.versions[0].content.map((row, i) => {
                if (row.length === 1) {
                  return (
                    <div key={i} className="flex flex-row gap-2 items-end lg:pt-2">
                      <h2 className="text-2xl lg:text-3xl font-semibold text-orange">
                        {song.versions[0].contentHeaders[row[0]][0]}
                      </h2>
                      <p className="lg:text-lg italic">
                        {song.versions[0].contentHeaders[row[0]][1]}
                      </p>
                    </div>
                  );
                }
                return (
                  <div key={i} className="flex gap-1 font-bold">
                    {row.map((num, j) => (
                      <div className="text-lg" key={j}>
                        {getNoteFromNumber(num, MAJOR_SCALES[song.keys[0]], 'Notas')}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        )}
      </section>
    </div>
  );
}
