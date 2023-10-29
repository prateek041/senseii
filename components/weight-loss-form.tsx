import type { NextPage } from "next";
import styles from "./weight-loss-form.module.css";

const WeightLossForm: NextPage = () => {
  return (
    <div className={styles.workflow}>
      <img className={styles.iphone11Icon} alt="" src="/iphone-11.svg" />
      <img
        className={styles.minimalistBlackBeigeTypograIcon}
        alt=""
        src="/minimalist-black-beige-typography-fashion-business-logo--2-removebgpreview-1@2x.png"
      />
      <div className={styles.chatsGroup}>
        <div className={styles.chat}>
          <img className={styles.chatChild} alt="" src="/rectangle-104.svg" />
          <div className={styles.yourCurrentWeight}>
            Your current weight is 90kgs, what is your target weight ?
          </div>
        </div>
        <div className={styles.chat1}>
          <img className={styles.chatChild} alt="" src="/rectangle-104.svg" />
          <div className={styles.yourCurrentWeight}>
            I want to be 80kgs, in the next 2 months.
          </div>
        </div>
        <div className={styles.chat2}>
          <img className={styles.chatInner} alt="" src="/rectangle-105.svg" />
          <div className={styles.sureSinceYou}>
            Sure, since you are vegan, here is a diet plan for you:
          </div>
        </div>
        <div className={styles.chat3}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-106.svg"
          />
          <div className={styles.iWantTo1}>I want to loose weight.</div>
        </div>
      </div>
      </div>
  );
};

export default WeightLossForm;
