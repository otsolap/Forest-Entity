import FooterColumn from "@/partials/FooterColumn";
import FooterSocialMedia from "@/partials/FooterSocialMedia";

const Footer = ({ footer }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.columnContainer}>
            Footer Columns x2 here + 1 social media
        </div>
        <div className="subFooter">
            subfooter here
        </div>
      </footer>
    </>
  );
};

export default Footer;
