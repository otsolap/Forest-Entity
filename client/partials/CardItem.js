import styles from "@/styles/components/cards.module.scss";
import NextImage from "@/partials/NextImage";

const CardItem = ({ image, title, description, className }) => {
  return (
    <article className={`${styles.card} ${className ? className : null}`}>
      {image.data ? (
        <figure className={styles.imageContainer}>
          <NextImage
            image={image}
            className={styles.image}
          />
        </figure>
      ): null}
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p>{description}</p>}
    </article>
  );
};

export default CardItem;
