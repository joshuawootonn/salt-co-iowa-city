import { useMedia as useReactUseMedia } from 'react-use';
import { css } from 'styled-components/macro';

type Media = 'mobile' | 'tablet' | 'desktop' | 'xl';

const useScreenType = (): Media => {
    const isMobile = useReactUseMedia('(max-width: 800px)');
    const isTablet = useReactUseMedia(
        '(min-width: 801px) and (max-width: 1200px)'
    );
    const isDesktop = useReactUseMedia(
        '(min-width: 1201px) and (max-width: 1920px)'
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

export const mobile = (aaa) =>
    css`
        @media (min-width: 0px) and (max-width: 800px) {
            ${aaa};
        }
    `;

export const largeMobile = (aaa) =>
    css`
        @media (min-width: 0px) and (max-width: 1300px) {
            ${aaa};
        }
    `;
export const desktop = (aaa) =>
    css`
        @media (min-width: 800px) {
            ${aaa};
        }
    `;

export const queryShit = (aaa: any) =>
    css`
        @media (min-width: 1921px) {
            ${aaa.xl};
        }
        @media (min-width: 1201px) {
            ${aaa.desktop};
        }
        @media (min-width: 801px) {
            ${aaa.tablet};
        }
        @media (min-width: 0px) and (max-width: 800px) {
            ${aaa.mobile};
        }
    `;
