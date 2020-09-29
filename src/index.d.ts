import {
    CSSProp,
    DefaultTheme,
    FlattenInterpolation,
    ThemeProps,
} from 'styled-components';
import 'styled-components';

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
            white: string;
            transparent: string;
            background: string;
            backgroundTransparent: string;
        };
    }
}
declare module 'react' {
    interface DOMAttributes<T> {
        css?: InterpolationWithTheme<any>;
    }

    interface HTMLAttributes<T> extends DOMAttributes<T> {
        css?: CSSProp;
    }

    interface Attributes {
        css?: CSSProp;
    }
}
