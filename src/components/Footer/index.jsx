import React from 'React';
import { useStaticQuery, graphql } from "gatsby"

import * as Styled from './styled';

const Footer = () => {

    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
    
    return(
        <>
            { data.site.siteMetadata.copyright }
        </>
    )
}

export default Footer;