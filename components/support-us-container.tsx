import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./support-us-container.module.css";

type SupportUsContainerType = {
  gitHub?: string;
  twitterX?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const SupportUsContainer: NextPage<SupportUsContainerType> = ({
  gitHub,
  twitterX,
  propTop,
  propLeft,
}) => {
  const supportUsStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.supportUs} style={supportUsStyle}>
      <div className={styles.supportUsChild} />
      <img className={styles.githubIcon} alt="" src={gitHub} />
      <img className={styles.twitterxIcon} alt="" src={twitterX} />
      <div className={styles.supportUs1}>Support us</div>
    </div>
  );
};

export default SupportUsContainer;
