import Image from 'next/image';
import Link from 'next/link';

export default function Team() {
  return (
    <div className="team-container gap-y-10 h-screen px-10 flex flex-col justify-around">
      <div className="team-container flex flex-col justify-around items-center gap-y-10">
        <div className="text-4xl">
          We are Engineering Undergrads, help us <b>Building</b> it
        </div>
        <div className="flex flex-col gap-y-20 items-center w-full">
          <p className="text-4xl">
            Meet the <b> Engineering Team</b>
          </p>
          <div className="flex justify-center items-center w-full gap-x-5">
            {/* This is prateek's card */}
            <div className="team-prateek">
              <div className="flex flex-col">
                <Image
                  className="rounded-lg"
                  src="/prateek-final.jpg"
                  width={300}
                  height={300}
                  alt="prateek's avatar"
                />
                <div>
                  <div>
                    <h1>Prateek Singh</h1>
                    <Link
                      href={'https://www.prateeksingh.tech/'}
                      target="blank"
                    >
                      <div>Contact me</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* This is Pragya's card */}
            <div className="team-pragya">
              <div className="flex flex-col">
                <Image
                  className="rounded-lg"
                  src="/pragya1.jpg"
                  width={300}
                  height={300}
                  alt="pragya's avatar"
                />
                <div>
                  <div>
                    <h1>Pragya Srivastava</h1>
                    <Link href={'phttps://itspragya.netlify.app/'}>
                      <div>Contact me</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* This is Lokesh's card */}
            <div className="team-lokesh">
              <div className="flex flex-col">
                <Image
                  className="rounded-lg"
                  src="/lokesh.jpg"
                  width={300}
                  height={300}
                  alt="prateek's avatar"
                />
                <div>
                  <div>
                    <h1>Lokesh Srivastava</h1>
                    <Link href={'https://portfolio-lokeshsri11.vercel.app/'}>
                      <div>Contact me</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
