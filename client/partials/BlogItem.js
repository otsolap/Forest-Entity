import styles from "@/styles/components/blogItem.module.scss";
import NextImage from "@/partials/NextImage";
import CustomLink from "./CustomLink";

const BlogItem = ({ image, title, description, category, publishedAt, link  }) => {
  return (
    <article className={styles.card}>
        <CustomLink link={link}>
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
        {category && <h4 className={styles.category}>{category}</h4>}
        {publishedAt && <p>{publishedAt}</p>}
        </footer>
        </CustomLink>
    </article>
  );
};

export default BlogItem;
