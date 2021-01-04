import React, { FC } from 'react';
import { Field, Form } from 'formik';
import Input from '../formElements/input';
import SelectTo from '../formElements/selectTo';
import TextArea from '../formElements/textArea';
import SubmitButton from '../formElements/submitButton';
import { css } from 'styled-components/macro';
import BigTitle from '../formElements/bigTitle';
import layout from '../../../components/layout';
import { ContactOption } from '../contact';
import { queryShit } from '../../../components/useScreenType';
import Root from './root';
import { ContactBlock } from '../../../models/contact';

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
                max-width: 400px;
                transform: translateY(20px);
            `,
            tablet: css`
                transform: translateY(-20px);
                width: 80%;
                max-width: 500px;
            `,
            desktop: css`
                transform: translateY(-40px);
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

const InitialForm: FC<{
    contactBlock: ContactBlock;
    contactOptions: ContactOption[];
}> = ({ contactBlock, contactOptions }) => {
    return (
        <Root formUIPhase={'initial'}>
            <BigTitle isOrchestrated={true}>{contactBlock.title}</BigTitle>
            <div css={styles.content}>
                <Form css={styles.formColumn}>
                    <Field
                        component={SelectTo}
                        name="to"
                        placeholder="Who do you want to contact?"
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
        </Root>
    );
};

export default InitialForm;
