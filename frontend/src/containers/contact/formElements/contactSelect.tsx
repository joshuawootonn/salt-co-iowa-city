import ReactSelect from 'react-select';
import React, { FC } from 'react';
import { Staff } from '../../../models/staff';
import styles from './styles';
import { FieldProps } from 'formik';
import { css } from 'styled-components/macro';
import ValidationWrapper from './validationWrapper';

export interface StaffOption extends Staff {
    value: string;
    label: string;
}

export interface SelectProps {
    options: StaffOption[];
}

const ContactSelect: FC<FieldProps<any> & SelectProps> = (props) => {
    const className = 'contact-select';
    return (
        <ValidationWrapper {...props} css={styles.select(className) as any}>
            <ReactSelect
                className={className}
                classNamePrefix={className}
                {...props}
                value={props.options.find(
                    (option) => option.value === props.field.value
                )}
                onChange={(option: any) =>
                    props.form.setFieldValue(props.field.name, option)
                }
            />
        </ValidationWrapper>
    );
};

export default ContactSelect;
