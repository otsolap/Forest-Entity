import FooterColumn from "@/partials/FooterColumn";
import FooterSocialMedia from "@/partials/FooterSocialMedia";

const Footer = ({ footer }) => {
  console.log(footer.data.attributes)
  return (

    <>
      <footer className="test">
        <div className="test">
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
