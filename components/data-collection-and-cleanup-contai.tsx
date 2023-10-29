import type { NextPage } from "next";
import styles from "./data-collection-and-cleanup-contai.module.css";

const DataCollectionAndCleanupContai: NextPage = () => {
  return (
    <div className={styles.timeline}>
      <div className={styles.dataCollectionAnd}>
        Data collection and Cleanup
      </div>
      <div className={styles.fineTuningOnData}>Fine-Tuning on Data</div>
      <div className={styles.connectVectorDatabase}>
        Connect Vector database to implement RAG
      </div>
      <div
        className={styles.developMobileApplication}
      >{`Develop Mobile Application `}</div>
      <img className={styles.timelineStep1} alt="" src="/timeline-step-1.svg" />
      <img className={styles.timelineStep2} alt="" src="/timeline-step-2.svg" />
      <img className={styles.timelineStep3} alt="" src="/timeline-step-2.svg" />
      <img className={styles.timelineStep4} alt="" src="/timeline-step-2.svg" />
    </div>
  );
};

export default DataCollectionAndCleanupContai;
