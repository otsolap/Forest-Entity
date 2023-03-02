import BlogSection from "./blocks/BlogSection";
import Cards from "@/components/blocks/Cards";
import Hero from "@/components/blocks/Hero";
import FooterColumn from "@/components/navigation/FooterColumn";
import FooterSocialMedia from "@/components/navigation/FooterSocialMedia";
import MediaMix from "@/components/blocks/MediaMix";
import Textarea from "@/components/blocks/Textarea";

const blocksComponents = {
  ComponentBlocksBlogs: BlogSection,
  ComponentBlocksCards: Cards,
  ComponentBlocksHero: Hero,
  ComponentUtilFooterColumn: FooterColumn,
  ComponentUtilFooterSocialMedia: FooterSocialMedia,
  ComponentBlocksMediaMix: MediaMix,
  ComponentBlocksTextArea: Textarea,
};

const Block = ({ blocksData }) => {
  const BlocksComponent = blocksComponents[blocksData.__typename];

  if (!BlocksComponent) {
    return null;
  }

  return <BlocksComponent data={blocksData} />;
};

const Blocks = ({ blocks }) => {
  return (
    <>
      {blocks.map((block) => (
        <Block blocksData={block} key={`${block.__typename}${block.id}`} />
      ))}
    </>
  );
};

export default Blocks;
