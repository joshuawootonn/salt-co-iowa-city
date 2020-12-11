import React from 'react';
import { css } from 'styled-components/macro';
import typography from '../../components/typography';
import ReactSelect from 'react-select';

const styles = {
    select: (baseClassName) => css`
        width: 100%;
        .${baseClassName} {
            height: 50px;
            .${baseClassName}__control {
                ${typography.select};
                height: 50px;
                background: ${({ theme }) =>
                    theme.colors.backgroundTransparent};
                border: 2px solid ${({ theme }) => theme.colors.blue.lightest};
                border-radius: 0;
                color: ${({ theme }) => theme.colors.blue.light};
                cursor: pointer;
            }
            .${baseClassName}__placeholder {
                ${typography.select};
                color: ${({ theme }) => theme.colors.blue.light};
            }

            .${baseClassName}__value-container {
                * {
                    ${typography.select};
                    color: ${({ theme }) => theme.colors.blue.light} !important;
                }
            }

            .${baseClassName}__menu {
                background: ${({ theme }) =>
                    theme.colors.backgroundTransparent};
                border: 2px solid ${({ theme }) => theme.colors.blue.lightest};
                z-index: 10000 !important;
                border-radius: 0;

                * {
                    ${typography.select};
                    color: ${({ theme }) => theme.colors.blue.light} !important;
                }

                .${baseClassName}__menu-list {
                    .${baseClassName}__option {
                        cursor: pointer;
                        ${typography.select};
                        background-color: ${({ theme }) =>
                            theme.colors.backgroundTransparent};

                        color: ${({ theme }) => theme.colors.blue.light};
                    }
                    .${baseClassName}__option:hover {
                        color: ${({ theme }) => theme.colors.blue.medium};
                    }
                }
            }
        }
    `,
};

export const genderOptions = [
    { value: 'All', label: 'All' },
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
];

export const GenderInput = (props) => {
    const className = 'gender-select';

    return (
        <div css={styles.select(className)}>
            <ReactSelect
                className={className}
                classNamePrefix={className}
                {...props}
                placeholder={'Specify your sex'}
                options={genderOptions}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
};

export const dayOptions = [
    { value: 'All', label: 'All' },
    { value: 'Sunday', label: 'Sunday' },
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday' },
];

export const DayInput = (props) => {
    const className = 'gender-select';
    return (
        <div css={styles.select(className)}>
            <ReactSelect
                className={className}
                classNamePrefix={className}
                {...props}
                options={dayOptions}
                defaultValue={dayOptions[0]}
                placeholder={'Specify a day'}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
};
