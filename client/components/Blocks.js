import Hero from '@/components/Blocks/Hero'

const blocksComponents = {
    ComponentBlocksHero: Hero,
}

const Blocks = ({ blocksData }) => {
    const BlocksComponent = blocksComponents[blocksData.__typename]

    if (!BlocksComponent) {
        return null
    }

    return <BlocksComponent data={blocksData} />
}

export default Blocks