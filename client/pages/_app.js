import App from "next/app";
import Error from "next/error";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { createContext } from "react";
import { getGlobalData } from "utils/api";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  // extracting necessary data
  const { global } = pageProps;
  if (global == null) {
    return <Error statusCode={404} />;
  }

  return (
    <>
    <GlobalContext.Provider value={global.attributes}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
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
