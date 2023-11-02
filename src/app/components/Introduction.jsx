import Image from 'next/image';
import Card from './Card';

export default function Introduction() {
  return (
    <div className="introduction-container min-h-screen px-5 sm:px-10"> {/* Added min-h-screen and sm:px-10 for better responsiveness */}
      <div className="introduction-content-container flex flex-col sm:flex-row justify-between items-center h-full">
        <div className="introduction-content-text w-full sm:w-1/2 flex flex-col justify-around h-4/5 items-start sm:items-center"> {/* Adjusted width and alignment for responsiveness */}
          <div className="introduction-content-text-top text-3xl sm:text-4xl"> {/* Adjusted text size for responsiveness */}
            <p>
              Introducing <b>Sensei</b>
            </p>
            <p>
              Your <b>Personal</b> AI assistant
            </p>
          </div>
          <div className="introduction-content-text-bottom mt-5 sm:mt-0"> {/* Adjusted margin for responsiveness */}
            <Image
              src="/workflow-design.png"
              width={500}
              height={400}
              alt="UX-iphone-mockup"
            />
          </div>
        </div>

        <div className="introduction-content-steps-container w-full sm:w-3/5 h-4/5"> {/* Adjusted width for responsiveness */}
          <div className="introduction-content-step-content border-b border-black">
            <Card
              sup={'01'}
              main={'Install the Mobile Application'}
              secondary={'The app is available on iOS and Android devices'} 
            />
            <Card
              sup={'02'}
              main={'Share your Health-related data'}
              secondary={
                'Your health app works as a single source for all the relevant health-related data'
              }
            />
            <Card
              sup={'03'}
              main={'Start the Conversation'}
              secondary={
                'Sensei will take all of your information into consideration'
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
