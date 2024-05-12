import React from 'react';
import { Inika } from 'next/font/google';

const inika = Inika({ weight: '700', subsets: ['latin'] });

const romanDictionary: {[key: string]: string} = {
  1: 'I',
  '-1': 'i',
  2: 'II',
  '-2': 'ii',
  3: 'III',
  '-3': 'iii',
  4: 'IV',
  '-4': 'iv',
  5: 'V',
  '-5': 'v',
  6: 'VI',
  '-6': 'vi',
  7: 'VII',
  '-7': 'vii',
};

export function getNoteFromNumberNoStyle(
  num: number,
  scale: string[],
): string {
  // If it is a minor chord
  if (num < 0) {
    // For negative numbers, get the corresponding minor note
    const note = scale[Math.abs(num) - 1];
    return `${note}m`;
  }

  // if it is a note with an added bass
  if (num >= 10 && num < 100) {
    // For numbers 10 and above, split into two notes
    const digits = Array.from(String(num), Number);
    const result = digits.map((digit) => scale[digit - 1]).join('/');
    return result;
  }

  // return symbols (independant of style)
  if (num === 8) {
    return '/';
  }
  if (num === 9) {
    return '-';
  }
  if (num === 0) {
    return '|';
  }
  if (num === 200) {
    return 'x';
  }
  if (num > 200) {
    return `${num - 200}`;
  }

  // For single digit numbers, get the corresponding note
  return `${scale[num - 1]}`;
}

export default function getNoteFromNumber(
  num: number,
  scale: string[],
  style: string,
): React.JSX.Element {
  // If it is a minor chord
  if (num < 0) {
    if (style === 'Grados') {
      return (
        <div className={`text-light-blue font-black ${inika.className}`}>
          {romanDictionary[num.toString()]}
        </div>
      );
    }
    if (style === 'Grados Primero') {
      const note = scale[Math.abs(num) - 1];
      return (
        <div className="flex flex-row items-end">
          <p className={`text-light-blue font-black ${inika.className}`}>{romanDictionary[num.toString()]}</p>
          <p className="text-orange font-black text-xs">{`${note}m`}</p>
        </div>
      );
    }
    if (style === 'Notas Primero') {
      const note = scale[Math.abs(num) - 1];
      return (
        <div className="flex flex-row items-end">
          <p className="text-light-blue font-black">{`${note}m`}</p>
          <p className={`text-orange font-black text-sm ${inika.className}`}>{romanDictionary[num.toString()]}</p>
        </div>
      );
    }
    // For negative numbers, get the corresponding minor note
    const note = scale[Math.abs(num) - 1];
    return <div className="text-light-blue font-black">{`${note}m`}</div>;
  }

  // if it is a note with an added bass
  if (num >= 10 && num < 100) {
    // For numbers 10 and above, split into two notes
    const digits = Array.from(String(num), Number);
    if (style === 'Grados') {
      const result = digits.map((digit) => romanDictionary[digit]).join('/');
      return <div className={`font-black ${inika.className} text-light-blue`}>{result}</div>;
    }
    if (style === 'Grados Primero') {
      const result = digits.map((digit) => romanDictionary[digit]).join('/');
      const result2 = digits.map((digit) => scale[digit - 1]).join('/');
      return (
        <div className="flex flex-row items-end">
          <p className={`text-light-blue font-black ${inika.className}`}>{result}</p>
          <p className="text-orange font-black text-xs">{result2}</p>
        </div>
      );
    }
    if (style === 'Notas Primero') {
      const result = digits.map((digit) => romanDictionary[digit]).join('/');
      const result2 = digits.map((digit) => scale[digit - 1]).join('/');
      return (
        <div className="flex flex-row items-end">
          <p className="text-light-blue font-black">{result2}</p>
          <p className={`text-orange font-black text-sm ${inika.className}`}>{result}</p>
        </div>
      );
    }
    const result = digits.map((digit) => scale[digit - 1]).join('/');
    return <div className="text-light-blue font-black">{result}</div>;
  }

  // return symbols (independant of style)
  if (num === 8) {
    return <div>/</div>;
  }
  if (num === 9) {
    return <div>-</div>;
  }
  if (num === 0) {
    return <div>|</div>;
  }
  if (num === 200) {
    return <div>x</div>;
  }
  if (num > 200) {
    return <div>{num - 200}</div>;
  }

  // For single digit numbers, get the corresponding note
  if (style === 'Grados') {
    return <div className={`text-light-blue font-black ${inika.className}`}>{romanDictionary[num]}</div>;
  }
  if (style === 'Grados Primero') {
    return (
      <div className="flex flex-row items-end">
        <p className={`text-light-blue font-black ${inika.className}`}>{romanDictionary[num]}</p>
        <p className="text-orange font-black text-xs">{scale[num - 1]}</p>
      </div>
    );
  }
  if (style === 'Notas Primero') {
    return (
      <div className="flex flex-row items-end">
        <p className="text-light-blue font-black">{scale[num - 1]}</p>
        <p className={`text-orange font-black text-sm ${inika.className}`}>{romanDictionary[num]}</p>
      </div>
    );
  }
  return <div className="text-light-blue font-black">{scale[num - 1]}</div>;
}

export function generateLyrics(line: string):React.JSX.Element {
  if (line[0] === '#') {
    return (
      <p className="text-xl text-orange font-bold pt-2">{line.substring(1)}</p>
    );
  }
  if (line[0] === '/') {
    return <p className="p-2"> </p>;
  }
  return <p className="text-lg">{line}</p>;
}
