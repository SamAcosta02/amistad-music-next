'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { x: 0 },
    closed: { x: '100%' },
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-nav-blue p-4 sticky z-50 top-0 w-screen">
      <div className="flex items-center w-[] flex-shrink-0 text-white mr-6">
        <div className="flex flex-row items-center">
          <Link href="/home">
            <Image
              className="w-10 object-cover"
              src="/AmistadLogoAlone.png"
              alt="amistad logo"
              width={500}
              height={500}
            />
          </Link>
          <span className="font-semibold text-xl tracking-tight pl-2">Alabanza Cumbres</span>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-row lg:items-center lg:px-4 lg:gap-4 lg:text-md text-white">
        <p>Tutoriales</p>
        <p>Acerca</p>
      </div>
      <div className="block lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-teal-200 hover:text-white hover:border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
      </div>
      <motion.div
        className="w-64 fixed right-0 top-0 h-full bg-light-blue shadow z-50 lg:hidden"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ type: 'spring', stiffness: 250, damping: 30 }}
      >
        <div className="w-64 fixed right-0 top-0 h-full bg-light-blue shadow z-50">
          <div className="p-4 text-white">
            <div className="flex justify-end">
              <button type="button" onClick={() => setIsOpen(false)}>X</button>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                className="w-10 rounded-full"
                src="/propic.jpg"
                alt="User profile picture"
                width={500}
                height={500}
              />
              <div>
                <p className="font-bold">Hola, Samuel</p>
                <p className="text-xs">Bajista</p>
              </div>
            </div>
            <br />
            <ul>
              <li className="pb-1">Tutoriales</li>
              <li>Acerca</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
