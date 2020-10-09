import React, { FC, useEffect, useState } from 'react';

import WebFont from 'webfontloader';
import { css } from 'styled-components';

const FontLoader: FC = (props) => {
    const [state, setState] = useState<string | null>(null);
    useEffect(() => {
        WebFont.load({
            custom: {
                families: ['MonumentExtended', 'Montserrat'],
            },
            active: () => setState('active'),
        });
    }, []);

    console.log(state);

    return state === 'active' ? (
        props.children
    ) : (
        <p
            css={css`
                color: lawngreen;
            `}
        >
            Loading
        </p>
    );
};

export default FontLoader;
