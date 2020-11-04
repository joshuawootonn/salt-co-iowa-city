import ReactSelect from 'react-select';
import React, { FC } from 'react';
import { Staff } from '../../../models/staff';
import styles from './styles';
import { FieldProps } from 'formik';

import { css } from 'styled-components/macro';

export interface StaffOption extends Staff {
    value: string;
    label: string;
}

export interface SelectProps {
    options: StaffOption[];
}

const ContactSelect: FC<FieldProps<any> & SelectProps> = ({
    field,
    form,
    ...props
}) => {
    const className = 'contact-select';

    return (
        <div css={styles.select(className)}>
            <ReactSelect
                className={className}
                classNamePrefix={className}
                {...props}
                value={props.options.find(
                    (option) => option.value === field.value
                )}
                onChange={(option: any) =>
                    form.setFieldValue(field.name, option.value)
                }
            />
        </div>
    );
};

export default ContactSelect;
