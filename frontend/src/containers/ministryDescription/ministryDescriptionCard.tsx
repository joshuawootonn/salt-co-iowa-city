import React, { FC, useState } from 'react';
import { MinistryDescription } from '../../services/ministryDescription.service';
import { css } from 'styled-components/macro';
import ImageControl from '../../components/imageControl';
import typography from '../../components/typography';
import CardLink from '../../components/cardLink';

const styles = {
    root: css`
        justify-self: center;
        position: relative;
    `,
    image: (url: string) => css`
        width: 100%;
        height: 761px;
        background: url('${url}') no-repeat center;
        background-size: cover;
    `,
    textContainer: css`
        background-color: ${({ theme }) => theme.colors.backgroundTransparent};

        width: 500px;
        position: absolute;

        bottom: -50px;
        left: -130px;
        z-index: 10;
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
    imageControl: css`
        position: absolute;
        bottom: -50px;
        right: -130px;
        z-index: 10;
    `,
};

const MinistryDescriptionCard: FC<MinistryDescription> = (props) => {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div css={styles.root}>
            <div
                css={styles.image(props.images[currentImage].url)}
            ></div>
            <ImageControl
                current={currentImage}
                images={props.images}
                handleChange={setCurrentImage}
                css={styles.imageControl}
            />
            <div css={styles.textContainer}>
                <div css={styles.textBlock1}>
                    <h4 css={typography.card.title}>{props.title}</h4>
                    <p css={typography.card.text}>{props.description}</p>
                </div>
                <div css={styles.textBlock2}>
                    <CardLink href={'/contact'}>{props.link.text}</CardLink>
                </div>
            </div>
        </div>
    );
};

export default MinistryDescriptionCard;
