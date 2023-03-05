import styles from "@/styles/components/banner.module.scss";
import MarkdownBlock from "@/partials/MarkdownBlock";
import NextImage from "@/partials/NextImage";
import CustomLink from "@/partials/CustomLink";

const Banner = ({ data }) => {
  const { title, description, image, button, selectTheme } = data
  return (
      <section className={`${styles.banner} bg-${selectTheme}`}>
        {image.data && (
          <figure className={styles.imageContainer}>
            <NextImage
              className={styles.image}
              image={image}
            />
          </figure>
        )}
        {title || description ? (
        <div className={styles.content}>
          {title && (
            <h2 className={styles.title}>{title}</h2>
          )}
          {description && <MarkdownBlock markdown={description} />}
        </div>
        ): null}
        {button && (
          <footer className={styles.buttonWrapper}>
              <CustomLink link={button} className={`button button--${button.selectTheme}`}  />
          </footer>
        )}
      </section>
  );
};

export default Banner;
