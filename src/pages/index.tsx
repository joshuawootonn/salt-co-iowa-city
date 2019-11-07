import React from 'react';

import StylingProvider from 'components/stylingProvider';
import SEO from 'components/seo';

import Cursor from 'components/cursor';
import Hero from '../components/hero';

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      description="Joshua Wootonn home page"
      lang="en"
      meta={{}}
    />
    <StylingProvider>
      <Hero text="WIP" backgroundColor="purple" />
      <Cursor />
    </StylingProvider>
  </>
);

export default IndexPage;
