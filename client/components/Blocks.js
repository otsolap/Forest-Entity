import Accordion from "@/components/blocks/Accordion";
import Banner from "@/components/blocks/Banner";
import BlogSection from "@/components/blocks/BlogSection";
import Cards from "@/components/blocks/Cards";
import Hero from "@/components/blocks/Hero";
import FooterColumn from "@/partials/FooterColumn";
import FooterSocialMedia from "@/partials/FooterSocialMedia";
import MediaMix from "@/components/blocks/MediaMix";
import Textarea from "@/components/blocks/Textarea";

const blocksComponents = {
  ComponentBlocksAccordion: Accordion,
  ComponentBlocksBanner: Banner,
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
