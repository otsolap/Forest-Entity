import styles from "@/styles/components/textarea.module.scss";
import MarkdownBlock from "@/partials/MarkdownBlock";

const Textarea = ({ data }) => {
  const { text} = data
  return (
      <section className={styles.content}>
        {text ? ( <MarkdownBlock markdown={text} /> ) : null}
      </section>
  );
};

export default Textarea;
