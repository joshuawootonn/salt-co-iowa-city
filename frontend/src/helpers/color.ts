import { parseToRgb, toColorString } from 'polished';

export const addAlpha = (color: string, a: number) =>
    toColorString({ ...parseToRgb(color), alpha: a });
