import React, { FC, useState } from 'react';
import { css } from 'styled-components/macro';
import ImageControl from '../../components/imageControl';
import typography from '../../components/typography';
import BackgroundImage from 'gatsby-background-image';
import { MinistryDescription } from '../../models/ministryDescription';
import Title from '../../components/title';
import { mapReferenceToLink } from '../../helpers/link';
import TextLink from '../../components/textLink';

const styles = {
    root: css`
        justify-self: center;
        position: relative;
    `,
    image: css`
        width: 1100px;
        height: 761px;
        background-repeat: no-repeat;
        background-position: center;

        background-size: cover;
    `,
    titleContainer: css`
        position: absolute;

        top: -50px;
        left: 50px;
        z-index: 10;

        h2 {
            color: ${({ theme }) => theme.colors.blue.medium};
        }
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

        transform: translateY(-2px);
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
            <BackgroundImage
                css={styles.image}
                fluid={props.images[currentImage].fluid}
            />
            <ImageControl
                current={currentImage}
                images={props.images}
                handleChange={setCurrentImage}
                css={styles.imageControl}
            />
            <div css={styles.titleContainer}>
                <Title variant="small">{props.title}</Title>
            </div>
            <div css={styles.textContainer}>
                <div css={styles.textBlock1}>
                    <p css={typography.card.text}>{props.description}</p>
                </div>
                <div css={styles.textBlock2}>
                    <TextLink
                        destinationType="internal"
                        to={mapReferenceToLink(props.link.reference)}
                    >
                        {props.link.text}
                    </TextLink>
                </div>
            </div>
        </div>
    );
};

export default MinistryDescriptionCard;
