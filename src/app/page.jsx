import Header from './components/Header';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';

export default function Home() {
  return (
    <main className="bg-white mx-8 mt-8 rounded-t-3xl">
      <div>
        <Header />
        <Introduction />
        <Timeline />
      </div>
    </main>
  );
}
