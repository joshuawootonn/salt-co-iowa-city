import { css } from 'styled-components/macro';
import { StaffBlock } from '../__stories__/services/staff.services';
import { WhoWeAreBlock } from '../__stories__/services/whoWeAre.services';
import { MinistryDescriptionBlock } from '../__stories__/services/ministryDescription.service';
import React, { FC } from 'react';
import ThemeContext, { primaryTheme } from '../context/themeContext';
import HeaderContainer from '../containers/header';
import IntroContainer from '../containers/intro';
import WhoWeAreSvg from '../svgs/whoWeAre.svg';
import MinistryDescriptionContainer from '../containers/ministryDescription';
import FooterContainer from '../containers/footer';
import { useWhoWeAreBlock } from '../services/whoWeAre.services';
import { useMinistryDescriptionBlock } from '../services/ministryDescription.services';
import { useStaffBlock } from '../services/staff.services';
import StaffContainer from '../containers/staff';

const styles = {
    intro: css`
        margin-bottom: 150px;
    `,
    ministryDescriptions: css`
        margin-bottom: 450px;
    `,
    staff: css`
        margin-bottom: 350px;
    `,
};

export interface WhoWeAreProps {
    whoWeAreBlock: WhoWeAreBlock;
    staffBlock: StaffBlock;
    ministryDescriptionsBlock: MinistryDescriptionBlock;
}

const WhoWeAre: FC<WhoWeAreProps> = (props) => {
    const whoWeAreBlock = useWhoWeAreBlock();
    const ministryDescriptionBlock = useMinistryDescriptionBlock();
    const staffBlock = useStaffBlock();

    return (
        <ThemeContext theme={primaryTheme}>
            <HeaderContainer />
            <IntroContainer {...whoWeAreBlock} css={styles.intro}>
                <WhoWeAreSvg />
            </IntroContainer>
            <MinistryDescriptionContainer
                {...ministryDescriptionBlock}
                css={styles.ministryDescriptions}
            />
            <StaffContainer {...staffBlock} css={styles.staff} />
            <FooterContainer />
        </ThemeContext>
    );
};

export default WhoWeAre;
