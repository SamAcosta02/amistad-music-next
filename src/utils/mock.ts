import {
  GroupProps,
  SongPreview,
  Song,
} from './types';

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

export const SundayList: SongPreview[] = [
  {
    id: '1',
    name: 'Santo/Quien es el rey',
    keys: ['B'],
    bpm: 70,
    signature: '4/4',
    src: '/Albums/Santo.png',
    author: 'Upperroom',
  },
  {
    id: '2',
    name: 'Aqui te esperare + (2)',
    keys: ['Ab'],
    bpm: 70,
    signature: '4/4',
    src: '/Songs/Aqui.png',
    author: 'Intimo',
  },
  {
    id: '3',
    name: 'Santo',
    keys: ['C'],
    bpm: 70,
    signature: '4/4',
    src: '/Albums/Santo.jpg',
    author: 'Merari de la Torre',
  },
];

export const santoSong: Song = {
  id: 'santo',
  name: 'Santo/Quien es el Rey',
  keys: ['B'],
  bpm: 70,
  signature: '4/4',
  src: '/Albums/Santo.png',
  reference: 'https://www.youtube.com/embed/xOIdzAuizyw?si=IdSEH7eBFJU8umJ_',
  author: 'Upperroom',
  versions: [
    {
      title: 'Original',
      content: [
        [101],
        [0, 1, 0, 8, 8, 2, 8, 0, 4, 0, 9, 0],
        [102],
        [0, 1, 0, 8, 8, 2, 8, 0, 4, 0, 9, 0, 200, 202],
        [103],
        [0, 4, 0, 5, 8, 9, 6, 8, 8, 0],
        [0, 4, 0, 5, 8, 9, 1, 8, 8, 0],
        [104],
        [0, 1, 0],
        [105],
        [0, 4, 0, 5, 8, 9, 6, 8, 8, 0],
        [106],
        [0, 1, 0, -7, 8, 9, 46, 8, 8, 0],
      ],
      contentHeaders: {
        101: ['Intro', ''],
        102: ['Verso', 'Venimos ante ti Jesus'],
        103: ['Pre-Coro', 'Nos unimos al cielo'],
        104: ['Coro', 'Cantando Santo'],
        105: ['Puente', 'Tu nombre anunciaremos'],
        106: ['Quien es el Rey', ''],
      },
      lyrics: [
        ['#Intro'],
        ['Solo Tu eres Santo',
          'Y solo Tú eres digno',
          'Oh-oh-oh'],
        ['#Verso'],
        ['Venimos ante Ti Jesus',
          'en adoracion',
          'Nacimos para amarte a ti',
          'Por la eternidad (cantemos otra vez, venimos)'],
        ['/'],
        ['Venimos ante ti Jesús',
          'En adoración (nacimos)',
          'Nacimos para amarte a ti',
          'Por la eternidad (¡eh!)'],
        ['#Pre-coro'],
        ['Y nos unimos al cielo en un canto de amor',
          'Exaltando por siempre al que nos revivió',
          'Nos unimos al cielo en un canto de amor',
          'Exaltando por siempre al que nos revivió'],
        ['#Coro x2'],
        ['Cantando: Santo, Santo',
          'Tú eres digno, digno'],
        ['#Verso 2'],
        ['Generaciones cantarán',
          'De tu verdad',
          'Deseamos de tu trono aquí',
          'Ven a reinar (ven a reinar, oh)'],
        ['#Pre-coro <-'],
        ['#Coro x4 <-'],
        ['#Puente'],
        ['Tu nombre anunciaremos',
          'Y lo declararemos',
          'Naciones oirán',
          'Y lo declararán',
          'Tú eres el más bello',
          'Y nuestro Dios eterno',
          'Todos te adorarán',
          'Por siempre reinarás'],
        ['#'],
        ['Tu nombre cantaremos',
          'Y lo anunciaremos',
          'Naciones oirán',
          'Y lo declararán',
          'Tú eres el más bello',
          'Y nuestro Dios eterno',
          'Todos te adorarán',
          'Por siempre reinará'],
        ['#Coro x2'],
        ['#Puente'],
        ['#Extra'],
        ['Quien es el Rey?',
          'Es Jesus'],
      ],
    },
    {
      title: 'Some Other',
      content: [
        [101],
        [0, 1, 0],
        [102],
        [0, 1, 0, 8, 8, 2, 8, 0, 4, 0, 9, 0, 200, 202],
        [103],
        [0, 4, 0, 5, 8, 9, 6, 8, 8, 0],
        [0, 4, 0, 5, 8, 9, 1, 8, 8, 0],
        [104],
        [0, 1, 0],
        [105],
        [0, 4, 0, 5, 8, 9, 6, 8, 8, 0],
        [106],
        [0, 1, 0, -7, 8, 9, 46, 8, 8, 0],
      ],
      contentHeaders: {
        101: ['Intro', ''],
        102: ['Verso', 'Estamos ante ti Jesus'],
        103: ['Pre-Coro', 'Nos reunimos al cielo'],
        104: ['Coro', 'Cantamos todos Santo'],
        105: ['Puente', 'Tu nombre vamos a anunciar'],
        106: ['Quien es el Rey', ''],
      },
      lyrics: [
        ['#Intro'],
        ['Solo Tu eres Santo',
          'Y solo Tú eres digno',
          'Oh-oh-oh',
          'ESTA ES OTRA VERSION'],
        ['#Verso'],
        ['Venimos ante Ti Jesus',
          'en adoracion',
          'Nacimos para amarte a ti',
          'Por la eternidad (cantemos otra vez, venimos)'],
        ['/'],
        ['Venimos ante ti Jesús',
          'En adoración (nacimos)',
          'Nacimos para amarte a ti',
          'Por la eternidad (¡eh!)'],
        ['#Pre-coro'],
        ['Y nos unimos al cielo en un canto de amor',
          'Exaltando por siempre al que nos revivió',
          'Nos unimos al cielo en un canto de amor',
          'Exaltando por siempre al que nos revivió'],
        ['#Coro x2'],
        ['Cantando: Santo, Santo',
          'Tú eres digno, digno'],
        ['#Verso 2'],
        ['Generaciones cantarán',
          'De tu verdad',
          'Deseamos de tu trono aquí',
          'Ven a reinar (ven a reinar, oh)'],
        ['#Pre-coro <-'],
        ['#Coro x4 <-'],
        ['#Puente'],
        ['Tu nombre anunciaremos',
          'Y lo declararemos',
          'Naciones oirán',
          'Y lo declararán',
          'Tú eres el más bello',
          'Y nuestro Dios eterno',
          'Todos te adorarán',
          'Por siempre reinarás'],
        ['#'],
        ['Tu nombre cantaremos',
          'Y lo anunciaremos',
          'Naciones oirán',
          'Y lo declararán',
          'Tú eres el más bello',
          'Y nuestro Dios eterno',
          'Todos te adorarán',
          'Por siempre reinará'],
        ['#Coro x2'],
        ['#Puente'],
        ['#Extra'],
        ['Quien es el Rey?',
          'Es Jesus'],
      ],
    },
  ],
};

