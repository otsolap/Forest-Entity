import Blocks from "components/Blocks";
import styles from '@/styles/components/footer.module.scss'
import CustomLink from 'partials/CustomLink'

const Footer = ({ footer }) => {
  const global = footer.data.attributes
  console.log(global)
  return (
    <>
      <footer className={styles.footer}>
        {global.blocks.length ? (
           <div className={styles.columnContainer}>
              <Blocks blocks={global.blocks} />
          </div>
        ) : null}
        <div className={styles.subFooter}>
            <span>{global.subFooter.title} &#169; {new Date().getFullYear()}</span> 
            &#124;
            {global.subFooter.link ?  (
              <CustomLink link={global.subFooter.link} />
            ): null}
        </div>
      </footer>
    </>
  );
};

export default Footer;
