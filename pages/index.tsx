import type { NextPage } from "next";
import AICompanionContainer from "../components/a-i-companion-container";
import SupportUsContainer from "../components/support-us-container";
import FormContainer from "../components/form-container";
import ChatsPageContainer from "../components/chats-page-container";
import styles from "./index.module.css";
import WeightLossForm from "../components/weight-loss-form";
import DataCollectionAndCleanupContai from "../components/data-collection-and-cleanup-contai";

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
      <div className={styles.page2}>
      <div className={styles.page2Child} />
      <div className={styles.page2Item} />
      <div className={styles.workflowDesign}>
        <div className={styles.workflowDesignChild} />
        <WeightLossForm />
      </div>
      <div className={styles.stepsLine}>
        <div className={styles.stepsLineChild} />
        <div className={styles.stepsLineItem} />
        <div className={styles.stepsLineInner} />
        <div className={styles.lineDiv} />
        <div className={styles.stepsLineChild1} />
        <div className={styles.steps}>
          <div className={styles.flowStep4}>
            <div className={styles.div}>04</div>
            <div className={styles.askSenseiFor}>
              Ask Sensei, for regular progress updates, so you can always stay
              on track.
            </div>
            <div className={styles.regularUpdates}>Regular Updates.</div>
          </div>
          <div className={styles.flowStep3}>
            <div className={styles.flowStep31}>
              <div className={styles.div1}>03</div>
              <div className={styles.startTheConversation}>
                Start the conversation.
              </div>
            </div>
            <div className={styles.senseiWillTake}>
              Sensei will take all of your information in consideration.
            </div>
          </div>
          <div className={styles.flowStep2}>
            <div className={styles.div2}>02</div>
            <div className={styles.yourHealthApp}>
              Your health app works as a single-source for all the relevant
              health related data.
            </div>
            <div className={styles.shareYourHealth}>
              Share your Health related data.
            </div>
          </div>
          <div className={styles.flowStep1}>
            <div className={styles.theAppIs}>
              The app is available in iOS as well as android
            </div>
            <div className={styles.installTheMobile}>
              Install the Mobile Application
            </div>
            <div className={styles.div3}>01</div>
          </div>
        </div>
      </div>
      <div className={styles.introduction}>
        <div className={styles.introducingSensei}>
          <span className={styles.introducing}>Introducing</span>
          <span>{` `}</span>
          <b>Sensei,</b>
        </div>
        <div className={styles.yourPersonalAiContainer}>
          <span className={styles.introducing}>{`Your `}</span>
          <b>Personal</b>
          <span className={styles.introducing}> AI assistant</span>
        </div>
      </div>
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
    </div>
    <div>
      hello hii
    </div>

    
    </div>
    
  );
};



// Path: pages/index.tsx



export default Page1;
