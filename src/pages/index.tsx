import React from 'react';

import StylingProvider from 'components/stylingProvider';
import SEO from 'components/seo';

import Cursor from 'components/cursor';
import Hero from '../components/hero';
import AboutContainer from '../containers/about.container';
import NavigationContainer from '../containers/navigation.container';

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      description="Salt Company Iowa City"
      lang="en"
      meta={{}}
    />
    <StylingProvider>
      <NavigationContainer />
      <AboutContainer />
    </StylingProvider>
  </>
);

export default IndexPage;
