import Hero from "@/components/Blocks/Hero";

const blocksComponents = {
  ComponentBlocksHero: Hero,
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
