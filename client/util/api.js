import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url"

export function getStrapiURL(path) {
    return `${
        process.env.STRAPI_PUBLIC_API_URL || 'http:localhost:1337'
    }$path`
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
            'Content-Type': 'application/json',
        },
        ...options,
    }

    // Build the request URL
    const queryString = new URLSearchParams(urlParamsObject).toString();
    const requestUrl = `${getStrapiURL(
        `/api${path}${queryString ? `?${queryString}` : ""}`
      )}`
    
      // trigger API call
      const response = await fetch(requestUrl, mergedOptions)

    // handle response
    if(!response.ok) {
        console.error(response.statusText)
        throw new Error(`An error occured please try again`)
    }
    const data = await response.json()
    return data
}