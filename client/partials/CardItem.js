import styles from "@/styles/components/cards.module.scss";
import NextImage from "@/partials/NextImage";

const CardItem = ({ image, title, description, className }) => {
  return (
    <article className={`${styles.card} ${className ? className : ''}`}>
      {image.data ? (
        <figure className={styles.imageContainer}>
          <NextImage
            image={image}
            className={styles.image}
          />
        </figure>
      ): null}
      {title || description ? (
        <div className={styles.body}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p>{description}</p>}
        </div>
        ): null}

    </article>
  );
};

export default CardItem;
