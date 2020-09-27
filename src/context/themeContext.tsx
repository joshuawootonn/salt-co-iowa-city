import {
    createGlobalStyle,
    DefaultTheme,
    ThemeContext as StyledThemeContext,
    ThemeProvider,
} from 'styled-components';
import React, { FC, useContext } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #1D1D1B;
  }
  
  @font-face {
      font-family: Montserrat;
      src: url('/Montserrat-Regular.ttf') format('truetype')     
  }
  @font-face {
      font-family: MonumentExtended;
      src: url('/MonumentExtended-Regular.otf') format('opentype')     
  }
   
  
  h1 {
      font-family: "MonumentExtended" , Arial, sans-serif;
      font-weight: 400;
  }
`;

export interface Color {
    lightest: string;
    light: string;
    medium: string;
    dark: string;
    darkest: string;
}

export interface Theme {
    colors: {
        blue: Color;
        purple: Color;
        yellow: Color;
        gray: Color;
        transparent: string;
        background: string;
        backgroundTransparent: string;
    };
}

export const primaryTheme: Theme = {
    colors: {
        blue: {
            lightest: '#DFE4F6',
            light: '#CFD7F2',
            medium: '#AFBCE9',
            dark: '#7C90DB',
            darkest: '#4F6BCF',
        },
        yellow: {
            lightest: '#FFFEEB',
            light: '#FFFCD6',
            medium: '#FFF8AD',
            dark: '#FFF585',
            darkest: '#FFEE33',
        },
        purple: {
            lightest: '#EAD7E8',
            light: '#E3CAE1',
            medium: '#CEA1CB',
            dark: '#A959A2',
            darkest: '#783F73',
        },
        gray: {
            lightest: '#EAEAEB',
            light: '#CBCBCD',
            medium: '#ACACAF',
            dark: '#79797C',
            darkest: '#39393A',
        },
        background: '#1D1D1B',
        transparent: 'transparent',
        backgroundTransparent: 'rgba(29,29,27,.8)',
    },
};

export interface ThemeProp {
    theme: Theme;
}

export const useTheme = () => useContext(StyledThemeContext);

interface ThemeContextProps {
    theme: Theme;
}

const ThemeContext: FC<ThemeContextProps> = ({ children, theme }) => (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    </>
);

export default ThemeContext;
