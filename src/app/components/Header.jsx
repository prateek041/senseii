import Image from 'next/image';

export default function Header() {
  return (
    <div className="header-container h-screen pt-10 px-10">
      <div className="header-internal-container h-full grid grid-cols-6 grid-rows-6 relative">
        <div className="header-side-image absolute w-full right-0 side-image-bg col-start-5 col-end-7 rounded-tr-3xl mt-5">
          <Image
            src="/side-image.png"
            width={400}
            height={400}
            alt="deisgn element"
          />
        </div>
        <div>
          <div className="header-logo">
            <Image
              src={'/logo.png'}
              width={150}
              height={300}
              alt="sensei logo"
            />
          </div>
        </div>
        <div className="header-main-content-container flex justify-between items-center row-start-2 row-end-6 col-span-6">
          <div className="header-text-content grid grid-cols-3 w-1/2">
            <div className="header-text-content-internal flex col-start-1 col-span-3 z-40 flex-col gap-2">
              <div className="header-3-people-image">
                <Image
                  src={'/3-image.png'}
                  width={300}
                  height={300}
                  alt="design-element"
                />
              </div>
              <div className="header-text-content row-start-4 text-6xl font-bold pl-4">
                <h2>
                  Personal AI companion, that will help you to be better
                  everyday
                </h2>
              </div>
              <div className="header-text-content-coming-soon-button">
                <button className="bg-black text-white w-2/5 mt-5 rounded-3xl py-3 ml-4">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
          <div className="header-phone-image z-40 mr-10">
            <Image
              src={'/iphone-11.png'}
              width={300}
              height={300}
              alt="iphone-11-mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
