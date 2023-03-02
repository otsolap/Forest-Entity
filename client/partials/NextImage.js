import { getStrapiMedia } from "utils/media";
import Image from "next/image";

const NextImage = ({ image, className }) => {
  if(image.data === null || image.data.length === 0 || image.data === undefined) {
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
        className={className || ''}
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
      className={className || ''}
    />
  );
};

export default NextImage;