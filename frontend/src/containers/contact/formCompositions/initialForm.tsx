import React, { FC } from 'react';
import { Field, Form } from 'formik';
import Input from '../formElements/input';
import SelectTo from '../formElements/selectTo';
import { Staff } from '../../../models/staff';
import TextArea from '../formElements/textArea';
import SubmitButton from '../formElements/submitButton';

import { css } from 'styled-components/macro';
import { ContactBlock } from '../../../models/contact';
import SubTitle from '../formElements/subTitle';
import Title from '../formElements/title';
import compositionStyles from './compositionStyles';
import layout from '../../../components/layout';
import Dove from '../formElements/dove.svg';
import {
    ConnectionGroup,
    ConnectionGroupBlock,
} from '../../../models/connectionGroup';
import { ContactOption } from '../contact';

const doveBase = css`
    position: absolute;
    height: 200px;
    width: auto;
    z-index: -2;
`;

const styles = {
    content: css`
        ${layout.container};
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
    `,
    formColumn: css`
        width: 50%;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
    `,

    subTitleContainer: css`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin-bottom: 100px;
    `,
    doves: [
        css`
            ${doveBase};
            right: -50px;
            top: 0;
            height: 170px;
        `,
        css`
            ${doveBase};
            top: 35%;
            left: -100px;
            transform: scale(-1, 1);
        `,
        css`
            ${doveBase};
            top: 70%;
            right: 50px;
            height: 230px;
        `,
    ],
};

const InitialForm: FC<{ title: string; contactOptions: ContactOption[] }> = ({
    title,
    contactOptions,
}) => {
    return (
        <div css={compositionStyles.root}>
            <Title>{title}</Title>
            <div css={styles.content}>
                <div css={styles.subTitleContainer}>
                    {styles.doves.map((doveStyle, i) => (
                        <Dove css={doveStyle} key={i} />
                    ))}
                    <SubTitle>How can we help?</SubTitle>
                </div>

                <Form css={styles.formColumn}>
                    <Field
                        component={SelectTo}
                        name="to"
                        placeholder="Who you want to contact"
                        options={contactOptions}
                    />
                    <Field name="name" component={Input} placeholder="Name" />
                    <Field name="email" component={Input} placeholder="Email" />

                    <Field
                        name="subject"
                        component={Input}
                        placeholder="Subject"
                    />
                    <Field
                        name="message"
                        component={TextArea}
                        placeholder="Message"
                    />

                    <SubmitButton />
                </Form>
            </div>
        </div>
    );
};

export default InitialForm;
