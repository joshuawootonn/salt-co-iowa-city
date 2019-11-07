import { Image, Description } from 'utils/types';

export interface WorkQuery {
  allContentfulWork: {
    nodes: WorkNode[];
  };
}
export interface WorkNode {
  id: string;
  title: string;
  start: string;
  end: string;
  repository: string;
  link: string;
  description: Description;
  technologies: string[];
  images: Image[];
}

export interface Work {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
  repository: string;
  link: string;
  technologies: string[];
  images: Image[];
}
