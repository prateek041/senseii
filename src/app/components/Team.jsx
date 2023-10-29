import PersonCard from './PersonCard';
import Contact from './Contact';

export default function Team() {
  return (
    <div className="team-container gap-y-10 h-screen px-10 flex flex-col justify-around">
      <div className="team-container flex flex-col justify-around items-center gap-y-10">
        <div className="text-4xl">
          We are Engineering Undergrads, help us <b>Building</b> it
        </div>
        <div className="flex flex-col gap-y-10 items-center w-full">
          <p className="text-4xl">
            Meet the <b> Engineering Team</b>
          </p>
          <div className="flex justify-center items-center w-full">
            <PersonCard
              name={'Prateek Singh'}
              link={'https://www.prateeksingh.tech'}
              image={'prateek.jpeg'}
            />
            <PersonCard
              name={'Pragya Srivastava'}
              link={'https://itspragya.netlify.app/'}
              image={'pragya.jpeg'}
            />
            <PersonCard
              name={'Lokesh Srivastava'}
              link={'https://www.linkedin.com/in/lokesh-srivastava-8465a5213/'}
              image={'lokesh.jpeg'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
