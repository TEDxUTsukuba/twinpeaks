import axios from 'axios'
import gql from 'graphql-tag'

export { default as gql } from 'graphql-tag'

export async function request({ query, variables, preview }) {
  let endpoint = 'https://graphql.datocms.com';

  if (process.env.NUXT_ENV_DATOCMS_ENVIRONMENT) {
    endpoint += `/environments/${process.env.NUXT_ENV_DATOCMS_ENVIRONMENT}`;
  }

  if (preview) {
    endpoint += '/preview';
  }

  const { data } = await axios.post(
    endpoint,
    {
      query: query.loc && query.loc.source.body,
      variables
    },
    {
      headers: {
        // Server-only token (NOT prefixed with NUXT_ENV_) so it is never
        // inlined into the client bundle. Set DATOCMS_API_TOKEN in the build
        // environment (e.g. Netlify) instead of NUXT_ENV_DATOCMS_API_TOKEN.
        Authorization:
          `Bearer ${process.env.DATOCMS_API_TOKEN}`
      }
    }
  )

  if (data.errors) {
    throw JSON.stringify(data.errors)
  }

  return data.data
}

export const imageFields = gql`
  fragment imageFields on ResponsiveImage {
    aspectRatio
    base64
    height
    sizes
    src
    srcSet
    webpSrcSet
    width
    alt
    title
  }
`;

export const seoMetaTagsFields = gql`
  fragment seoMetaTagsFields on Tag {
    attributes
    content
    tag
  }
`;