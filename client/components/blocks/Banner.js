import styles from "@/styles/components/banner.module.scss";
import MarkdownBlock from "@/partials/MarkdownBlock";
import NextImage from "@/partials/NextImage";
import CustomLink from "@/partials/CustomLink";

const Banner = ({ data }) => {
  console.log(data)
  const { title, description, image, button } = data
  return (
      <section className={styles.highlight}>
        {image.data ? (
          <figure className={styles.imageContainer}>
            <NextImage
              className={styles.image}
              image={image}
            />
          </figure>
        ): null}
        <div className={styles.content}>
          {title && (
            <h2 className={styles.title}>{title}</h2>
          )}
          {description && <MarkdownBlock markdown={description} />}
        </div>
        {button && (
          <footer className={styles.buttonWrapper}>
              <CustomLink link={button}>
                {button.title}
              </CustomLink>
          </footer>
        )}
      </section>
  );
};

export default Banner;
