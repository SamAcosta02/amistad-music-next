import { GroupProps, SongPreview } from './types';

const PopularGroups: GroupProps[] = [
  {
    src: '/barak.png',
    name: 'Grupo Barak',
    href: '#',
  },
  {
    src: '/witt.png',
    name: 'Marcos Witt',
    href: '#',
  },
  {
    src: '/miel.png',
    name: 'Miel San Marcos',
    href: '#',
  },
  {
    src: '/hill.png',
    name: 'Hillsong United',
    href: '#',
  },
];

export const SundayList: SongPreview[] = [
  {
    id: '1',
    name: 'Santo/Quien es el rey',
    keys: ['C'],
    bpm: 70,
    signature: '4/4',
    src: '/Albums/Santo.png',
    author: 'UPPERROOM',
  },
  {
    id: '2',
    name: 'Hermoso nombre/Santo',
    keys: ['C'],
    bpm: 70,
    signature: '4/4',
    src: '/Songs/Hermoso.png',
    author: 'Generacion 12',
  },
  {
    id: '3',
    name: 'Aqui te esperare + (2)',
    keys: ['C'],
    bpm: 70,
    signature: '4/4',
    src: '/Songs/Aqui.png',
    author: 'Intimo',
  },
];

export const WedList: SongPreview[] = [
  {
    id: '1',
    name: 'Se exalta a nuestro Dios',
    keys: ['C', 'D'],
    bpm: 70,
    signature: '4/4',
    src: '/exalt.png',
    author: 'Marcos Witt',
  },
  {
    id: '2',
    name: 'Quiero conocer a Jesus',
    keys: ['C'],
    bpm: 70,
    signature: '4/4',
    src: '/yeshua.png',
    author: 'Generacion 12',
  },
  {
    id: '3',
    name: 'Gracias',
    keys: ['C'],
    bpm: 70,
    signature: '4/4',
    src: '/wittA.png',
    author: 'Marcos Witt',
  },
];

export const FridayList: SongPreview[] = [
  {
    id: '1',
    name: 'Se exalta a nuestro Dios',
    keys: ['C', 'D'],
    bpm: 70,
    signature: '4/4',
    src: '/exalt.png',
    author: 'Marcos Witt',
  },
  {
    id: '2',
    name: 'Quiero conocer a Jesus',
    keys: ['C'],
    bpm: 70,
    signature: '4/4',
    src: '/yeshua.png',
    author: 'Generacion 12',
  },
  {
    id: '3',
    name: 'Gracias',
    keys: ['C'],
    bpm: 70,
    signature: '4/4',
    src: '/wittA.png',
    author: 'Marcos Witt',
  },
];

export const ofrenda: number[][] = [
  [101],
  [0, 1, 8, 8, 8, 0, 13, 8, 8, 8, 0, 4, 0, 9, 0],
  [102],
  [0, 1, 8, 8, 8, 0, 13, 8, 8, 8, 0, 4, 0, 9, 0],
  [103],
  [0, 1, 8, 8, 8, 0, -6, 8, 8, 8, 0, 4, 0, 9, 0],
  [104],
  [0, 1, 8, 8, 8, 0, 13, 8, 8, 8, 0, 4, 0, -2, 8, 8, 8, 0],
  [105],
  [0, 1, 8, 8, 8, 0, 13, 8, 8, 8, 0, 4, 0, 9, 0],
];

export const santo: number[][] = [
  [101],
  [0, 1, 0, 8, 8, 2, 8, 0, 4, 0, 9, 0],
  [102],
  [0, 1, 0, 8, 8, 2, 8, 0, 4, 0, 9, 0, 200, 201, 201],
  [103],
  [0, 4, 0, 5, 8, 9, 6, 8, 8, 0],
  [0, 4, 0, 5, 8, 9, 1, 8, 8, 0],
  [104],
  [0, 1, 0],
  [106],
  [0, 4, 0, 5, 8, 9, 6, 8, 8, 0],
  [107],
  [0, 1, 0, -7, 8, 9, 46, 8, 8, 0],
];

export const hermoso: number[][] = [
  [101],
  [0, 1, 0],
  [102],
  [0, 1, 0, 9, 0, 4, 8, 6, 8, 0, 5, 0],
  [0, 6, 8, 8, 7, 0, 1, 0, 4, 8, 6, 8, 0, 5, 0],
  [104],
  [0, 1, 0, 5, 0, 6, 8, 5, 8, 0, 4, 0],
  [0, 3, 0, 5, 0, 6, 8, 5, 8, 0, 4, 0],
  [106],
  [0, 4, 0, 5, 0, 6, 0, 3, 0],
  [0, 4, 0, 5, 0, 6, 0, 5, 0],
  [107],
  [0, 1, 0, 200, 201, 201, 201, 201, 201],
  [0, 1, 8, 6, 8, 0, 5, 0, 9, 0, 4, 0, 200, 201, 201, 201, 201],
];

export const aqui: number[][] = [
  [107],
  [0, 2, 0, 7, 0, 3, 0, 4, 0],
  [107],
  [0, 2, 8, 1, 8, 0, 7, 0, 3, 0, 4, 0],
  [107],
  [0, 2, 0, 3, 0, 4, 0, 5, 0],
  [107],
  [0, 1, 0, 9, 7, 0, 6, 0],
  [0, 2, 0, 3, 0, 4, 0, 9, 0],
];

export default PopularGroups;
