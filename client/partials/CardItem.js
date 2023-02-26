import styles from "@/styles/components/cards.module.scss";
import Image from "next/image";

const CardItem = ({ image, title, description, className }) => {
  return (
    <article className={`${styles.card} ${className ? className : null}`}>
      {image && (
        <figure className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={image}
            alt=""
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw,
            33vw"
          />
        </figure>
      )}
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p>{description}</p>}
    </article>
  );
};

export default CardItem;
