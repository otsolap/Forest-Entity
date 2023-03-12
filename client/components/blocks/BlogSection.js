import styles from "@/styles/components/blog.module.scss";
import BlogItem from "partials/BlogItem";
import CustomLink from "partials/CustomLink";

const BlogSection = ({ title, description, filter, blogs, link }) => {
  console.log(blogs);
  return (
      <section className={`${styles.section}`}>
        {title || description ? (
          <header className={styles.header}>
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </header>
        ): null}
        {blogs.data.length ? (
          <div className={styles.wrapper}>
            {blogs.data.map((item, i) => {
              return (
                <BlogItem
                  key={i}
                  image={item.attributes.image}
                  title={item.attributes.title}
                  description={item.attributes.description}
                  categories={item.attributes.categories}
                  publishedAt={item.attributes.publishedAt}
                />
              );
            })}
          </div>
        ): null}
        {link ? (
          <footer className={styles.linkWrapper}>
              <CustomLink link={link} />
          </footer>
        ): null}
      </section>
  );
};

export default BlogSection;
