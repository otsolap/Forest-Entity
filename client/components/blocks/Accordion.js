import AccordionItem from "@/partials/AccordionItem";
import NextImage from "partials/NextImage";
import styles from "@/styles/components/accordion.module.scss";

const Accordion = ({ image, faqs}) => {
  return (
    <section className={styles.accordion}>
      <div className={styles.container}>
          {image && (
            <figure className={styles.imgContainer}>
              <NextImage className={styles.image} image={image} />
            </figure>
          )}
          {faqs.data && (
              <div className={styles.content}>
                {faqs.data.map((item, i) => (
                    <AccordionItem key={i} {...item.attributes} />
                ))}
            </div>
          )}
      </div>
    </section>
  )
}

export default Accordion