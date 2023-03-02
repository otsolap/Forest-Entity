import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";

export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

/**
 *
 * @param {string} path Path of the API
 * @param {object} path
 * @param {requestInit} options Options passed to fetch
 * @returns Parsed API call resonse
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build the request URL
  const queryString = new URLSearchParams(urlParamsObject).toString();
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}

/**
 *
 * @param {Object} options
 * @param {string} options.slug the page's slug
 */

export async function getPageData({ slug }) {
  // find pages that match this slug
  const gqEndpoint = getStrapiURL("/graphql");
  const pageRes = await fetch(gqEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query GetPages($slug: String!) {
        pages(filters: { slug: { eq: $slug } }) {
          data {
            id
            attributes {
              title
              slug
              seo {
                title
                description
                meta {
                  title
                  description
                }
                preventIndexing
                structuredData
              }
              blocks {
                __typename
                ... on ComponentBlocksAccordion {
                  title
                  description
                  faqs {
                    data {
                      id
                      attributes {
                        title
                        body
                      }
                    }
                  }
                }
                ... on ComponentBlocksBlogs {
                  title
                  description
                  filter
                  blogs: items {
                    data {
                      attributes {
                        title
                        image {
                          data {
                            attributes {
                              url
                              width
                              height
                              alternativeText
                            }
                          }
                        }
                        description
                        publishedAt
                        categories {
                          data {
                            attributes {
                              title
                            }
                          }
                        }
                      }
                    }
                  }
                  link {
                    href
                    title
                    isExternal
                    target
                  }
                }
                ... on ComponentBlocksCards {
                  title
                  description
                  cards: items {
                    id
                    title
                    description
                    image {
                      data {
                        attributes {
                          url
                          width
                          height
                          alternativeText
                        }
                      }
                    }
                  }
                }
                ... on ComponentBlocksHero {
                  title
                  description
                  alignContent
                  mediaWidth
                  video
                  autoplay
                  media
                  image {
                    data {
                      attributes {
                        url
                        width
                        height
                        alternativeText
                      }
                    }
                  }
                  buttons {
                    href
                    title
                    isExternal
                    target
                    selectTheme
                  }
                }
                ... on ComponentBlocksHighlight {
                  title
                  description
                  id
                  image {
                    data {
                      attributes {
                        url
                        width
                        height
                        alternativeText
                      }
                    }
                  }
                  button {
                    href
                    title
                    isExternal
                    target
                    selectTheme
                  }
                  selectTheme
                }
                ... on ComponentBlocksMediaMix {
                  mediaMixColumns: items {
                    id
                    type
                    markdown
                    video
                    image {
                      data {
                        attributes {
                          url
                          width
                          height
                          alternativeText
                        }
                      }
                    }
                  }
                }
                ... on ComponentBlocksTextArea {
                  text
                  id
                }
              }
            }
          }
        }
      }
      `,
      variables: { slug }
    }),
  })

  const pagesData = await pageRes.json();

  // null identifier
  if (pagesData.data?.pages == null || pagesData.data?.pages.length === 0) {
    return null;
  }

  // always return the first item, since there should be one per page only.
  return pagesData.data.pages.data[0];
}

// Site data (Meta, Navigation, global settings)
export async function getGlobalData() {
  // find pages that match this slug
  const gqEndpoint = getStrapiURL("/graphql");
  const globalRes = await fetch(gqEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query {
        navigation {
          data {
            attributes {
              title
              slogan
              blocks {
                __typename
                ... on ComponentUtilMenuItem {
                  id
                  title
                  href
                  icon {
                    data {
                      attributes {
                        url
                        width
                        height
                        alternativeText
                      }
                    }
                  }
                }
              }
              buttons {
                title
                href
                isExternal
                target
                selectTheme
              }
            }
          }
        }
        footer {
          data {
            attributes {
              blocks {
                __typename
                ... on ComponentUtilFooterColumn {
                  title
                  id
                  description
                  open
                  link {
                    href
                    title
                    isExternal
                    target
                  }
                }
                ... on ComponentUtilFooterSocialMedia {
                  title
                  open
                  socialMedia {
                    type
                    title
                    url
                  }
                }
              }
              subFooter {
                title
                link {
                  href
                  title
                  isExternal
                  target
                }
              }
            }
          }
        }
      }
      `,
    }),
  });

  const global = await globalRes.json();
  return global.data;
}
