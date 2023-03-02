import styles from "@/styles/components/mediaMix.module.scss";
import MediaMixItem from "@/partials/MediaMixItem";

const MediaMix = ({ data }) => {
    const { mediaMixColumns } = data
  return (
      <div className={styles.mediaMix}>
        <div className={styles.wrapper}>
          {mediaMixColumns.map((item, i) => {
            return (
              <MediaMixItem
                key={i}
                type={item.type}
                image={item.image}
                video={item.video}
                markdown={item.markdown}
                buttons={item.buttons}
              />
            );
          })}
        </div>
      </div>
  );
};

export default MediaMix;
