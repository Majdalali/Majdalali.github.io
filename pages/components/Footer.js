import styles from "../../styles/Footer.module.scss";
import clsx from "clsx";

const Footer = () => {
  return (
    <>
      <div
        className={clsx(
          styles.footerBg,
          "  border-[10px] w-full  border-t-0 border-black flex-row flex  "
        )}
      >
        <div
          className={clsx(
            styles.leftFoot,
            " leftFoot  w-1/2 border-black  flex items-center pl-20 py-7"
          )}
        >
          <span className={styles.claim}>
            Copyright © Majd Alali 2022 All Rights Reserved{" "}
          </span>
        </div>
        <div
          className={clsx(
            styles.rightFoot,
            "rightFoot border-l-[10px] bg-black w-1/2 px-10 flex flex-row justify-center items-center  border-black"
          )}
        >
          <div className={clsx(styles.blogLeft, "")}>
            <span>Recent Post</span>
          </div>
          <div
            className={clsx("text-center select-none text-3xl ", styles.soon)}
          >
            <span>SOON</span>
          </div>
          <div className={styles.blogRight}></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
