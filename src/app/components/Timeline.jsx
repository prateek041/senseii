import Image from 'next/image';
import Card from './Card';

export default function Timeline() {
  return (
    <div className="timeline-container h-screen px-10">
      <div className="timeline-content-container flex justify-between items-center px-5">
        <div className="timeline-content-container-left w-1/2 flex flex-col justify-center gap-y-10 h-3/5">
          <div className="timeline-content-container-left-top">
            <p className="text-4xl">
              How we <b>Plan</b> to do it
            </p>
          </div>
          <div className="timeline-content-container-left-bottom max-h-2/3 border-b border-black">
            <Card
              sup={'01'}
              main={'Pick an LLM fine-tuned for chat use-case'}
              secondary={'We plan to work with Llama-2-chat-7B'}
            />
            <Card
              sup={'02'}
              main={'Fine-tuning'}
              secondary={
                'Fine-tuning it on health and fitness related, High quality and Low quantity data.'
              }
            />
            <Card
              sup={'03'}
              main={'Using RAG to get relevant data.'}
              secondary={
                'RAG will be used to fetch user-specific data for the personalized experience'
              }
            />
            <Card
              sup={'04'}
              main={'Agent'}
              secondary={
                'Giving it access to tools like calculator and web browsing, to overcome the intrinsic drawbacks.'
              }
            />
          </div>
        </div>
        <div className="timeline-content-container-right  w-1/2 h-full flex flex-col justify-center items-center">
          <Image
            src="/timeline.png"
            width={180}
            height={180}
            alt="image of the workflow"
          />
        </div>
      </div>
    </div>
  );
}
