import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from 'gatsby';

import Header from '../components/Header';

import { BannerBlog, ContainerBlog } from './styledBlog';

export default function TemplateBlog({ data }, props) {
    const { markdownRemark: post } = data;

    return(
        <>
            <Header />
            <BannerBlog src={post.frontmatter.image.childImageSharp.fluid.src} />
            <ContainerBlog>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.html}} />
            </ContainerBlog>
        </>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {
            path: {
                eq: $path
            }
        }) {
            html,
            frontmatter {
                path
                title
                image {
                    childImageSharp {
                        fluid {
                            src
                        }
                    }
                }
            }
        }
    }
`