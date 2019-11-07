import { Image } from '../utils/types';

export interface AboutQuery {
  allContentfulAbout: {
    nodes: AboutNode[];
  };
}

export interface AboutNode {
  emoji: string;
  title: string;
  gif: Image;
}

export type About = AboutNode;
