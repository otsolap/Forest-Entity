function MyApp({ Component, pageProps }) {
  console.log('pageprops: ' + pageProps)
  return <Component {...pageProps} />;
}

export default MyApp;