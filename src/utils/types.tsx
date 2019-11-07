import { FluidObject } from 'gatsby-image';
export interface Fluid extends FluidObject {
  tracedSVG: string;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
  sizes: string;
}

export interface Location {
  lon: number;
  lat: number;
}

export interface Description {
  description: string;
}

export interface Image {
  id: string;
  title: string;
  description: string;
  fluid: Fluid;
}
