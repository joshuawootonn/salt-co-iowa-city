import { useMedia as useReactUseMedia } from 'react-use';
import { css } from 'styled-components/macro';

type Media = 'mobile' | 'tablet' | 'desktop' | 'xl';

const useScreenType = (): Media => {
    const isMobile = useReactUseMedia('(max-width: 670px)');
    const isTablet = useReactUseMedia(
        '(min-width: 671px) and (max-width: 1375px)'
    );
    const isDesktop = useReactUseMedia(
        '(min-width: 1376px) and (max-width: 1920px)'
    );

    if (isMobile) {
        return 'mobile';
    }
    if (isTablet) {
        return 'tablet';
    }
    if (isDesktop) {
        return 'desktop';
    }

    return 'xl';
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
        @media (min-width: 0px) and (max-width: 1375px) {
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
        @media (min-width: 1375px) {
            ${aaa.desktop};
        }
        @media (min-width: 1921px) {
            ${aaa.xl};
        }
    `;
