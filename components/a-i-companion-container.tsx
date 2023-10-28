import type { NextPage } from "next";
import SupportUsContainer from "./support-us-container";
import styles from "./a-i-companion-container.module.css";

const AICompanionContainer: NextPage = () => {
  return (
    <div className={styles.intro}>
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.personalAiCompanionContainer}>
        <span>{`Personal AI `}</span>
        <span className={styles.companion}>companion</span>
        <span>, that will help you to be better everyday</span>
      </div>
      <SupportUsContainer gitHub="/github@2x.png" twitterX="/twitterx@2x.png" />
    </div>
  );
};

export default AICompanionContainer;
