import { css, CSSObject, FlattenSimpleInterpolation } from 'styled-components';

interface DeviceSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  [aaa: string]: string;
}

export const deviceSize: DeviceSizes = {
  xs: `(max-width: 575px)`,
  sm: `(min-width: 571px) and (max-width: 1100px)`,
  md: `(min-width: 1101px)`,
  lg: `(min-width: 1921px)`,
  xl: `(min-width: 2561px)`,
};

export interface MediaFunctions {
  xs: (args: FlattenSimpleInterpolation) => CSSObject;
  sm: (args: FlattenSimpleInterpolation) => CSSObject;
  md: (args: FlattenSimpleInterpolation) => CSSObject;
  lg: (args: FlattenSimpleInterpolation) => CSSObject;
  xl: (args: FlattenSimpleInterpolation) => CSSObject;
}

export default Object.keys(deviceSize).reduce(
  (acc: any, label: string): MediaFunctions => {
    acc[label] = (cssToBeInQuery: FlattenSimpleInterpolation) => {
      console.log(cssToBeInQuery);
      css`
        @media ${deviceSize[label]} {
          ${cssToBeInQuery};
        }
      `;
    };
    return acc;
  },
  {} as MediaFunctions
);
