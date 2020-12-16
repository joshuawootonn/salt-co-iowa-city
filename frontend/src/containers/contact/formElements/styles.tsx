import { css } from 'styled-components/macro';
import typography from '../../../components/typography';

export default {
    elementRoot: css`
        width: 100%;
        & > span {
            color: ${({ theme }) => theme.colors.yellow.medium};
            display: inline-block;
            min-height: 40px;
            padding: 10px;
        }
        display: flex;
        flex-direction: column;
    `,

    input: css`
        ${typography.input};
        padding: 8.5px;
        height: 50px;
        width: 100%;
        background: ${({ theme }) => theme.colors.backgroundTransparent};
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
    textArea: css`
        ${typography.textArea};
        height: 150px;
        width: 100%;
        padding: 8.5px;

        resize: none;
        background: ${({ theme }) => theme.colors.backgroundTransparent};
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
    button: css`
        background: ${({ theme }) => theme.colors.transparent};
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
