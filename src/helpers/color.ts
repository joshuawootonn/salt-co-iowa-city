import { parseToRgb, toColorString } from 'polished';

export const addAlpha = (color: string, a: number) => {
    const aa = parseToRgb(color, a);

    aa.alpha = a;

    return toColorString(aa);
};
