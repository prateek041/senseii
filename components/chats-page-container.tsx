import type { NextPage } from "next";
import styles from "./chats-page-container.module.css";

const ChatsPageContainer: NextPage = () => {
  return (
    <div className={styles.chatsPage1}>
      <div className={styles.chat}>
        <img className={styles.chatChild} alt="" src="/rectangle-10.svg" />
        <div className={styles.youHitYour}>
          You hit your workout goals yesterday, and with the progress of past 3
          weeks, you have lost 3 kgs, great Progress !
        </div>
      </div>
      <div className={styles.chat1}>
        <img className={styles.chatItem} alt="" src="/rectangle-101.svg" />
        <div className={styles.youHitYour}>How does today look like ?</div>
      </div>
      <div className={styles.chat2}>
        <img className={styles.chatInner} alt="" src="/rectangle-102.svg" />
        <div className={styles.todayIsTuesdayContainer}>
          <p className={styles.todayIsTuesday}>
            Today is Tuesday, Start your day with a light walk of 30 mins.
          </p>
          <p className={styles.todayIsTuesday}>&nbsp;</p>
          <p className={styles.thenYouCan}>
            Then you can start working around 11, and get free around 5.
          </p>
        </div>
        <div className={styles.hitTheGym}>
          Hit the Gym at 6, for an hour. After which you have 4 hours to work on
          your side project, Top Crew
        </div>
      </div>
      <div className={styles.chat3}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-103.svg" />
        <div className={styles.senseiHowWell}>
          Sensei, How well I did yesterday
        </div>
      </div>
    </div>
  );
};

export default ChatsPageContainer;
