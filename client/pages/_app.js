import App from "next/app";
import Error from "next/error";
import Layout from "@/components/Layout";
import { createContext } from "react";
import { fetchAPI } from "@/util/api";
import { getStrapiMedia } from "@/util/media";
import "../styles/globals.scss";
config.autoAddCss = false;

// Store Strapi global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  if (global == null) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <Layout>
        <GlobalContext.Provider value={global.attributes}>
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      navigation: {
        populate: "*",
      },
      footer: {
        populate: "*",
      },
    },
  });

  return {
    ...appProps,
    pageProps: { global: globalRes.data },
  };
};

export default MyApp;
