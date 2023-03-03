import styles from "@/styles/components/textarea.module.scss";
import MarkdownBlock from "@/partials/MarkdownBlock";

const Textarea = ({ data }) => {
  const { text} = data
  return (
      text ? (
      <section className={styles.content}>
         <MarkdownBlock markdown={text} /> 
      </section>
      ) : null
  );
};

export default Textarea;
