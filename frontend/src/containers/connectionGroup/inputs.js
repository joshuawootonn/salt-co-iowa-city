import React from 'react';
import { css } from 'styled-components/macro';
import typography from '../../components/typography';
import ReactSelect from 'react-select';
import { motion } from 'framer-motion';
import { lighten } from 'polished';

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
                box-shadow: none;

                .${baseClassName}__indicator {
                    svg {
                        path {
                            fill: ${({ theme }) => theme.colors.blue.lightest};
                        }
                    }
                }
            }
            .${baseClassName}__control--is-focused {
                border: 2px solid ${({ theme }) => theme.colors.blue.medium};

                .${baseClassName}__indicator {
                    svg {
                        path {
                            fill: ${({ theme }) => theme.colors.blue.medium};
                        }
                    }
                }
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
                border: 2px solid ${({ theme }) => theme.colors.blue.medium};
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
                        background-color: ${({ theme }) =>
                            lighten(0.1, theme.colors.backgroundTransparent)};
                    }
                    .${baseClassName}__option--is-focused {
                        color: ${({ theme }) => theme.colors.blue.medium};
                        background-color: ${({ theme }) =>
                            lighten(0.1, theme.colors.backgroundTransparent)};
                    }
                }
            }
        }
    `,
};

const animationProps = {
    initial: 'exited',
    variants: {
        entered: { y: 0, opacity: 1 },
        exited: { y: 20, opacity: 0 },
    },
    transition: { type: 'spring', duration: 1, bounce: 0 },
};

export const genderOptions = [
    { value: 'All', label: 'All' },
    { value: 'Male', label: 'Men' },
    { value: 'Female', label: 'Women' },
];

export const GenderInput = (props) => {
    const className = 'gender-select';

    return (
        <motion.div {...animationProps} css={styles.select(className)}>
            <ReactSelect
                isSearchable={false}
                className={className}
                classNamePrefix={className}
                {...props}
                placeholder={'Gender'}
                options={genderOptions}
                value={props.value}
                onChange={props.onChange}
            />
        </motion.div>
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
        <motion.div {...animationProps} css={styles.select(className)}>
            <ReactSelect
                isSearchable={false}
                className={className}
                classNamePrefix={className}
                {...props}
                options={dayOptions}
                placeholder={'Day of Week'}
                value={props.value}
                onChange={props.onChange}
            />
        </motion.div>
    );
};
