import type { NextPage } from "next";
import AICompanionContainer from "../components/a-i-companion-container";
import SupportUsContainer from "../components/support-us-container";
import FormContainer from "../components/form-container";
import ChatsPageContainer from "../components/chats-page-container";
import styles from "./index.module.css";

const Page1: NextPage = () => {
  return (
    <div className={styles.page1}>
      <div className={styles.background}>
        <div className={styles.backgroundChild} />
        <div className={styles.backgroundItem} />
      </div>
      <AICompanionContainer />
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <div className={styles.comingSoon}>
        <div className={styles.comingSoonChild} />
        <div className={styles.comingSoonItem} />
        <div className={styles.comingSoon1}>Coming Soon</div>
        <img className={styles.futureIcon} alt="" src="/future@2x.png" />
      </div>
      <SupportUsContainer
        gitHub="/github@2x.png"
        twitterX="/twitterx@2x.png"
        propTop="140px"
        propLeft="697px"
      />
      <img className={styles.sideImageIcon} alt="" src="/side-image@2x.png" />
      <div className={styles.iphone11ProXMockup}>
        <FormContainer />
        <img
          className={styles.innerFramePlaceScreenInsi}
          alt=""
          src="/inner-frame-place-screen-inside-this.svg"
        />
        <div className={styles.iphoneUi}>
          <div className={styles.sendMessage}>
            <div className={styles.sendMessageChild} />
            <div className={styles.sendMessageItem} />
            <img
              className={styles.paperPlaneIcon}
              alt=""
              src="/paper-plane@2x.png"
            />
          </div>
          <ChatsPageContainer />
        </div>
      </div>
    </div>
  );
};

export default Page1;