export const aquiSong: Song = {
  id: 'aqui',
  name: 'Aqui te esperare',
  keys: ['Ab'],
  bpm: 70,
  signature: '4/4',
  src: '/Songs/Aqui.png',
  reference: 'https://www.youtube.com/embed/J48jMzJaMhg?si=gTINbXQBfKW7l0gq',
  author: 'Intimo',
  versions: [
    {
      title: 'Original',
      content: [
        [101],
        [0, 2, 0, 7, 0, 3, 0, 4, 0],
        [102],
        [0, 2, 8, 1, 8, 0, 7, 0, 3, 0, 4, 0],
        [103],
        [0, 2, 0, 3, 0, 4, 0, 5, 0],
        [104],
        [0, 1, 0, 9, 7, 0, 6, 0],
        [0, 2, 0, 3, 0, 4, 0, 9, 0],
      ],
      contentHeaders: {
        101: ['Parte 1', 'Estamos Aqui'],
        102: ['Parte 2', 'Jesus/Tu eres la imagen'],
        103: ['Parte 3', 'Santo Santo'],
        104: ['Parte 4', 'Al que esta sentado en el trono'],
      },
      lyrics: [
        ['#Intro'],
        ['Solo Tu eres Santo',
          'Y solo Tú eres digno',
          'Oh-oh-oh'],
        ['#Verso'],
        ['Venimos ante Ti Jesus',
          'en adoracion',
          'Nacimos para amarte a ti',
          'Por la eternidad (cantemos otra vez, venimos)'],
        ['/'],
        ['Venimos ante ti Jesús',
          'En adoración (nacimos)',
          'Nacimos para amarte a ti',
          'Por la eternidad (¡eh!)'],
        ['#Pre-coro'],
        ['Y nos unimos al cielo en un canto de amor',
          'Exaltando por siempre al que nos revivió',
          'Nos unimos al cielo en un canto de amor',
          'Exaltando por siempre al que nos revivió'],
        ['#Coro x2'],
        ['Cantando: Santo, Santo',
          'Tú eres digno, digno'],
        ['#Verso 2'],
        ['Generaciones cantarán',
          'De tu verdad',
          'Deseamos de tu trono aquí',
          'Ven a reinar (ven a reinar, oh)'],
        ['#Pre-coro <-'],
        ['#Coro x4 <-'],
        ['#Puente'],
        ['Tu nombre anunciaremos',
          'Y lo declararemos',
          'Naciones oirán',
          'Y lo declararán',
          'Tú eres el más bello',
          'Y nuestro Dios eterno',
          'Todos te adorarán',
          'Por siempre reinarás'],
        ['#'],
        ['Tu nombre cantaremos',
          'Y lo anunciaremos',
          'Naciones oirán',
          'Y lo declararán',
          'Tú eres el más bello',
          'Y nuestro Dios eterno',
          'Todos te adorarán',
          'Por siempre reinará'],
        ['#Coro x2'],
        ['#Puente'],
        ['#Extra'],
        ['Quien es el Rey?',
          'Es Jesus'],
      ],
    },
  ],
};

