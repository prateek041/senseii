import Card from './Card';

export default function Features() {
  return (
    <div className="h-screen flex flex-col my-5 py-5">
      <h1 className="text-4xl my-5 font-semibold">Things it can do</h1>
      <div className="flex justify-center items-center h-full gap-2">
        <Card main={'Fitness Coach'} secondary={'Everything fitness related'} />
        <Card
          main={'Daily Progress Tracking'}
          secondary={'Live progress tracking'}
        />
        <Card
          main={'AI based auto-adjustment'}
          secondary={
            'Missed a workout ?  Senseii will re-calculate things for you'
          }
        />
      </div>
    </div>
  );
}
