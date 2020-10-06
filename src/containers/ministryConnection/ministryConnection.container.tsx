import React, { FC, useState } from 'react';
import { css } from 'styled-components';
import layout from '../../components/layout';
import typography from '../../components/typography';
import { MinistryConnectionBlock } from '../../services/ministryConnection.service';
import ImageControl from '../../components/imageControl';
import CardLink from '../../components/cardLink';

import World from '../../svgs/world.svg';
import Flag from '../../svgs/flag.svg';

export type MinistryConnectionBackgroundImage = 'World' | 'Flag';

const styles = {
    root: css`
        ${layout.container};
        margin-bottom: 750px;
    `,
    title: css`
        ${typography.title2};
        margin-bottom: 40px;
    `,

    content: css`
        justify-self: center;
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 500px;
    `,
    imageContainer: css`
        position: relative;
        width: 500px;
    `,

    image: (url: string) => css`
        position: absolute;
        right: 0;
        width: 670px;
        height: 450px;
        background: url('${url}') no-repeat center;
        background-size: cover;
    `,
    imageControl: css`
        position: absolute;
        bottom: 50px;
        right: -100px;
        z-index: 10;
    `,
    textContainer: css`
        background-color: ${({ theme }) => theme.colors.backgroundTransparent};
        width: 500px;
    `,

    textBlock1: css`
        border: 2px solid ${({ theme }) => theme.colors.purple.light};
        display: flex;
        flex-direction: column;
        padding: 15px;
        h4 {
            margin-bottom: 6px;
        }
    `,
    textBlock2: css`
        border: 2px solid ${({ theme }) => theme.colors.purple.light};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
    `,
    backgroundImage: css`
        position: absolute;
        height: auto;
        width: 80%;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -2;
    `,
};

const MinistryConnectionContainer: FC<MinistryConnectionBlock> = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    return (
        <>
            {props.ministryConnections.map((connection, i) => (
                <div css={styles.root} key={i}>
                    {
                        // TODO: this sucks, but I can't track the error at all :/
                        // Make it a dict of components if you can
                        connection.backgroundImage === 'Flag' ? (
                            <Flag css={styles.backgroundImage} />
                        ) : (
                            <World css={styles.backgroundImage} />
                        )
                    }

                    <h2 css={styles.title}>
                        {connection.acronym || connection.title}
                    </h2>
                    <div css={styles.content}>
                        <div css={styles.imageContainer}>
                            <div
                                css={styles.image(
                                    connection.images[currentImage].url
                                )}
                            >
                                <ImageControl
                                    current={currentImage}
                                    images={connection.images}
                                    handleChange={setCurrentImage}
                                    css={styles.imageControl}
                                />
                            </div>
                        </div>

                        <div css={styles.textContainer}>
                            <div css={styles.textBlock1}>
                                <h4 css={typography.card.title}>
                                    {connection.title}
                                </h4>
                                <p css={typography.card.text}>
                                    {connection.description}
                                </p>
                            </div>
                            <div css={styles.textBlock2}>
                                <CardLink href={'/contact'}>
                                    {connection.link.text}
                                </CardLink>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MinistryConnectionContainer;
