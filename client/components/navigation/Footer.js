import Blocks from "components/Blocks";
import CustomLink from 'partials/CustomLink'

const Footer = ({ footer }) => {
  const global = footer.data.attributes
  console.log(global)
  return (
    <>
      <footer className="test">
        {global.blocks.length ? (
          <div className="test">
              <Blocks blocks={global.blocks} />
          </div>
        ) : null}
        <div className="subFooter">
            {global.subFooter.title} &#169; {new Date().getFullYear()} &#124;
            {global.subFooter.link ?  (
              <CustomLink link={global.subFooter.link} />
            ): null}
        </div>
      </footer>
    </>
  );
};

export default Footer;
