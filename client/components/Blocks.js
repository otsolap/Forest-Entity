import Hero from './blocks/Hero';

const getBlockComponent = ({ __component, ...rest }, index) => {
  console.log('hello from component blocks.js')
  let Block;

  switch (__component) {
    case 'blocks.hero':
      Block = Hero;
      break;
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const Blocks = ({ blocks }) => {
  return <div>{blocks.map(getBlockComponent)}</div>;
};

export default Blocks;