import React, { useEffect, useRef } from "react";
import styles from "./Loadding.module.scss";

function Loadding() {
  const loaderRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      if (loaderRef.current) {
        loaderRef.current.classList.add(styles.loaderHidden);
        loaderRef.current.addEventListener("transitionend", () => {
          if (loaderRef.current) {
            loaderRef.current.remove();
          }
        });
      }
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div>
      <div ref={loaderRef} className={styles.loader}></div>
      <div className={styles.overlay}></div>
    </div>
  );
}

export default Loadding;
