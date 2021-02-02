import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

const SeoComponent = ({ description, title, image, isTitleTemplated }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        twitterUsername
                        siteUrl
                    }
                }
            }
        `
    );
    const { pathname } = useLocation();

    const { siteUrl, twitterUsername } = site.siteMetadata;

    // console.log(site);

    const seo = {
        title: isTitleTemplated ? `${title} - Salt Company` : title,
        description,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname}`,
    };

    // console.log(seo);

    return (
        <Helmet title={seo.title}>
            <html lang="en" />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="author" content="https://www.joshuawootonn.com" />
            {seo.url && <meta property="og:url" content={seo.url} />}
            <meta property="og:type" content="website" />
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
                <meta
                    name="twitter:site"
                    content={`https://twitter.com/${twitterUsername}`}
                />
            )}
            {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            <script async src="https://cdn.splitbee.io/sb.js"/>
        </Helmet>
    );
};

export default SeoComponent;
