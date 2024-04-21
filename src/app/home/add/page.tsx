'use client';

/* eslint-disable react/no-array-index-key */

import React, { useEffect, useState } from 'react';
import MAJOR_KEYS, { MAJOR_SCALES } from '@/consts/consts';

export default function Add() {
  const [song, setSong] = useState({
    id: '',
    name: '',
    keys: [],
    bpm: '',
    signature: '',
    src: '',
    reference: '',
    author: '',
    versions: [],
  });
  const [focus, setFocus] = useState<boolean>(true);
  const [sections, setSections] = useState(['Intro']);
  const [defKey, setDefKey] = useState<string[]>(MAJOR_SCALES.C);
  const [chords, setChords] = useState<number[][]>([[101]]);
  const [numSec, setNumSec] = useState<number>(102);

  const changeFocus = () => {
    setFocus(!focus);
  };

  const addSection = () => {
    setSections([...sections, 'Intro']);
    setNumSec(numSec + 1);
    setChords([...chords, [numSec], []]);
  };

  const changeNotes = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDefKey(MAJOR_SCALES[event.target.value]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(chords);
  }, [chords]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-orange p-4">Agregar Canción</h1>
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
              onChange={handleChange}
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
              name="name"
              value={song.name}
              onChange={handleChange}
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
              name="keys"
              value={song.name}
              onChange={handleChange}
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
                type="text"
                name="keys"
                value={song.name}
                onChange={handleChange}
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
                name="keys"
                value={song.name}
                onChange={handleChange}
              />
            </label>
          </div>
        </section>

        <div className="flex justify-center p-4">
          <button
            id="option"
            type="button"
            className="bg-nav-blue text-white rounded-lg p-1"
            onClick={changeFocus}
          >
            {focus ? 'Acordes' : 'Letra'}
          </button>
        </div>

        <section className="flex justify-center">
          {focus && (
            <div className="flex flex-col gap-2 justify-center w-[80vw]">
              {sections.map((sectionTitle: string, index) => (
                <div key={index}>
                  <input
                    className="text-2xl font-bold text-orange"
                  />
                  {/* <h3 className="text-2xl font-bold text-orange">
                    {`${sectionTitle}`}
                  </h3> */}
                  <div className="bg-light-gray rounded-lg p-2">
                    <p>Something</p>
                  </div>
                </div>
              ))}
              <button
                className="bg-light-gray rounded-lg p-2 text-gray-500"
                type="button"
                onClick={addSection}
              >
                Agregar Seccion +
              </button>
            </div>
          )}

          {!focus && (
            <div className="flex flex-col gap-2 justify-center w-[80vw]">
              <div>
                <h3 className="text-2xl font-bold text-orange">Intro</h3>
                <div className="bg-light-gray rounded-lg p-2">
                  <p>Something</p>
                </div>
              </div>
              <button
                className="bg-light-gray rounded-lg p-2 text-gray-500"
                type="button"
              >
                Agregar Seccion +
              </button>
            </div>
          )}
        </section>
      </form>
    </div>
  );
}
