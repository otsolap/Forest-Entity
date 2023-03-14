// Youtube url
export const YouTubeGetID = (url) => {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  };
  
  // Paginate helper function
  export const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };
  
  // Get the url of the Strapi API based om the env variable or the default local one.
export function getStrapiURL(path) {
  return `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}${path}`;
}

// This function will get the url of your medias depending on where they are hosted
export function getStrapiMedia(url) {
  if (url == null) {
    return null;
  }
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }
  return `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}${url}`;
}

// handle the redirection to the homepage if the page we are browsinng doesn't exists
export function redirectToHomepage() {
  return {
    redirect: {
      destination: `/`,
      permanent: false,
    },
  };
}

export async function fetchGlobalData() {
  const [navigationResponse, footerResponse] = await Promise.all([
    fetch(`${getStrapiURL(`/api/navigation/?=${process.env.REST_API_NAVIGATION_QUERY}`)}`),
    fetch(`${getStrapiURL(`/api/footer/?=${process.env.REST_API_FOOTER_QUERY}`)}`)
  ]);

  const [navigationData, footerData] = await Promise.all([
    navigationResponse.json(),
    footerResponse.json()
  ]);

  const globalData = {
    navigation: navigationData,
    footer: footerData
  };

  return globalData;
}


// This function will build the url to fetch on the Strapi API
export function getData(slug) {
  const slugToReturn = `/${slug}`;
  const apiUrl = `/api/pages?slug=${slug}${process.env.REST_API_CONTENT_QUERY}`;

  return {
    data: getStrapiURL(apiUrl),
    slug: slugToReturn,
  };
}