export const merariSong: Song = {
  id: 'aqui',
  name: 'Santo',
  keys: ['C'],
  bpm: 70,
  signature: '4/4',
  src: '/Albums/Santo.jpg',
  reference: 'https://www.youtube.com/embed/ghvos5rkbLg?si=55RZiKG385gsk6eo',
  author: 'Merari de la Torre',
  versions: [
    {
      title: 'Original',
      content: [
        [101],
        [0, 1, 0, 4, 0],
        [102],
        [0, 1, 0, 5, 0, 2, 0, 4, 0],
        [103],
        [0, 5, 0, 6, 0, 4, 0, 9, 0],
        [104],
        [0, 1, 0, 4, 0, 6, 0, 5, 0],
      ],
      contentHeaders: {
        101: ['Intro', ''],
        102: ['Verso', 'No fue facil / Por tu gracia'],
        103: ['Puente/I', 'Presente Tengo/En cada paso'],
        104: ['Coro', 'Santo Espiritu Santo'],
      },
      lyrics: [
        ['#Intro'],
        ['Solo Tu eres Santo',
          'Y solo Tú eres digno',
          'Oh-oh-oh'],
        ['#Verso'],
        ['Venimos ante Ti Jesus',
          'en adoracion',
          'Nacimos para amarte a ti',
          'Por la eternidad (cantemos otra vez, venimos)'],
        ['/'],
        ['Venimos ante ti Jesús',
          'En adoración (nacimos)',
          'Nacimos para amarte a ti',
          'Por la eternidad (¡eh!)'],
        ['#Pre-coro'],
        ['Y nos unimos al cielo en un canto de amor',
          'Exaltando por siempre al que nos revivió',
          'Nos unimos al cielo en un canto de amor',
          'Exaltando por siempre al que nos revivió'],
        ['#Coro x2'],
        ['Cantando: Santo, Santo',
          'Tú eres digno, digno'],
        ['#Verso 2'],
        ['Generaciones cantarán',
          'De tu verdad',
          'Deseamos de tu trono aquí',
          'Ven a reinar (ven a reinar, oh)'],
        ['#Pre-coro <-'],
        ['#Coro x4 <-'],
        ['#Puente'],
        ['Tu nombre anunciaremos',
          'Y lo declararemos',
          'Naciones oirán',
          'Y lo declararán',
          'Tú eres el más bello',
          'Y nuestro Dios eterno',
          'Todos te adorarán',
          'Por siempre reinarás'],
        ['#'],
        ['Tu nombre cantaremos',
          'Y lo anunciaremos',
          'Naciones oirán',
          'Y lo declararán',
          'Tú eres el más bello',
          'Y nuestro Dios eterno',
          'Todos te adorarán',
          'Por siempre reinará'],
        ['#Coro x2'],
        ['#Puente'],
        ['#Extra'],
        ['Quien es el Rey?',
          'Es Jesus'],
      ],
    },
  ],
};

export default PopularGroups;
