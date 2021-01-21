import React, { FC } from 'react';
import typography from '../../components/typography';
import TextLink from '../../components/textLink';
import { mapReferenceToLink } from '../../helpers/link';
import { MinistryConnection } from '../../models/ministryConnection';
import { css } from 'styled-components/macro';
import { useAnimationProp } from '../../helpers/animation';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Root = styled(motion.div)`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.backgroundTransparent};
    width: 500px;
    max-width: 100%;
    align-self: flex-start;
    z-index: 10;
`;

const styles = {
    title: css`
        ${typography.title2};
        white-space: normal;
    `,
    toggleContainer: css`
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 10;
        transform: translateY(50%);

        text-decoration: none;
        background-color: transparent;
        border: none;
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
        transform: translateY(-2px);
    `,
};

const McDescriptionCard: FC<MinistryConnection> = (props) => {
    const animationProps = useAnimationProp(
        {
            initial: {
                opacity: 0,
            },
            variants: {
                entered: {
                    opacity: 1,
                },
            },

            transition: { type: 'spring', duration: 1, bounce: 0 },
        },
        {
            mobile: {
                initial: {
                    x: -40,
                    y: -40,
                },
                variants: {
                    entered: {
                        x: 0,
                        y: -20,
                    },
                },
            },
            tablet: {
                initial: {
                    x: 0,
                    y: `calc(-1 * calc(100% - 50px))`,
                },
                variants: {
                    entered: {
                        x: 30,
                        y: `calc(-1 * calc(100% - 30px))`,
                    },
                },
            },
            desktop: {
                initial: {
                    x: -80,
                    y: `calc(-1 * calc(100% - 60px))`,
                },
                variants: {
                    entered: {
                        x: -40,
                        y: `calc(-1 * calc(100% - 40px))`,
                    },
                },
            },
        }
    );

    return (
        <Root {...animationProps}>
            <div css={styles.textBlock1}>
                <p css={typography.card.text}>{props.description}</p>
            </div>
            <div css={styles.textBlock2}>
                <TextLink
                    type={'card'}
                    destinationType="internal"
                    to={mapReferenceToLink(props.link.reference)}
                >
                    {props.link.text}
                </TextLink>
            </div>
        </Root>
    );
};

export default McDescriptionCard;
