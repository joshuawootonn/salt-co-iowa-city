import {
    CSSProp,
    DefaultTheme,
    FlattenSimpleInterpolation,
} from 'styled-components';
import 'styled-components';
import { Attributes, ClassAttributes } from 'react';

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

declare global {
    namespace JSX {
        interface IntrinsicAttributes extends Attributes {
            css?: FlattenSimpleInterpolation;
        }

        interface IntrinsicClassAttributes<T> extends ClassAttributes<T> {
            css?: FlattenSimpleInterpolation;
        }
    }
}
