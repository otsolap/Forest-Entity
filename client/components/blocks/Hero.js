import React from "react";
import NextImage from "@/partials/NextImage"
import CustomLink from "@/partials/CustomLink";
import styles from "@/styles/components/hero.module.scss";
import YoutubeEmbed from "@/partials/YoutubeEmbed";

const Hero = ({ data }) => {
    const { image, alignContent, autoplay, buttons, media, mediaWidth, title, video, description } = data

  return (
      <section className={styles.hero}>
        <div
          className={`
          ${styles.mediaContainer} 
          ${alignContent == "left" ? styles.mediaLast : styles.mediaFirst} 
          ${media == "video" && mediaWidth ? styles.fullVideo : ""} 
          `}
        >
          {media == "image" && image.data ? (
            <>
              {mediaWidth ? (
                <NextImage
                  image={image}
                />
              ) : (
                <>
                  <NextImage
                    className="mobile-only"
                    image={image}
                  />
                  <NextImage
                    className="desktop-only"
                    image={image}
                  />
                </>
              )}
            </>
          ): null}
          {media == "video" && hero.video ? (
            <>
              <YoutubeEmbed
                autoplay={hero.autoplay ? hero.autoplay : null}
                className={styles.video}
                image={hero.video}
              />
            </>
          ): null}
        </div>
        <div
          className={`
          ${styles.contentContainer} 
          ${mediaWidth ? styles.bgTransparent : styles.bgDefault}
          ${alignContent == "left" ? styles.contentFirst : styles.contentLast} 
        `}
        >
          <div className={styles.content}>
            {title && <h1>{title}</h1>}
            {description && <h3>{description}</h3>}
            {buttons && (
              <div className={styles.buttonWrapper}>
                {buttons.map((button, i) => (
                  <CustomLink link={button} key={i} className={`btn`} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

  );
};

export default Hero;