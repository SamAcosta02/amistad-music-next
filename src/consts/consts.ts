const MAJOR_KEYS: string[] = [
  'C',
  'Db',
  'D',
  'Eb',
  'E',
  'F',
  'Gb',
  'G',
  'Ab',
  'A',
  'Bb',
  'B',
];

export const MAJOR_SCALES: { [key: string]: string[] } = {
  C: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
  Db: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
  D: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
  Eb: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
  E: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
  F: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
  Gb: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
  G: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
  Ab: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
  A: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
  Bb: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
  B: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
};

export const NOTE_STYLE: string[] = [
  'Notas',
  'Grados',
  'Grados Primero',
  'Notas Primero',
];

export const GENERAL_OPTIONS: string[][] = [
  ['Tutoriales', '/home/tutorial'],
  ['Acerca', '/home/about'],
];

export const LEADER_OPTIONS: string[][] = [
  ['Agregar Canción', '/home/add'],
  ['Crear Set: Domingo', '/home/set/sunday'],
  ['Crear Set: Miércoles', '/home/set/wednesday'],
  ['Crear Set: Viernes', '/home/set/friday'],
  ['Crear Set: Evento', '/home/set/event'],
];

export default MAJOR_KEYS;
