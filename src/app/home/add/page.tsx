'use client';

/* eslint-disable react/no-array-index-key */

import React, { useEffect, useState } from 'react';
import MAJOR_KEYS, { MAJOR_SCALES } from '@/consts/consts';
import { HeaderDictionary } from '@/utils/types';
import getNoteFromNumber from '@/utils/helpers';
import Modal from '@/components/modal';

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
  const [preview, setPreview] = useState<boolean>(true);
  const [sections, setSections] = useState<string[]>(['Intro']);
  const [defKey, setDefKey] = useState<string[]>(MAJOR_SCALES.C);
  const [chords, setChords] = useState<number[][]>([[101], [0, 9, 0]]);
  const [numSec, setNumSec] = useState<number>(102);
  const [headers, setHeaders] = useState<HeaderDictionary>({ 101: ['Intro', 'Letra'] });
  const [open, setOpen] = useState<boolean>(false);

  const changeFocus = () => {
    setFocus(!focus);
  };

  const changePreview = () => {
    setPreview(!preview);
  };

  const addSection = () => {
    setSections([...sections, 'Intro']);
    setNumSec(numSec + 1);
    setChords([...chords, [numSec], [0, 9, 0]]);
    setHeaders({ ...headers, [numSec]: ['Another', 'More of other'] });
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
          <button
            id="prev"
            type="button"
            className="bg-orange text-white rounded-lg p-1"
            onClick={changePreview}
          >
            {preview ? 'Esconder vista previa' : 'Mostrar vista previa'}
          </button>
        </div>

        <section className="flex justify-center">
          {focus && (
            <div className="flex flex-col gap-2 justify-center w-[80vw]">
              {Object.entries(headers).map(([key, value]) => (
                <div key={key} className="flex flex-row justify-between">
                  <div className="flex flex-row gap-2 items-end lg:pt-2">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-orange">{value[0]}</h2>
                    <p className="lg:text-lg italic">{value[1]}</p>
                  </div>
                  <button
                    className="bg-light-gray rounded-lg p-1 text-gray-500"
                    type="button"
                    onClick={() => setOpen(true)}
                  >
                    Editar
                  </button>
                  <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                  >
                    <label htmlFor="edit-title">
                      <p>Title:</p>
                      <input
                        id="edit"
                        placeholder={value[0]}
                      />
                    </label>
                    <label htmlFor="edit-sub">
                      <p>Subtitle:</p>
                      <input
                        id="edit"
                        placeholder={value[1]}
                      />
                    </label>
                  </Modal>
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

        <section className="flex justify-center w-[80vw]">
          {preview && (
            <div className="flex flex-col w-full pt-4">
              <h2 className="text-3xl font-bold text-orange">Vista Previa</h2>
              <div id="content" className="pb-8 w-full">
                <div className="bg-light-gray w-full rounded-lg p-2 max-w-[780px]">
                  {chords.map((row, i) => {
                    if (row.length === 1) {
                      return (
                        <div key={i} className="flex flex-row gap-2 items-end lg:pt-2">
                          <h2 className="text-2xl lg:text-3xl font-semibold text-orange">{headers[row[0]][0]}</h2>
                          <p className="lg:text-lg italic">{headers[row[0]][1]}</p>
                        </div>
                      );
                    }
                    return (
                      <div key={i} className="flex gap-1 font-bold">
                        {row.map((num, j) => (
                          <div className="text-lg" key={j}>{getNoteFromNumber(num, defKey, 'Notas')}</div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </section>
      </form>
    </div>
  );
}
