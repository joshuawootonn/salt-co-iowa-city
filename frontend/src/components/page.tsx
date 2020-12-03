import React, { FC } from 'react';
import { useFooterBlock } from '../services/footer.services';
import ExtendedNavigationContainer from '../containers/extendedNavigation';
import ThemeContext, { primaryTheme } from '../context/themeContext';
import HeaderContainer from '../containers/header';
import styled, { css } from 'styled-components';
import { queryShit } from './useScreenType';

const Root = styled.div`
    ${queryShit({
        mobile: css`
            margin-top: 120px;
        `,
        tablet: css`
            margin-top: 120px;
        `,
    })};

    overflow-x: hidden;
`;

const Page: FC = (props) => {
    const footerBlock = useFooterBlock();
    return (
        <ThemeContext theme={primaryTheme}>
            <HeaderContainer {...footerBlock} />
            <Root>
                {props.children}
                <ExtendedNavigationContainer type={'footer'} {...footerBlock} />
            </Root>
        </ThemeContext>
    );
};

export default Page;
