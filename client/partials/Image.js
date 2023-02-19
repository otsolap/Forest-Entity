import { getStrapiMedia } from "utils/media";
import Image from "next/image";

const Image = ({ image, width, height, sizes }) => {
  const { alt } = image.data.attributes;

  return (
    <Image
      src={getStrapiMedia(image)}
      alt={alt || ""}
      quality={100}
      width={width}
      height={height}
      priority
      sizes={sizes}
    />
  );
};

export default Image;