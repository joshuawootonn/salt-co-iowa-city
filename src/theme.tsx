export interface Theme {
  color: {
    yellow: string;
    green: string;
    orange: string;
    pink: string;
    blue: string;
    light: string;
    medium: string;
    dark: string;
    [key: string]: any;
  };
  elementSizes: ElementSizes;
  typographySizes: TypographySizes;
  deviceSizes: DeviceSize;
}

export const theme: Theme = {
  color: {
    yellow: '#ffff4c',
    green: '#ACECA1',
    orange: '#FBB02D',
    pink: '#fe65b7',
    blue: '#446DF6',
    purple: '#AB87FF',
    light: '#EFEFEF',
    medium: '#CFCFCF',
    dark: '#333333',
  },
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
  deviceSizes: {
    xs: 400,
    sm: 575,
    md: 1100,
    lg: 1920,
    xl: 2560
  }
};

export interface ThemeProp {
  theme: Theme;
}

interface DeviceSize {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export type ElementSizesUnion = 'na' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ElementSizes = {
  [key in ElementSizesUnion]: number;
};

export type TypographySizesUnion = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'a' | 'li';
export type TypographySizes = {
  [key in TypographySizesUnion]: number;
};
