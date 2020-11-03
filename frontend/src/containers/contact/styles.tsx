import { css } from 'styled-components/macro';
import typography from '../../components/typography';

export default {
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
            }
            .${baseClassName}__placeholder {
                ${typography.select};
                color: ${({ theme }) => theme.colors.blue.light};
            }
            .${baseClassName}__single-value {
                ${typography.select};
                color: ${({ theme }) => theme.colors.blue.light};
            }

            .${baseClassName}__menu {
                background-color: transparent;

                border: 2px solid ${({ theme }) => theme.colors.blue.lightest};
                z-index: 10000 !important;
                border-radius: 0;

                .${baseClassName}__menu-list {
                    .${baseClassName}__option {
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
    `,
    button: css`
        background: ${({ theme }) => theme.colors.backgroundTransparent};
        border: none;

        transition: ease 150ms;
        outline: none;
        cursor: pointer;

        &:hover,
        &:focus {
            transform: scale(1.2);
        }
        &:active,
        &:focus:active {
            transform: scale(1);
        }
    `,
};
