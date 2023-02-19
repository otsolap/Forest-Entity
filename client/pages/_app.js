import App from "next/app";
import Error from "next/error";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { getGlobalData } from "utils/api";


function MyApp({ Component, pageProps }) {
  // extracting necessary data
  const { global } = pageProps;
  if (global == null) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const globalRes = await getGlobalData(appContext);

  return {
    ...appProps,
    pageProps: { global: globalRes},
  };
};

export default MyApp;
