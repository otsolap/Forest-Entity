import styles from "@/styles/components/blogItem.module.scss";
import NextImage from "@/partials/NextImage";

const BlogItem = ({ image, title, description, categories, publishedAt }) => {
  return (
    <article className={styles.card}>
        {image.data.length ? (
            <figure className={styles.imageContainer}>
              <NextImage
                  image={image}
                  className={styles.image}
              />
            </figure>
        ): null}
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p>{description}</p>}
        {categories.data || publishedAt ? (
          <footer className={styles.footer}>
            {categories.data &&
              <h4 className={styles.category}>{categories.data.attributes.title}</h4>
            }
          {publishedAt && <p>{publishedAt}</p>}
          </footer>
        ): null}
    </article>
  );
};

export default BlogItem;
