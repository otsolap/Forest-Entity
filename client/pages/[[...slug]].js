import { getDataDependencies } from "@/utils/api";
import {  getData } from "@/utils/index";
import Blocks from "@/components/Blocks";

const Pages = ({ pageData }) => {
  const blocks = pageData.blocks ?? [];
  return (
    <Blocks blocks={blocks} />
);
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  try {
    const data = getData(slug);
    const res = await fetch(data.data);
    const json = await res.json();

    if (!json.data.length) {
      console.log(`No page found for slug: ${slug}`);
    }
    
    const pageData = await getDataDependencies(json.data[0]?.attributes?.blocks ?? {});
    
    return {
      props: { pageData },
    };
  } catch (error) {
    console.log('Error: ' + error)
   }
}

export default Pages;