import React from 'react';
import Image from 'next/image';
import Button from '@/components/button';

export default function Login() {
  return (
    <div className="flex flex-row h-screen w-screen">
      <section id="image" className="hidden lg:block lg:w-2/3 ">
        <div className="w-full h-full overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src="/AmistadMoto.jpg"
            alt="amistad logo"
            width={1079}
            height={1079}
          />
        </div>
      </section>
      <section id="login" className="h-full w-full lg:w-1/3">
        <div className="flex flex-col items-center h-full justify-between">
          <div className="bg-dark-blue w-full h-6" />
          <div className="flex flex-col w-full items-center">
            <div className="w-2/5 max-w-40">
              <Image
                className="rounded-full"
                src="/AmistadLogo.png"
                alt="amistad logo"
                width={1079}
                height={1079}
              />
            </div>
            <h1 className="font-bold text-xl py-4">Bienvenido, Músico</h1>
            <input className="bg-light-gray py-1 px-3 rounded-full mb-4 w-2/3 max-w-72" type="text" placeholder="Usuario" />
            <input className="bg-light-gray py-1 px-3 rounded-full mb-4 w-2/3 max-w-72" type="password" placeholder="Contraseña" />
            <Button href="/home" text="Iniciar Sesion" />
          </div>
          <div className="bg-light-blue w-full h-6" />
        </div>
      </section>
    </div>
  );
}
