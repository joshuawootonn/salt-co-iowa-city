import React, { FC, useEffect, useRef, useState } from 'react';
import { css } from 'styled-components/macro';
import { Staff } from '../../models/staff';
import StaffImage from './staffImage';
import StaffText from './staffText';
import anime from 'animejs';

const styles = {
    root: css`
        max-width: 367px;
        width: 100%;

        justify-self: center;
    `,
};

const StaffCard: FC<Staff & { i: number }> = (props) => {
    const animateIn = `staff-card-image-${props.i}`;
    const animateOut = `staff-card-loader-${props.i}`;
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        anime({
            targets: `[data-animation=${animateIn}]`,
            translateX: ['100%', '0%'],
            duration: 400,
            easing: 'easeInOutQuart',
            delay: anime.stagger(200),
        });
    }, []);

    return (
        <div css={styles.root}>
            <StaffImage
                loaderAnimateTag={animateOut}
                contentAnimateTag={animateIn}
                setIsLoaded={setIsLoaded}
                fluid={props.image.fluid}
            />
            <StaffText
                isLoaded={isLoaded}
                contentAnimateTag={animateIn}
                {...props}
            />
        </div>
    );
};

export default StaffCard;
