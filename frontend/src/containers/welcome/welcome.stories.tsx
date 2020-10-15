import React, { FC, useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import WelcomeContainer from './welcome.container';
import { getWelcomeBlock } from '../../services/welcome.services';
import { css } from 'styled-components/macro';
import ThemeContext, { primaryTheme } from '../../context/themeContext';

const style = css`
    color: white;
    font-size: 50px;
    font-family: 'MonumentExtended', Arial, sans-serif;
`;

export const QueryStory: FC<{
    service: () => Promise<any>;
    component: any;
}> = ({ service, component: Component }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        service()
            .then((data) => {
                setData(data);
            })
            .catch((e) => setError(e))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p css={style}>...Loading</p>;
    if (error) return <p css={style}>{JSON.stringify(error)}</p>;

    return (
        <ThemeContext theme={primaryTheme}>
            <Component {...data} />
        </ThemeContext>
    );
};

storiesOf('Block', module).add('Announcements', () => {
    return (
        <QueryStory service={getWelcomeBlock} component={WelcomeContainer} />
    );
});
