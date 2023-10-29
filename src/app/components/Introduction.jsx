import Image from 'next/image';
import Card from './Card';

export default function Introduction() {
  return (
    <div className="introduction-container h-screen px-10">
      <div className="introduction-content-container flex justify-between items-center h-full px-5">
        <div className="introduction-content-text w-1/2 flex flex-col justify-around h-4/5 items-start">
          <div className="introduction-content-text-top text-4xl">
            <p>
              Introducing <b>Sensei</b>
            </p>
            <p>
              Your <b>Personal</b> AI assistant
            </p>
          </div>
          <div className="introduction-content-text-bottom">
            <Image
              src="/workflow-design.png"
              width={500}
              height={400}
              alt="UX-iphone-mockup"
            />
          </div>
        </div>

        <div className="introduction-content-steps-container flex justify-center items-center w-3/5 h-4/5">
          <div className="introduction-content-step-content border-b border-black">
            <Card
              sup={'01'}
              main={'Install the Mobile Application'}
              secondary={'The app is available at iOS and Android devices'}
            />
            <Card
              sup={'02'}
              main={'Share your Health related data'}
              secondary={
                'Your health app words as a single source for all the relevvant health related data'
              }
            />
            <Card
              sup={'03'}
              main={'Start the Conversation'}
              secondary={
                'Sensei will take all of your information in consideration'
              }
            />
            <Card
              sup={'04'}
              main={'Regular Updates'}
              secondary={
                'Ask Sensei for regular progress updates, so you can always stay on track'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
