import Hero from '@/components/blocks/Hero';
import Accordion from '@/components/blocks/Accordion';
import Banner from '@/components/blocks/Banner';
import BlogSection from '@/components/blocks/BlogSection';
import Cards from '@/components/blocks/Cards';
import Mediamix from '@/components/blocks/Mediamix';
import FooterColumn from '@/partials/FooterColumn';
import FooterSocialMedia from '@/partials/FooterSocialMedia';

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.hero':
      Block = Hero;
      break;
    case 'blocks.accordion':
      Block = Accordion;
      break;
    case 'blocks.banner':
      Block = Banner;
      break;
    case 'blocks.blogs':
      Block = BlogSection;
      break;
    case 'blocks.cards':
      Block = Cards;
      break;
    case 'blocks.media-mix':
      Block = Mediamix;
      break;
    case 'util.footer-column':
     Block = FooterColumn;
     break;
    case 'util.footer-social-media':
     Block = FooterSocialMedia;
     break;
    default:
      console.log(`No component found for: ${__component}`)
      break;
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const Blocks = ({ blocks }) => {
  return <div>{blocks.map(getBlockComponent)}</div>;
};

export default Blocks;