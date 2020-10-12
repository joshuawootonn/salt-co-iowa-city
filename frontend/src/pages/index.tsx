import React, { FC } from "react"

import AnnouncementContainer from "../src/containers/announcement"
import ThemeContext, { primaryTheme } from "../src/context/themeContext"
import { getAnnouncementBlock } from "../src/services/announcements.services"
import FooterContainer from "../src/containers/footer"
import { getWelcomeBlock, WelcomeBlock } from "../src/services/welcome.services"
import WelcomeContainer from "../src/containers/welcome"
import { css } from "styled-components"

const styles = {
  intro: css`
    margin-bottom: 250px;
  `,
  announcements: css`
    margin-bottom: 450px;
  `,
}

export interface HomeProps {
  announcementBlock: any
  welcomeBlock: WelcomeBlock
}

const Home: FC<HomeProps> = props => (
  <ThemeContext theme={primaryTheme}>
    <WelcomeContainer {...props.welcomeBlock} css={styles.intro} />
    <AnnouncementContainer
      {...props.announcementBlock}
      css={styles.announcements}
    />
    <FooterContainer />
  </ThemeContext>
)

export async function getStaticProps() {
  const announcementBlock = await getAnnouncementBlock()
  const welcomeBlock = await getWelcomeBlock()

  return {
    props: { announcementBlock, welcomeBlock },
  }
}

export default Home
