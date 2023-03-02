import styles from "@/styles/components/blogSection.module.scss";
import BlogItem from "partials/BlogItem";

const BlogSection = ({ data }) => {
  const { title, description, filter, blogs } = data
  return (
      <section className={`${styles.cards}`}>
        {title && (
          <header className={styles.header}>
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </header>
        )}
        {blogs && (
          <div className={styles.wrapper}>
            {blogs.data.map((item, i) => {
              return (
                <BlogItem
                  key={i}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  publishedAt={item.publishedAt}
                  link={item.link}
                />
              );
            })}
          </div>
        )}
      </section>
  );
};

export default BlogSection;
