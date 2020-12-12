import { useMedia as useReactUseMedia } from 'react-use';
import { css } from 'styled-components/macro';

export type Media = 'mobile' | 'tablet' | 'desktop';

const useScreenType = (): Media => {
    const isMobile = useReactUseMedia('(max-width: 670px)');
    const isTablet = useReactUseMedia(
        '(min-width: 660px) and (max-width: 1145px)'
    );

    if (isMobile) {
        return 'mobile';
    }
    if (isTablet) {
        return 'tablet';
    }

    return 'desktop';
};

export default useScreenType;

export const mobile = (aaa: any) =>
    css`
        @media (min-width: 0px) and (max-width: 670px) {
            ${aaa};
        }
    `;

export const largeMobile = (aaa: any) =>
    css`
        @media (min-width: 0px) and (max-width: 1140px) {
            ${aaa};
        }
    `;
export const desktop = (aaa: any) =>
    css`
        @media (min-width: 670px) {
            ${aaa};
        }
    `;

export const queryShit = (aaa: any) =>
    css`
        @media (min-width: 0px) and (max-width: 670px) {
            ${aaa.mobile};
        }
        @media (min-width: 671px) {
            ${aaa.tablet};
        }
        @media (min-width: 1141px) {
            ${aaa.desktop};
        }
    `;
