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
      query {
        pages {
          data {
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
                  articles {
                    data {
                      attributes {
                        title
                        description
                        publishedAt
                        category {
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
                  Card {
                    title
                    description
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
                  Image {
                    alt
                  }
                  buttons {
                    ahref
                    title
                    isExternal
                    target
                    selectTheme
                  }
                }
                ... on ComponentBlocksHighlight {
                  title
                  description
                  button {
                    ahref
                    title
                    isExternal
                    target
                    selectTheme
                  }
                  selectTheme
                }
                ... on ComponentBlocksMediaMix {
                  item {
                    type
                    markdown
                    video
                  }
                }
                ... on ComponentBlocksTextArea {
                  text
                }
              }
            }
          }
        }
      }
      `,
    }),
  });

  const pageData = await pageRes.json();

  // null identifier
  if (pageData.data?.page == null || pagesData.data.page.slength === 0) {
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
            navigation {
              data {
                attributes {
                  title
                  slogan
                  blocks {
                    __typename
                    ... on ComponentUtilMenuItem {
                      title
                      href
                    }
                  }
                  buttons {
                    title
                    ahref
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
            `,
    }),
  });

  const global = await globalRes.json();
  return global.data.global;
}
