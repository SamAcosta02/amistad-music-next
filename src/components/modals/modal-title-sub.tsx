'use client';

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Song } from '@/utils/types';

interface ModalProps {
  open: boolean,
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  onAccept: React.Dispatch<React.SetStateAction<Song>>;
  song: Song;
  row: number[];
}

export default function ModalTituloSubtitulo({
  open,
  onClose,
  children,
  onAccept,
  song,
  row,
}: ModalProps) {
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeSubTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtitle(e.target.value);
  };

  const handleSubmitChange = () => {
    const updatedSong = { ...song };
    updatedSong.versions[0].contentHeaders[row[0]] = [title, subtitle];
    onAccept(updatedSong);
    // Create a dummy event
    onClose(undefined as unknown as React.MouseEvent<HTMLButtonElement>);
  };

  return (
    <div
      onClick={onClose as unknown as React.MouseEventHandler<HTMLDivElement>}
      className={
      `fixed inset-0 flex justify-center items-center
      transition-colors
      ${open ? 'visible bg-black/30' : 'invisible'}`
    }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          `bg-white rounded-xl shadow p-6 transition-all
          ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`
        }
      >
        <div className="flex justify-center pb-3 text-xl font-semibold text-orange">
          {children}
        </div>
        <div>
          <label
            htmlFor="Name"
            className="flex flex-row items-center gap-1 w-full"
          >
            <p>Titulo:</p>
            <input
              className="p-1 pl-2 rounded-lg w-[90%]"
              placeholder="Tengo Sed"
              type="text"
              name="name"
              value={title}
              onChange={handleChangeTitle}
            />
          </label>
          <label
            htmlFor="Name"
            className="flex flex-row items-center gap-1 w-full"
          >
            <p>Subtitulo:</p>
            <input
              className="p-1 pl-2 rounded-lg w-[90%]"
              placeholder="Tengo Sed"
              type="text"
              name="name"
              value={subtitle}
              onChange={handleChangeSubTitle}
            />
          </label>
        </div>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            type="button"
            className="bg-red-500 text-white rounded-lg p-1 hover:text-blue-700"
          >
            Cerrar
          </button>
          <button
            onClick={handleSubmitChange}
            type="button"
            className="bg-green-500 text-white rounded-lg p-1 hover:text-blue-700"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
