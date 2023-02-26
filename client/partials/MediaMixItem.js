import styles from "@/styles/components/mediaMix.module.scss";
import CustomImage from "@/partials/CustomImage";
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
          <CustomImage
            image={image}
            className={styles.image}
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
