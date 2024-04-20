'use client';

import React, { useState } from 'react';
// import { Song } from '@/utils/types';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-orange p-4">Agregar Canción</h1>
      <form>
        <section
          id="general-data"
          className="bg-light-gray p-4 rounded-lg flex flex-col gap-2 w-[80vw]"
        >
          <label htmlFor="Name" className="flex flex-row items-center gap-1">
            <p>Nombre:</p>
            <input
              className="p-1 pl-2 rounded-lg w-[90%]"
              placeholder="Te doy gloria"
              type="text"
              name="name"
              value={song.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="Name">
            Tono(s):
            <input
              className="p-1 pl-2 rounded-lg"
              placeholder="A,C"
              type="text"
              name="keys"
              value={song.name}
              onChange={handleChange}
            />
          </label>
          <div className="flex">
            <label htmlFor="Name">
              BPM:
              <input
                className="p-1 pl-2 rounded-lg w-1/2"
                placeholder="70"
                type="text"
                name="keys"
                value={song.name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="signature">
              Signature:
              <input
                className="p-1 pl-2 rounded-lg"
                placeholder="70"
                type="text"
                name="keys"
                value={song.name}
                onChange={handleChange}
              />
            </label>
          </div>
        </section>
      </form>
    </div>
  );
}
