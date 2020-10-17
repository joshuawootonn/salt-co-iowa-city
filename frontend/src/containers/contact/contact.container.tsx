import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import typography from '../../components/typography';

import Dove from './dove.svg';
import layout from '../../components/layout';
import { ContactBlock } from '../../models/contact';

const styles = {
    root: css`
        ${layout.container};
        margin-bottom: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    `,

    content: css`
        display: flex;
        flex-direction: row;
        position: relative;
    `,

    textColumn: css`
        width: 50%;
        margin-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `,
    imageBackground: css`
        position: absolute;
        height: 50vh;
        width: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -2;
    `,
    formColumn: css`
        width: 50%;

        & > div:nth-child(2) {
            transform: translateY(-2px);
        }

        & > div:nth-child(3) {
            transform: translateY(-4px);
        }
    `,
    row: css`
        display: flex;
        flex-direction: row;

        input:last-child {
            transform: translateX(-2px);
        }
    `,
    input: css`
        height: 50px;
        width: 100%;
        background: ${({ theme }) => theme.colors.backgroundTransparent};
        border: 2px solid ${({ theme }) => theme.colors.purple.lightest};

        &::placeholder {
            color: ${({ theme }) => theme.colors.purple.light};

            &::before {
                content: '   ';
            }
        }
    `,
    textArea: css`
        height: 150px;
        width: calc(100% - 2px);

        background: ${({ theme }) => theme.colors.backgroundTransparent};
        border: 2px solid ${({ theme }) => theme.colors.purple.lightest};
    `,
};

interface InputProps {
    placeholder: string;
}

const Input: FC<InputProps> = (props) => {
    return <input css={styles.input} {...props} />;
};

const TextArea: FC<InputProps> = (props) => {
    return <textarea css={styles.textArea} {...props} />;
};

const ContactContainer: FC<ContactBlock> = ({
    description,
    title,
    contacts,
}) => (
    <div css={styles.root}>
        <div css={styles.content}>
            <div css={styles.textColumn}>
                <h1 css={typography.title1}>{title}</h1>
                <p css={typography.bigText}>{description}</p>
            </div>
            <div css={styles.formColumn}>
                <div css={styles.row}>
                    <Input placeholder="Name" />
                    <Input placeholder="Email" />
                </div>
                <div css={styles.row}>
                    <Input placeholder="Who you want to contact" />
                    <Input placeholder="Subject matter" />
                </div>
                <div css={styles.row}>
                    <TextArea placeholder="Message" />
                </div>
            </div>
            <Dove css={styles.imageBackground} />
        </div>
    </div>
);

export default ContactContainer;
