import styles from "@/styles/components/cards.module.scss";
import CardItem from "@/partials/CardItem";

const Cards = ({ data }) => {
  const { title, description, cards } = data
  terve teppo!!!!
  return (
      <section className={`${styles.cards}`}>
        {title && (
          <header className={styles.header}>
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </header>
        )}
        {cards && (
          <div className={styles.wrapper}>
            {cards.map((item, i) => {
              return (
                <CardItem
                  key={i}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        )}
      </section>
  );
};

export default Cards;
