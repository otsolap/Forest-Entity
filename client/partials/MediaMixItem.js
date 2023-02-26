import styles from "@/styles/components/mediaMix.module.scss";
import Image from "next/image";
import Link from "next/link";
import MarkdownBlock from "@/partials/MarkdownBlock";
import YoutubeEmbed from "@/partials/YoutubeEmbed";

const MediaMixItem = ({ type, image, video, markdown}) => {
  return (
    <div className={styles.mediaMixColumn}>
      {type == "video" && video && (
        <div className={styles.videoContainer}>
          <YoutubeEmbed src={video} />
        </div>
      )}
      {type == "image" && image && (
        <figure className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={image}
            alt=""
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw,
            50vw"
          />
        </figure>
      )}
      {type == "markdown" && markdown && (
        <div className={styles.markdown}>
          <MarkdownBlock markdown={markdown} />
        </div>
      )}
    </div>
  );
};

export default MediaMixItem;
