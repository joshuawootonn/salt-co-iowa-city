import ReactSelect from 'react-select';
import React, { FC } from 'react';
import styles from './styles';
import { FieldProps } from 'formik';
import { css } from 'styled-components/macro';
import ValidationWrapper from './validationWrapper';
import { ContactOption } from '../contact';
import AnimationWrapper from './animationWrapper';

export interface SelectProps {
    options: ContactOption[];
}

const SelectTo: FC<FieldProps<any> & SelectProps> = (props) => {
    const className = 'contact-select';

    return (
        <ValidationWrapper {...props} css={styles.select(className) as any}>
            <AnimationWrapper>
                <ReactSelect
                    isSearchable={false}
                    className={className}
                    classNamePrefix={className}
                    {...props}
                    options={props.options.filter(
                        (option) => option.__typename === 'ContentfulStaff'
                    )}
                    defaultValue={props.field.value}
                    value={
                        props.field.value &&
                        props.options.filter(
                            (option) => option.id === props.field.value.id
                        )
                    }
                    onChange={(option: any) =>
                        props.form.setFieldValue(props.field.name, option)
                    }
                />
            </AnimationWrapper>
        </ValidationWrapper>
    );
};

export default SelectTo;
