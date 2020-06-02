import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo'
import Layout from '../components/layout';

export const query = graphql`
    query($slug: String!) {
        merchJson(slug: { eq: $slug }) {
            title
            price
            content
        }
    }
`

const MerchPage = ({ data }) => {

    const merch = data.merchJson;

    return (
        <Layout>
            <SEO title={ merch.title } />
            <h1>{ merch.title }</h1>
            <p>{ merch.content }</p>
        </Layout>
    )
}

export default MerchPage;