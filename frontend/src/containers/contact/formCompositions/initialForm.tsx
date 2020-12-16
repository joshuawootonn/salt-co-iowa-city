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
import { ContactOption } from '../contact';
import { queryShit } from '../../../components/useScreenType';

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
        ${queryShit({
            mobile: css`
                width: 100%;
                max-width: 500px;
            `,
            tablet: css`
                transform: translateY(-50px);
                width: 80%;
                max-width: 500px;
            `,
            desktop: css`
                width: 50%;
                max-width: 500px;
            `,
        })}

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
};

const InitialForm: FC<{ title: string; contactOptions: ContactOption[] }> = ({
    title,
    contactOptions,
}) => {
    return (
        <div css={compositionStyles.root}>
            <Title>{title}</Title>
            <div css={styles.content}>
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
                    {compositionStyles.doves.initial.map((doveStyle, i) => (
                        <Dove css={doveStyle} key={i} />
                    ))}
                </Form>
            </div>
        </div>
    );
};

export default InitialForm;
