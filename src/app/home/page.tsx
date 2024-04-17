import React from 'react';
// eslint-disable-next-line camelcase
import { Playfair_Display } from 'next/font/google';
import Button from '@/components/button';
import ArtistFace from '@/components/home/artists';
import PopularGroups, { SundayList, WedList, FridayList } from '@/utils/mock';
import { GroupProps, SongPreview } from '@/utils/types';
import SongPreivew from '@/components/song';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="relative overflow-x-hidden flex flex-col items-center">

      <div className="bg-gradient-to-b from-nav-blue from-65% to-light-blue rounded-full w-[200vh] h-[200vh] relative -top-[165vh]" />

      <div className="absolute z-10 w-screen pt-12">
        <section className="flex flex-col justify-center items-center">
          <h1 className={playfairDisplay.className}><span className="italic text-3xl text-white">Somos Familia Amistad</span></h1>
          <p className="font-light pb-4 text-white">HECHOS PARA LA VIDA</p>
          <input className="bg-light-gray py-1 px-3 rounded-full mb-4 w-2/3 max-w-[760px]" type="text" placeholder="Canción o Artista" />
          <Button text="Buscar" href="#" />
        </section>

        <section className="pt-[15vh] flex flex-col items-center">
          <h1 className="text-xl text-black font-bold pb-2">Artistas populares</h1>
          <div className="flex flex-wrap justify-center gap-2">
            {PopularGroups.map((group:GroupProps) => (
              <ArtistFace
                key={group.name}
                name={group.name}
                href={group.href}
                src={group.src}
              />
            ))}
          </div>
        </section>

        <section className="pt-[5vh] flex flex-col items-center">
          <h1 className="text-xl text-black font-bold pb-2">Este Domingo</h1>
          <div className="md:grid md:grid-cols-2 md:gap-4 2xl:max-w-[60vw]">
            {SundayList.map((song:SongPreview) => (
              <div key={song.id} className="py-2 md:p-0">
                <SongPreivew
                  id={song.id}
                  name={song.name}
                  keys={song.keys}
                  bpm={0}
                  signature={song.signature}
                  src={song.src}
                  author={song.author}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="pt-[5vh] flex flex-col items-center">
          <h1 className="text-xl text-black font-bold pb-2">Este Miércoles</h1>
          <div className="md:grid md:grid-cols-2 md:gap-4 2xl:max-w-[60vw]">
            {WedList.map((song:SongPreview) => (
              <div key={song.id} className="py-2">
                <SongPreivew
                  id={song.id}
                  name={song.name}
                  keys={song.keys}
                  bpm={0}
                  signature={song.signature}
                  src={song.src}
                  author={song.author}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="pt-[5vh] flex flex-col items-center">
          <h1 className="text-xl text-black font-bold pb-2">Este Viernes</h1>
          <div className="md:grid md:grid-cols-2 md:gap-4 2xl:max-w-[60vw]">
            {FridayList.map((song:SongPreview) => (
              <div key={song.id} className="py-2">
                <SongPreivew
                  id={song.id}
                  name={song.name}
                  keys={song.keys}
                  bpm={0}
                  signature={song.signature}
                  src={song.src}
                  author={song.author}
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
