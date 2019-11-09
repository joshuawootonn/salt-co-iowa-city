import React from 'react';

import StylingProvider from 'components/stylingProvider';
import SEO from 'components/seo';

import Cursor from 'components/cursor';
import Hero from '../components/hero';
import AboutContainer from '../containers/about.container';
import NavigationContainer from '../containers/navigation.container';

const EventPage = () => (
  <>
    <SEO
      title="Media"
      description="Media for Salt Company Iowa City"
      lang="en"
      meta={{}}
    />
    <StylingProvider>
      <NavigationContainer />
      <AboutContainer />
    </StylingProvider>
  </>
);

export default EventPage;
