import Error from "next/error";
import { fetchAPI, getPageData } from "@/utils/api";
import Blocks from "components/Blocks";
import Meta from "components/Meta";
import { useRouter } from "next/router";


// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

const DynamicPage = ({ blocks, meta, pageContext }) => {
  const router = useRouter();

  // check if the required data was provided
  if (!router.isFallback && !blocks?.length) {
    return <Error statusCode={404} />;
  }

  return (
      <Blocks blocks={blocks} />
  );
};

// alternative from chatgpt:
export async function getStaticPaths() {
  // Get all pages from Strapi
  const pages = await fetchAPI("/pages", {
    fields: ["slug"],
  });

  const paths = pages.data.map((page) => {
    const { slug } = page.attributes;
    // Decompose the slug that was saved in Strapi
    const slugArray = !slug ? false : slug.split("/");
    return {
      params: { slug: slugArray },
    };
  });

  return { paths, fallback: true };
} 

export async function getStaticProps(context) {
  const { params } = context;
  // fetch Pages
  const pageData = await getPageData({
   /*  slug: (!params.slug ? [""] : params.slug).join("/") */
   slug: "/about"
  });

  if (pageData == null) {
    // 404 if no props
    return { props: {} };
  }

  // put the data to the components
  const { blocks, slug} = pageData.attributes

  return {
    props: {
        blocks: blocks,
    }
  }

}

export default DynamicPage;
