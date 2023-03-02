import Link from "next/link";

const CustomLink = ({ link, className }) => {
  // null identifier
  if(link.href === null || link.href === undefined || link.href.length === 0) {
    return
  }

  // use anchor fo external links
  if (link.isExternal) {
    return (
      <a href={link.href} className={className || ''} target="_blank">
        {link.title}
      </a>
    )
  }

  if(link.target === '_blank') {
    return (
      <Link href={link.href} passHref className={className || ''}>
        <a target="_blank">
          {link.title}
        </a>
      </Link>
    )
  }

  return <Link href={link.href}>{link.title}</Link>;
};

export default CustomLink;
