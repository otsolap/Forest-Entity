import styles from "@/styles/components/blogItem.module.scss";
import NextImage from "@/partials/NextImage";

const BlogItem = ({ image, title, description, category, publishedAt }) => {
  return (
    <article className={styles.card}>
        {image && (
            <figure className={styles.imageContainer}>
            <NextImage
                image={image}
                className={styles.image}
            />
            </figure>
        )}
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p>{description}</p>}
        <footer>
        {categories ? (
          <>
          {categories.data.map((item, i) => {
            return (
              <h4 key={i} className={styles.category}>{item.attributes.title}</h4>
            )
          })}
          </>
        ): null}
        {publishedAt && <p>{publishedAt}</p>}
        </footer>
    </article>
  );
};

export default BlogItem;
