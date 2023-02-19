import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";

const ContactDetails = ({ list }) => {
  const contactInfo = list.map((contacts, i) => {
    return (
      <p className={styles.contactText} key={i}>
        {contacts.type === "email" ? (
          <Link
            className={styles.link}
            href={`mailto:${contacts.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              aria-label="Sähköposti"
              icon={faEnvelope}
              className={styles.socialIcon}
            />
            {contacts.title}
          </Link>
        ) : null}
        {contacts.type === "instagram" ? (
          <Link
            className={styles.link}
            href={contacts.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              aria-label="Instagram"
              icon={faInstagram}
              className={styles.socialIcon}
            />
            {contacts.title}
          </Link>
        ) : null}
      </p>
    );
  });

  return <>{contactInfo}</>;
};

export default ContactDetails;
