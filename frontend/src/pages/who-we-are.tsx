import { css } from 'styled-components/macro';
import React, { FC } from 'react';
import IntroContainer from '../containers/intro';
import MinistryDescriptionContainer from '../containers/ministryDescription';
import { useWhoWeAreBlock } from '../services/whoWeAre.services';
import { useMinistryDescriptionBlock } from '../services/ministryDescription.services';
import { useStaffBlock } from '../services/staff.services';
import StaffContainer from '../containers/staff';
import { useTitleScoller } from '../components/title/utils';
import Page from '../components/page';
import { queryShit } from '../components/useScreenType';

const styles = {
    intro: css`
        margin-bottom: 150px;
    `,
    ministryDescriptions: css`
        ${queryShit({
            mobile: css`
                margin-bottom: 50px;
            `,
            tablet: css`
                margin-bottom: 100px;
            `,
            desktop: css`
                margin-bottom: 200px;
            `,
        })}
    `,
    staff: css`
        ${queryShit({
            mobile: css`
                margin-bottom: 50px;
            `,
            tablet: css`
                margin-bottom: 100px;
            `,
            desktop: css`
                margin-bottom: 200px;
            `,
        })}
    `,
};

const WhoWeAre: FC = () => {
    const whoWeAreBlock = useWhoWeAreBlock();
    const ministryDescriptionBlock = useMinistryDescriptionBlock();
    const staffBlock = useStaffBlock();

    useTitleScoller();

    return (
        <Page>
            <IntroContainer
                {...whoWeAreBlock}
                type={'WhoWeAre'}
                css={styles.intro}
            />
            <MinistryDescriptionContainer
                {...ministryDescriptionBlock}
                css={styles.ministryDescriptions}
            />
            <StaffContainer {...staffBlock} css={styles.staff} />
        </Page>
    );
};

export default WhoWeAre;
