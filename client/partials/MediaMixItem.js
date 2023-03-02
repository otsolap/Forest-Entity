import styles from "@/styles/components/mediaMix.module.scss";
import NextImage from "@/partials/NextImage";
import MarkdownBlock from "@/partials/MarkdownBlock";
import YoutubeEmbed from "@/partials/YoutubeEmbed";

const MediaMixItem = ({ type, image, video, markdown}) => {
  return (
    <div className={styles.mediaMixColumn}>
      {type == "video" && video ? (
        <div className={styles.videoContainer}>
          <YoutubeEmbed src={video} />
        </div>
      ): null}
      {type == "image" && image.data.length ? (
        <figure className={styles.imageContainer}>
          <NextImage
            image={image}
            className={styles.image}
          />
        </figure>
      ): null}
      {type == "markdown" && markdown && (
        <div className={styles.markdown}>
          <MarkdownBlock markdown={markdown} />
        </div>
      )}
    </div>
  );
};

export default MediaMixItem;
