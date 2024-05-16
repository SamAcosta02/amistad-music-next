/* eslint-disable react/no-array-index-key */

'use client';

import React, { useState, useEffect } from 'react';
import { Song } from '@/utils/types';
import getNoteFromNumber, { getNoteFromNumberNoStyle } from '@/utils/helpers';
import MAJOR_KEYS, { MAJOR_SCALES } from '@/consts/consts';
import ModalTituloSubtitulo from '@/components/modals/modal-title-sub';

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
  const [section, setSection] = useState<number>(101);
  const [openTitle, setOpenTitle] = useState<boolean[]>([false]);
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

  const addSection = () => {
    song.versions[0].contentHeaders[section + 1] = ['Seccion', 'Letra de la seccion'];
    song.versions[0].content.push([section + 1], [0, 9, 0]);
    setSection(section + 1);
    setOpenTitle([...openTitle, false]);
  };

  const handleIndChange = (i:number, j:number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSongContent = [...song.versions[0].content];
    newSongContent[i][j] = parseInt(e.target.value, 10);
    setSong({ ...song, versions: [{ ...song.versions[0], content: newSongContent }] });
  };

  const addNote = (index:number) => {
    const newSong = { ...song };
    const end = newSong.versions[0].content[index].length - 1;
    newSong.versions[0].content[index][end] = 9;
    newSong.versions[0].content[index].push(0);
    setSong(newSong);
  };

  useEffect(() => {
    console.log(song);
  }, [song]);

  const silly = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="flex flex-col items-center pt-4">
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

        <section className="border p-2 mt-4 rounded-lg">
          {song.versions[0].content.map((row, i) => {
            if (row.length === 1) {
              return (
                <div key={i} className="flex flex-row gap-2 justify-between items-center p-2 bg-gray-100">
                  <div className="flex flex-row gap-2 items-center">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-orange">
                      {song.versions[0].contentHeaders[row[0]][0]}
                    </h2>
                    <ModalTituloSubtitulo
                      open={openTitle[i]}
                      onClose={() => {
                        const newOpenTitle = [...openTitle];
                        newOpenTitle[i] = false;
                        setOpenTitle(newOpenTitle);
                      }}
                      onAccept={setSong}
                      song={song}
                      row={row}
                    >
                      <h1>Editar Titulo/Subtitulo</h1>
                    </ModalTituloSubtitulo>
                    <p className="lg:text-lg italic">
                      {song.versions[0].contentHeaders[row[0]][1]}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const newOpenTitle = [...openTitle];
                      newOpenTitle[i] = true;
                      setOpenTitle(newOpenTitle);
                    }}
                    className="bg-orange text-white p-1 rounded-lg"
                    type="button"
                  >
                    Editar
                  </button>
                </div>
              );
            }
            return (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex gap-1 font-bold justify-center items-center">
                  {row.map((num, j) => {
                    if (num !== 0) {
                      return (
                        <div className="text-sm pt-1" key={j}>
                          <label htmlFor={`${j}sec`}>
                            <select
                              className="bg-light-gray p-[5px] rounded-lg w-13 text-center"
                              value={num}
                              onChange={handleIndChange(i, j)}
                              data-i={i}
                              data-j={j}
                              disabled={num === 0}
                            >
                              {silly.map((symbol) => (
                                <option value={symbol} key={symbol} disabled={symbol === 0}>
                                  {getNoteFromNumberNoStyle(symbol, MAJOR_SCALES[song.keys[0]])}
                                </option>
                              ))}
                            </select>
                            <button
                              className="bg-red-500 text-white p-1 rounded-lg"
                              type="button"
                            >
                              -
                            </button>
                          </label>
                        </div>
                      );
                    }
                    return <div className="text-sm" key={j}> | </div>;
                  })}
                </div>
                <div className="flex flex-col gap-2 justify-center">
                  <button
                    className="bg-gray-100 text-black p-1 rounded-lg"
                    type="button"
                    onClick={() => addNote(i)}
                  >
                    Agregar Nota/Simbolo
                  </button>
                  <button
                    className="bg-gray-200 text-black p-1 rounded-lg"
                    type="button"
                  >
                    Agregar Espacio
                  </button>
                  <button
                    className="bg-gray-300 text-black p-1 rounded-lg mb-4"
                    type="button"
                  >
                    Agregar Compas
                  </button>
                </div>
              </div>
            );
          })}
        </section>
        <button
          className="bg-orange text-white p-1 rounded-lg w-full mt-4"
          type="button"
          onClick={addSection}
        >
          Agregar Seccion +
        </button>
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
