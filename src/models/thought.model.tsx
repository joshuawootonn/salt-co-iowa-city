import { Description, Image } from 'utils/types';

export interface ThoughtQuery {
  allContentfulThought: {
    nodes: ThoughtNode[];
  };
}
export interface ThoughtNode {
  id: string;
  title: string;
  description: Description;
  images: Image[];
  date: string;
}
export interface Thought {
  id: string;
  title: string;
  description: string;
  images: Image[];
  date: string;
}
