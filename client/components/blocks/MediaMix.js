import styles from "@/styles/components/mediaMix.module.scss";
import MediaMixItem from "@/partials/MediaMixItem";

const MediaMix = ({ mediaMixItems }) => {
  console.log(mediaMixItems);
  return (
      <div className={styles.mediaMix}>
        <div className={styles.wrapper}>
          {mediaMixItems ? mediaMixItems.map((item, i) => {
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
          }): null}
        </div>
      </div>
  );
};

export default MediaMix;
