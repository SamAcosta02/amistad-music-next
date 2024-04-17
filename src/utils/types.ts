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
