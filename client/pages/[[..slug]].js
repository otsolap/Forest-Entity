import Error from "next/error";
import { fetchAPI, getGlobalData, getPageData } from "util/api";
import Blocks from "components/Blocks";
import Meta from "components/Meta";
import Layout from "@/components/Layout";
import { fetchAPI } from "@/util/api";
import { useRouter } from "next/router";

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

const DynamicPage = ({ blocks, meta, global, pageContext }) => {
  const router = useRouter();

  // check if the required data was provided
  if (!router.isFallback && !blocks.length) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout global={global} pageContext={pageContext}>
      <Blocks blocks={blocks} />
    </Layout>
  );
};

export async function getStaticPaths(context) {
  // Gwt all pages from Strapi
  const pages = await context.reduce(async (currentPagesPromise) => {
    const currentPages = await currentPagesPromise;
    const pageData = await fetchAPI("/pages", {
      field: "slug",
    });
    return [...currentPages, ...pageData.data];
  }, Promise.resolve([]));
  const paths = pages.map((page) => {
    const { slug } = page.attributes;
    // Decompose slug that was saved in Strapi
    const slugArray = !slug ? false : slug.split("/");

    return {
      params: {
        slug: slugArray,
      },
    };
  });
  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const { params } = context;

  const global = await getGlobalData();
  // fetch Pages
  const pageData = await getPageData({
    slug: (!params.slug ? [""] : params.slug).join("/"),
  });

  if (pageData == null) {
    // 404 if no props
    return { props: {} };
  }

  // put th data to the components
  const { blocks, slug} = pageData.attributes

  const pageContext = {
    slug,
  }

  return {
    props: {
        blocks: blocks,
        global: global.data,
        pageContext: {
            ...pageContext,
        }
    }
  }

}

export default DynamicPage;
