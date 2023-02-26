import Link from "next/link";

const CustomLink = ({ link }) => {
  // use anchor fo external links
  if (link.isExternal) {
    return (
      <a href={link.href} target="_blank">
        {link.title}
      </a>
    )
  }

  if(link.target === '_blank') {
    return (
      <Link href={link.href} passHref>
        <a target="_blank">
          {link.title}
        </a>
      </Link>
    )
  }

  return <Link href={link.href}>{link.title}</Link>;
};

export default CustomLink;
