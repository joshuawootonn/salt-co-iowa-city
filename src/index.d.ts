import {
    CSSProp,
    DefaultTheme,
    FlattenInterpolation,
    ThemeProps,
} from 'styled-components';
import 'styled-components';

declare module 'react' {
    interface DOMAttributes<T> {
        css?: InterpolationWithTheme<any>;
    }

    interface HTMLAttributes<T> extends DOMAttributes<T> {
        css?: CSSProp;
    }
}

export interface Color {
    lightest: string;
    light: string;
    medium: string;
    dark: string;
    darkest: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
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
}
