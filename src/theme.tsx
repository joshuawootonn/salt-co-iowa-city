type Colors =
  | 'yellow'
  | 'green'
  | 'orange'
  | 'pink'
  | 'blue'
  | 'purple'
  | 'light'
  | 'medium'
  | 'dark';

export interface Theme {
  colors: {
    yellow: string;
    green: string;
    orange: string;
    pink: string;
    blue: string;
    purple: string;
    light: string;
    medium: string;
    dark: string;
  };
  space: number[];
  elementSizes: ElementSizes;
  typographySizes: TypographySizes;
}

export const theme: Theme = {
  colors: {
    yellow: '#ffff4c',
    green: '#ACECA1',
    orange: '#FBB02D',
    pink: '#fe65b7',
    blue: '#446DF6',
    purple: '#AB87FF',
    light: '#ffffff',
    medium: '#CFCFCF',
    dark: '#333333',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  elementSizes: {
    na: 0,
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
  },
  typographySizes: {
    h1: 100,
    h2: 80,
    h3: 35,
    h4: 20,
    p: 12,
    a: 12,
    li: 12,
  },
};

export interface ThemeProp {
  theme: Theme;
}

export const deviceSize = {
  xs: `(min-width: 575px)`,
  sm: `(min-width: 571px) and (max-width: 1100px)`,
  md: `(min-width: 1101px)`,
  lg: `(min-width: 1921px)`,
  xl: `(min-width: 2561px)`,
};

export type ElementSizesUnion = 'na' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ElementSizes = {
  [key in ElementSizesUnion]: number;
};

export type TypographySizesUnion = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'a' | 'li';
export type TypographySizes = {
  [key in TypographySizesUnion]: number;
};
