import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import typography from '../../components/typography';

import Dove from './dove.svg';
import layout from '../../components/layout';
import { ContactBlock } from '../../models/contact';
import { Staff } from '../../models/staff';
import ContactSelect from './contactSelect';
import ReactSelect from 'react-select';
import Input from './input';
import TextArea from './textArea';
import BlockArrow from '../../svgs/blockArrow.svg';
import SubmitButton from './submitButton';

const styles = {
    root: css`
        ${layout.container};
        margin-bottom: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,
    title: css`
        ${typography.title1};
        color: ${({ theme }) => theme.colors.blue.medium};
        opacity: 40%;
        font-size: 200px;
        width: 100%;

        white-space: nowrap;

        transform: translateX(-200px);
    `,
    content: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `,
    textColumn: css`
        ${layout.container};

        h2 {
            ${typography.title1};

            color: ${({ theme }) => theme.colors.blue.light};
            font-size: 60px;
            transform: translateY(-20px);
        }
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
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        & > * {
            margin-bottom: 20px;
        }
    `,
};

const ContactContainer: FC<ContactBlock> = ({ title, contacts }) => (
    <div css={styles.root}>
        <h1 css={styles.title}>{title}</h1>
        <div css={styles.content}>
            <div css={styles.textColumn}>
                <h2>How can we help?</h2>
            </div>
            <div css={styles.formColumn}>
                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <ContactSelect
                    options={contacts.map((s: Staff) => ({
                        ...s,
                        value: s.id,
                        label: `${s.firstName} ${s.lastName} - ${s.position}`,
                    }))}
                />
                <Input placeholder="Subject matter" />
                <TextArea placeholder="Message" />
                <SubmitButton />
            </div>
        </div>
        <Dove css={styles.imageBackground} />
    </div>
);

export default ContactContainer;
