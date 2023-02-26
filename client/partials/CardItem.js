import styles from "@/styles/components/cards.module.scss";
import CustomImage from "@/partials/CustomImage";

const CardItem = ({ image, title, description, className }) => {
  return (
    <article className={`${styles.card} ${className ? className : null}`}>
      {image && (
        <figure className={styles.imageContainer}>
          <CustomImage
            image={image}
            className={styles.image}
          />
        </figure>
      )}
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p>{description}</p>}
    </article>
  );
};

export default CardItem;
