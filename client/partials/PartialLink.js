import Link from "next/link";

const PartialLink = ({ link }) => {
  // use anchor fo external links
  if (isExternal) {
    <a href={link.url} target="_blank">
      Test 2
    </a>;
  }

  return <Link href={link.url}>Test</Link>;
};

export default PartialLink;
