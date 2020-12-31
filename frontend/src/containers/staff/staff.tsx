import React, { FC } from 'react';
import { Staff, StaffBlock } from '../../models/staff';
import useScreenType, { queryShit } from '../../components/useScreenType';
import chunk from 'lodash/chunk';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import { toVariant } from '../../helpers/animation';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { css } from 'styled-components/macro';
import StaffCard from './staffCard';

const Root = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    ${queryShit({
        mobile: css`
            grid-auto-flow: row;
            justify-content: center;
            grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
            grid-template-rows: repeat(1, minmax(120px, max-content));
        `,
        tablet: css`
            grid-auto-flow: row;
            justify-content: center;
            column-gap: 40px;

            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-template-rows: repeat(1, minmax(120px, max-content));
        `,
        desktop: css`
            column-gap: 40px;
            grid-auto-flow: column;

            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(1, minmax(0px, max-content));
        `,
    })}
`;

const StaffComponent: FC<StaffBlock> = ({ staff }) => {
    const type = useScreenType();

    const staffPerRow = type === 'mobile' ? 1 : type === 'tablet' ? 2 : 3;

    return (
        <>
            {chunk(staff, staffPerRow).map((subStaff, i) => (
                <Row key={i} staff={subStaff} />
            ))}
        </>
    );
};

const Row: FC<{ staff: Staff[] }> = ({ staff }) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0.2,
    });
    const animate = isLoaded && isVisible;

    return (
        <Root
            ref={ref}
            animate={toVariant(animate)}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0.2,
                        staggerChildren: 0.08,
                    },
                },
            }}
        >
            {staff.map((s: Staff, i: number) => (
                <StaffCard key={i} {...s} />
            ))}
        </Root>
    );
};

export default StaffComponent;
