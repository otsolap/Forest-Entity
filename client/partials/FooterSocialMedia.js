import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import useToggle from '@/hooks/useToggleState';
import ContactDetails from '@/partials/ContactDetails'

const FooterSocialMedia = ({  open, title, socialMedia }) => {
    const contentRef = useRef(null)
    const [active, setActive] = useToggle(open);
    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <div className={styles.column}>
            <button className={styles.button} onClick={toggleAccordion}>
                <div className={styles.wrapper}>
                    <div className={active ? `${styles.open}` : `${styles.closed}`}>
                        <div className={styles.flexBox}>
                            <h4 className={styles.heading}>
                                {title}
                            </h4>
                            <FontAwesomeIcon className={styles.icon} aria-label="Alatunnisteen lisätieto" icon={active ? faAngleUp : faAngleDown} />
                        </div>
                    </div>
                    <div ref={contentRef} className={active ? `${styles.content} ${styles.contentDivider}` : `${styles.content}`} >
                        <ContactDetails list={list} />
                    </div>
                </div>
            </button>
        </div>
    )
}

export default FooterSocialMedia