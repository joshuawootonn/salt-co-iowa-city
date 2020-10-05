import React, { FC } from 'react';
import { WelcomeBlock } from '../../services/welcome.services';
import { css } from 'styled-components';
import typography from '../../components/typography';
import WelcomeLink from './welcomeLink';
import ImageViewer from './imageViewer';
import Salt from '../../svgs/salt.svg';
import { primaryTheme } from '../../context/themeContext';
import LargeArrow from '../../svgs/largeArrow';
import { addAlpha } from '../../helpers/color';

const styles = {
    root: css`
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    //TODO: generalize
    content: css`
        margin: 0 auto;
        max-width: 1400px;

        display: flex;
        flex-direction: row;

        position: relative;
    `,

    title: css`
        ${typography.title1};
        margin-bottom: 57px;
        white-space: nowrap;
    `,
    textColumn: css`
        overflow: visible;
        width: 800px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        div:not(:last-child) {
            margin-bottom: 97px;
        }
    `,
    imageViewer: css`
        z-index: -1;
    `,
    imageBackground: css`
        position: absolute;
        height: 110%;
        width: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -2;
    `,
    largeArrow: css`
        position: absolute;
        bottom: 150px;
        right: 150px;
    `,
};

const WelcomeContainer: FC<{ block: WelcomeBlock }> = ({ block }) => (
    <div css={styles.root}>
        <div css={styles.content}>
            <div css={styles.textColumn}>
                <h1 css={styles.title}>{block.title}</h1>

                <WelcomeLink
                    text="We are college students who have been transformed by the truth of the gospel."
                    label="Who We Are"
                    href={'/who-we-are'}
                />
                <WelcomeLink
                    text="We meet every thursday night at 8PM at veritas church."
                    label="Get Connected"
                    href={'/how-to-connect'}
                />
            </div>

            <ImageViewer css={styles.imageViewer} images={block.images} />

            <Salt
                css={styles.imageBackground}
                color={addAlpha(primaryTheme.colors.purple.lightest, 0.05)}
            />
        </div>
        <LargeArrow css={styles.largeArrow} />
    </div>
);

export default WelcomeContainer;
