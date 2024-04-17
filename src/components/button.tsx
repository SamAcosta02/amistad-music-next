import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string,
  text: string,
}

export default function Button({ href, text }: ButtonProps) {
  return (
    <button type="button" className="bg-orange hover:bg-select-orange focus:ring focus:ring-light-blue text-white rounded-xl px-4 py-2">
      <Link href={href}>
        {text}
      </Link>
    </button>
  );
}
