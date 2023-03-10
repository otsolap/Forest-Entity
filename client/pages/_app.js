import { createContext } from "react";
import App from "next/app";
import Error from "next/error";
// Store Strapi Global object in context
export const GlobalContext = createContext({});
import Layout from "@/components/Layout";
import { getGlobalData } from "utils/api";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  // extracting necessary data
  const { global } = pageProps
  if (global == null) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <GlobalContext.Provider value={global}>
        <Layout global={global}>
          <Component {...pageProps} />
        </Layout>
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
