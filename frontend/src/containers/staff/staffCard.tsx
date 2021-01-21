import React, { FC } from 'react';
import styled, { css } from 'styled-components/macro';
import typography from '../../components/typography';
import { Staff } from '../../models/staff';
import { mapReferenceToLink } from '../../helpers/link';
import TextLink from '../../components/textLink';
import { motion } from 'framer-motion';
import ImageController from '../../components/image';
import { useAnimationProp } from '../../helpers/animation';

const styles = {
    root: css`
        width: 100%;
        max-width: 450px;
        justify-self: center;
    `,
    image: css`
        height: auto;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    `,
    textContainer: css``,

    textBlock1: css`
        border: 2px solid ${({ theme }) => theme.colors.blue.light};
        display: flex;
        flex-direction: column;
        padding: 15px;
        h4 {
            margin-bottom: 6px;
        }
    `,
    textBlock2: css`
        transform: translateY(-2px);
        border: 2px solid ${({ theme }) => theme.colors.blue.light};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
    `,
    titleMarginModifier: (isMargin: boolean) =>
        isMargin
            ? css`
                  margin-bottom: auto;
              `
            : css`
                  margin-bottom: 0 !important;
              `,
};

const TextCard = styled(motion.div)`
    background-color: ${({ theme }) => theme.colors.backgroundTransparent};
    transform: translate(20px, -77px);
    z-index: 10;
`;

const StaffCard: FC<Staff> = (props) => {
    const tabletAnimation = {
        variants: {
            entered: { x: 10, opacity: 1, y: -77 },
            exited: { x: -10, opacity: 0, y: -57 },
        },
    };

    const mobileAnimation = {
        variants: {
            entered: { x: 0, opacity: 1, y: -77 },
            exited: { x: -20, opacity: 0, y: -57 },
        },
    };

    const animationProps = useAnimationProp(
        {
            initial: 'exited',
            transition: { type: 'spring', duration: 1, bounce: 0 },
        },
        {
            mobile: mobileAnimation,
            tablet: tabletAnimation,
            desktop: tabletAnimation,
        }
    );

    const isAboutEmpty = !props.about || !props.about.replace(/\s/g, '').length;

    return (
        <div css={styles.root}>
            <ImageController
                isOrchestrated={true}
                images={[props.image]}
                css={styles.image}
            />
            <TextCard {...animationProps}>
                <div css={styles.textBlock1}>
                    <h4
                        css={[
                            typography.card.title,
                            styles.titleMarginModifier(!isAboutEmpty),
                        ]}
                    >
                        {props.firstName} {props.lastName}
                    </h4>
                    {!isAboutEmpty && (
                        <p css={typography.card.text}>{props.about}</p>
                    )}
                </div>
                <div css={styles.textBlock2}>
                    <span css={typography.card.smallText}>
                        {props.position}
                    </span>
                    <TextLink
                        destinationType="internal"
                        to={mapReferenceToLink(props)}
                        type={'card'}
                    >
                        {props.connectionLinkText}
                    </TextLink>
                </div>
            </TextCard>
        </div>
    );
};

export default StaffCard;

