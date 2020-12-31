import React, { useState } from 'react';
import IconAction from '../../components/iconAction';

import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInterval } from 'react-use';
import { useFontLoader } from '../../context/fontLoader';
import { toVariant } from '../../helpers/animation';

const Icon = styled(motion.svg)``;

const variants = {
    active: {
        rotate: [0, -35, 0, -35, 0],
        x: [0, -20, 0, -20, 0],
        y: [0, 12, -4, 9, 0],

        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 3,
            mass: 1,
        },
    },
    default: {
        rotate: [0, 20, 0],
        transition: {
            repeat: Infinity,
            repeatDelay: 3,
            type: 'spring',
            stiffness: 100,
            velocity: 1000,
            damping: 2,
            mass: 0.3,
        },
    },
};

const BoigerButton = (props) => {
    const controls = useAnimation();
    const isFontLoaded = useFontLoader();
    const [isActive, setIsActive] = useState(false);

    useInterval(() => {
        if (isActive) {
            return;
        }
        controls.start('default');
    }, 3000);

    return (
        <IconAction
            type={'button'}
            {...props}
            onClick={async () => {
                props.onClick && props.onClick();
                if (!isActive) {
                    setIsActive(true);
                    await controls.start('active');
                    setIsActive(false);
                }
            }}
            animate={toVariant(isFontLoaded)}
            initial={'exited'}
            variants={{
                entered: { opacity: 1 },
                exited: { opacity: 0 },
            }}
            transition={{ type: 'spring', duration: 1, bounce: 0 }}
        >
            <Icon
                animate={controls}
                variants={variants}
                style={{ originX: 0.5, originY: 0.5 }}
                width="41"
                height="33"
                viewBox="0 0 41 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M38.9216 17.1393L34.2954 4.30297C33.3621 1.97475 31.8398 1.11672 29.5689 2.12739C27.3622 3.07811 13.9318 9.41205 11.9206 10.3842C11.2358 10.6367 10.647 11.0965 10.2373 11.6987C9.82757 12.301 9.61754 13.0154 9.6368 13.7412L8.47982 14.1664C8.22991 14.0275 7.95138 13.947 7.66523 13.931C7.37909 13.915 7.09277 13.9639 6.82788 14.074L5.1751 14.6813C4.7909 14.8149 4.44295 15.0357 4.15892 15.3262C3.87488 15.6167 3.6626 15.969 3.53896 16.3549C3.1703 17.4919 3.08314 18.6997 3.2849 19.8753C3.4475 20.8612 3.69413 21.8313 4.02212 22.7749C4.37928 23.6924 4.81438 24.5776 5.32271 25.421C5.92881 26.4565 6.78034 27.328 7.80328 27.9598C8.14927 28.1692 8.53882 28.2975 8.94255 28.3349C9.34627 28.3723 9.7536 28.3179 10.1338 28.1758L11.7866 27.5685C12.0599 27.4767 12.3091 27.3247 12.5155 27.1237C12.7218 26.9227 12.88 26.678 12.9781 26.4079L14.1351 25.9828C14.5924 26.5457 15.2151 26.9522 15.9165 27.1457C16.618 27.3391 17.3634 27.31 18.0491 27.0623C20.2112 26.5009 34.5474 22.6317 36.8521 21.948L38.9216 17.1393ZM9.52999 26.5326C9.39472 26.5881 9.2477 26.6089 9.10252 26.593C8.95733 26.5771 8.81864 26.525 8.69926 26.4416C7.91721 25.9651 7.27431 25.2934 6.83407 24.4926C6.38408 23.7508 5.99637 22.9732 5.67489 22.1676C5.39094 21.3326 5.17782 20.4751 5.03777 19.6042C4.86111 18.7186 4.91144 17.8022 5.18412 16.9394C5.22719 16.7974 5.30362 16.6675 5.40706 16.5606C5.5105 16.4536 5.63798 16.3727 5.7789 16.3245L7.59695 15.6564C7.6679 15.7426 7.72047 15.8422 7.75148 15.9493L11.2686 25.5207C11.3592 25.7672 11.3405 25.844 11.1828 25.9253L9.52999 26.5326ZM9.51747 15.6501L10.1786 15.4072L13.4693 24.3624L12.8082 24.6053L9.51747 15.6501ZM31.9501 3.63029C32.2197 3.75886 32.4596 3.94122 32.6552 4.16609C32.8508 4.39096 32.9978 4.65356 33.0871 4.93765L37.7137 17.5284C37.8296 17.8027 37.8876 18.098 37.8841 18.396C37.8807 18.694 37.8159 18.9883 37.6937 19.2609C37.5507 19.5108 37.3578 19.729 37.127 19.9021C36.8961 20.0751 36.6322 20.1993 36.3516 20.2669C34.0675 20.943 19.7727 24.797 17.6106 25.3584C16.9269 25.5397 15.7938 25.5831 15.5523 24.9258L11.4087 13.6496C11.1672 12.9924 12.0512 12.2712 12.6897 11.9666C14.7008 10.9945 28.09 4.67584 30.2684 3.71207C30.5291 3.58634 30.8125 3.51429 31.1015 3.50024C31.3905 3.4862 31.6792 3.53044 31.9501 3.63033L31.9501 3.63029ZM36.8521 21.948C39.302 21.2349 39.8314 19.534 38.9216 17.1393Z"
                    fill="#AFBCE9"
                />
            </Icon>
        </IconAction>
    );
};

export default BoigerButton;
