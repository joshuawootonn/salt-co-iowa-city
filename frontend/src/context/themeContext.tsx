import {
    ThemeContext as StyledThemeContext,
    ThemeProvider,
} from 'styled-components/macro';
import React, { FC, useContext } from 'react';

import '../context/index.css';

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
        pink: Color;
        yellow: Color;
        gray: Color;
        transparent: string;
        white: string;
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
        pink: {
            lightest: '#F4CDDD',
            light: '#F0BCD2',
            medium: '#E58AAE',
            dark: '#D33675',
            darkest: '#A72559',
        },
        gray: {
            lightest: '#EAEAEB',
            light: '#CBCBCD',
            medium: '#ACACAF',
            dark: '#79797C',
            darkest: '#39393A',
        },
        white: '#ffffff',
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
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeContext;
