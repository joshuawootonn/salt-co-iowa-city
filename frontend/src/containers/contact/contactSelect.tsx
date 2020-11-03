import ReactSelect from 'react-select';
import React, { FC } from 'react';
import { Staff } from '../../models/staff';
import styles from './styles';

export interface StaffOption extends Staff {
    value: string;
    label: string;
}

export interface SelectProps {
    options: StaffOption[];
}

const ContactSelect: FC<SelectProps> = (props) => {
    const className = 'contact-select';
    return (
        <div css={styles.select(className)}>
            <ReactSelect
                className={className}
                classNamePrefix={className}
                {...props}
            />
        </div>
    );
};

export default ContactSelect;
