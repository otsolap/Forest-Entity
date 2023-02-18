import Head from 'next/head'
import { useContext } from 'react'
import { GlobalContext } from 'pages/_app'
import { getStrapiMedia } from 'util/media'

const Meta = ({ meta }) => (
    <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={meta.titleTemplate} />
        <meta name="og:description" property="og:description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="canonical" href={meta.url} />
    </Head>
)
export default Meta