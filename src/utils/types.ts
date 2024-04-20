export interface GroupProps {
  src: string;
  name: string;
  href: string;
}

export interface SongPreview {
  id: string;
  name: string;
  keys: string[];
  bpm: number;
  signature: string;
  src: string;
  author: string;
}

export interface HeaderDictionary {
  [key: number]: string[];
}

export interface Version {
  title: string;
  content: number[][];
  contentHeaders: HeaderDictionary;
  lyrics: string[][];
}

export interface Song {
  id: string;
  name: string;
  keys: string[];
  bpm: number;
  signature: string;
  src: string;
  reference: string;
  author: string;
  versions: Version[];
}
