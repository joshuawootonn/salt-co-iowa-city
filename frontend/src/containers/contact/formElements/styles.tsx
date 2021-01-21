import { css } from 'styled-components/macro';
import typography from '../../../components/typography';
import { queryShit } from '../../../components/useScreenType';
import { addAlpha } from '../../../helpers/color';
import { lighten } from 'polished';

export const inputBackgroundTransparency = 0.5;

export default {
    elementRoot: css`
        width: 100%;
        & > span {
            color: ${({ theme }) => theme.colors.yellow.medium};
            display: inline-block;

            ${queryShit({
                mobile: css`
                    min-height: 30px;
                    font-size: 14px;

                    padding: 5px;
                `,
                tablet: css`
                    min-height: 40px;
                    font-size: 16px;
                `,
            })}
        }
        display: flex;
        flex-direction: column;
    `,

    input: css`
        ${typography.input};
        padding: 8.5px;
        height: 50px;
        width: 100%;
        background: ${({ theme }) =>
            addAlpha(theme.colors.background, inputBackgroundTransparency)};
        border: 2px solid ${({ theme }) => theme.colors.blue.lightest};
        color: ${({ theme }) => theme.colors.blue.light};

        &::placeholder {
            color: ${({ theme }) => theme.colors.blue.light};
        }

        &:focus {
            outline: none;
            z-index: 1;
            border: 2px solid ${({ theme }) => theme.colors.blue.medium};
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            transition: background-color 5000s;
            -webkit-text-fill-color: #fff !important;
        }
    `,

    select: (baseClassName: string) => css`
        width: 100%;
        z-index: 10000 !important;
        .${baseClassName} {
            height: 50px;
            .${baseClassName}__control {
                ${typography.select};
                height: 50px;
                background: ${({ theme }) =>
                    addAlpha(
                        theme.colors.background,
                        inputBackgroundTransparency
                    )};
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
                    addAlpha(theme.colors.background, 1)};
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
                        background: ${({ theme }) =>
                            addAlpha(
                                theme.colors.background,
                                inputBackgroundTransparency
                            )};

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
    textArea: css`
        ${typography.textArea};
        height: 150px;
        width: 100%;
        padding: 8.5px;

        resize: none;
        background: ${({ theme }) =>
            addAlpha(theme.colors.background, inputBackgroundTransparency)};
        border: 2px solid ${({ theme }) => theme.colors.blue.lightest};
        &::placeholder {
            color: ${({ theme }) => theme.colors.blue.light};

            &::before {
                content: '   ';
            }
        }

        &:focus {
            outline: none;
            z-index: 1;
            border: 2px solid ${({ theme }) => theme.colors.blue.medium};
        }
    `,
    validationText: css`
        display: flex !important;
        align-items: center;
        justify-content: flex-start;
    `,
    button: css`
        background: none;
        border: none;
        width: 100px;

        transition: ease 150ms;
        outline: none;
        cursor: pointer;

        &:hover,
        &:focus {
            transform: scale(1.1);
        }
        &:active,
        &:focus:active {
            transform: scale(1);
        }
    `,
};
