import React, { useRef } from 'react';
import { css } from 'styled-components/macro';
import typography from '../../components/typography';
import CardLink from '../../components/cardLink';

const styles = {
    root: css`
        transform: translate(20px, -77px);
        overflow: hidden;
    `,

    textBlock1: css`
        background-color: ${({ theme }) => theme.colors.backgroundTransparent};
        border: 2px solid ${({ theme }) => theme.colors.purple.light};
        display: flex;
        flex-direction: column;
        padding: 15px;
        h4 {
            margin-bottom: 6px;
        }
        transform: translateX(100%);
    `,
    textBlock2: css`
        background-color: ${({ theme }) => theme.colors.backgroundTransparent};
        border: 2px solid ${({ theme }) => theme.colors.purple.light};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px;

        transform: translateX(100%);
    `,
};

const StaffText = (props) => {
    const ref = useRef(Math.floor(Math.random() * 1000));
    const root = `staff-card-root-${ref.current}`;
    const text = `staff-card-text-${ref.current}`;

    return (
        <div data-animation={root} css={styles.root}>
            <div
                css={styles.textBlock1}
                data-animation={props.contentAnimateTag}
            >
                <h4 css={typography.card.title}>
                    {props.firstName} {props.lastName}
                </h4>
                <p css={typography.card.text}>{props.about}</p>
            </div>
            <div
                css={styles.textBlock2}
                data-animation={props.contentAnimateTag}
            >
                <span css={typography.card.smallText}>{props.position}</span>
                <CardLink href={'/contact'}>
                    {props.connectionLinkText}
                </CardLink>
            </div>
        </div>
    );
};

export default StaffText;