const LeftHand = () => {
    return (
        <svg
            width="96"
            height="153"
            viewBox="0 0 96 153"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M76.2242 107.777V26.3745C76.2242 25.1377 75.9806 23.9131 75.5073 22.7704C75.034 21.6278 74.3402 20.5895 73.4657 19.715C72.5912 18.8405 71.5529 18.1467 70.4103 17.6734C69.2676 17.2001 68.043 16.9565 66.8062 16.9565V16.9565C65.5694 16.9565 64.3447 17.2001 63.2021 17.6734C62.0594 18.1467 61.0212 18.8405 60.1467 19.715C59.2721 20.5895 58.5784 21.6278 58.1051 22.7704C57.6318 23.9131 57.3882 25.1377 57.3882 26.3745V73.2246"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M76.224 107.777V91.7008C76.224 86.7211 78.2022 81.9453 81.7233 78.4241C85.2445 74.9029 90.0203 72.9248 95 72.9248V107.837C95.005 113.331 93.096 118.655 89.6011 122.894L75.5041 139.871C72.5231 143.453 68.7909 146.336 64.5718 148.316C60.3527 150.296 55.7499 151.324 51.0893 151.328H22.2955C10.7779 151.388 1.11997 142.21 1 130.692V39.8118C0.999975 38.5778 1.244 37.356 1.71803 36.2167C2.19206 35.0775 2.88674 34.0432 3.76207 33.1734C4.63741 32.3036 5.67612 31.6156 6.81842 31.1488C7.96072 30.6821 9.18404 30.4459 10.418 30.4538C12.8999 30.4538 15.2801 31.4397 17.0351 33.1947C18.7901 34.9497 19.776 37.3299 19.776 39.8118V73.2247"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M38.6119 73.2246V18.9961C38.6119 16.4983 37.6196 14.1028 35.8534 12.3366C34.0872 10.5704 31.6917 9.57813 29.1939 9.57812V9.57812C26.6961 9.57812 24.3006 10.5704 22.5343 12.3366C20.7681 14.1028 19.7759 16.4983 19.7759 18.9961V73.2246"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M57.3878 73.2246V10.418C57.3957 9.18405 57.1595 7.96072 56.6928 6.81842C56.226 5.67612 55.538 4.63741 54.6682 3.76208C53.7985 2.88674 52.7642 2.19206 51.6249 1.71803C50.4856 1.244 49.2638 0.999975 48.0298 1V1C45.532 1 43.1365 1.99225 41.3703 3.75847C39.6041 5.52469 38.6118 7.92019 38.6118 10.418V73.2246"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const RightHand = () => {
    return (
        <svg
            width="96"
            height="153"
            viewBox="0 0 96 153"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.7764 100.783V19.0162C19.7764 16.5073 20.7686 14.1011 22.5348 12.3269C24.301 10.5528 26.6966 9.55615 29.1944 9.55615V9.55615C31.6922 9.55615 34.0877 10.5528 35.8539 12.3269C37.6201 14.1011 38.6123 16.5073 38.6123 19.0162V66.1359"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.7761 108.254V92.1058C19.7761 87.1038 17.7979 82.3068 14.2767 78.7698C10.7555 75.2329 5.97977 73.2459 1.00007 73.2459V73.2459V108.314C0.98642 113.845 2.91999 119.202 6.45891 123.439L20.5559 140.491C23.5222 144.091 27.2431 146.989 31.453 148.979C35.663 150.968 40.2582 152 44.9107 152H73.7045C85.2221 152.06 94.88 142.841 95 131.272V39.985C95 38.7455 94.756 37.5182 94.282 36.3738C93.8079 35.2295 93.1133 34.1906 92.2379 33.3169C91.3626 32.4433 90.3239 31.7521 89.1816 31.2833C88.0393 30.8145 86.816 30.5772 85.582 30.5852V30.5852C83.1001 30.5852 80.7199 31.5755 78.9649 33.3383C77.2099 35.1011 76.224 37.492 76.224 39.985V73.5472"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M57.3882 73.5471V19.0763C57.3882 16.5673 58.3804 14.1611 60.1467 12.387C61.9129 10.6129 64.3084 9.61621 66.8062 9.61621V9.61621C68.043 9.61621 69.2676 9.8609 70.4103 10.3363C71.5529 10.8117 72.5912 11.5086 73.4657 12.387C74.3402 13.2655 75.034 14.3083 75.5073 15.4561C75.9806 16.6038 76.2242 17.834 76.2242 19.0763V73.5471"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M38.6123 73.5474V10.4601C38.6123 7.95111 39.6046 5.5449 41.3708 3.7708C43.137 1.99669 45.5325 1 48.0303 1V1C49.2643 0.999975 50.4861 1.24509 51.6254 1.72124C52.7647 2.19739 53.7989 2.89517 54.6687 3.77442C55.5385 4.65366 56.2265 5.69701 56.6933 6.84442C57.16 7.99182 57.3962 9.22062 57.3883 10.4601V73.5474"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
