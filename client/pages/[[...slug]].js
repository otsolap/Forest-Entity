import Error from "next/error";
import { fetchAPI, getPageData } from "@/utils/api";
import Blocks from "components/Blocks";

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

const DynamicPage = ({ blocks }) => {
  // check if the required data was provided
  if (!blocks?.length) {
    return <Error statusCode={404} />;
  }

  return (
      <Blocks blocks={blocks} />
  );
};

export async function getStaticPaths() {
  // Get all pages from Strapi
  const pages = await fetchAPI("/pages", {
    fields: ["slug"],
  })

  const paths = pages.data.map((page) => {
    const { slug } = page.attributes;
    // Decompose the slug that was saved in Strapi
    const slugArray = !slug ? false : slug.split("/")
    return { 
      params: { slug: slugArray } 
    }
  })

  return { 
    paths: paths, 
    fallback: true
  };
} 

export async function getStaticProps(context) {
  const { slug } = context.params;
  // fetch Pages
  const pageData = await getPageData({
    // can we refactor this without resoorting to '/' + start?
    // slugArray cuts out the / but we should try nested pages before refactor???
    slug: '/' + (!slug ? [""] : slug).join("/")
  })
 
  if (pageData == null) {
    // 404 if no props
    return { props: {} }
  }

  // put the data to the components
  const { blocks } = pageData.attributes

  return {
    props: {
        blocks: blocks,
    }
  }

}

export default DynamicPage;
