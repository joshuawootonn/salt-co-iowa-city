import { FluidObject } from 'gatsby-image';

export interface Image {
    fluid: FluidObject;
}

export const imageRawTransform = (raw: any) => ({
    fluid: { src: raw.url },
});
