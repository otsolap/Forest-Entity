import { getStrapiMedia } from "utils/media";
import Image from "next/image";

const CustomImage = ({ image }) => {
  // null identifer
  if(image.data === null) {
    return
  }
  
  const { url, width, height, alternativeText} = image.data.attributes;

  if(width && height) {
    return (
      <Image 
        src={getStrapiMedia(url)}
        alt={alternativeText || ""}
        width={width}
        height={height}
        priority
        quality={100}
      />
    )
  }

  return (
    <Image
      src={getStrapiMedia(url)}
      alt={alternativeText || ""}
      quality={100}
      fill
      priority
      sizes="100vw"
    />
  );
};

export default CustomImage;