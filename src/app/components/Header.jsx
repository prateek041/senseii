import Image from 'next/image';

export default function Header() {
  return (
    <div className="header-container min-h-screen pt-10 px-5 sm:px-10"> {/* Added min-h-screen and sm:px-10 for better responsiveness */}
      <div className="header-internal-container h-full grid grid-cols-6 grid-rows-6 relative">
        <div className="header-side-image absolute w-full right-0 side-image-bg col-start-5 col-end-7 rounded-tr-3xl mt-5">
          <Image
            src="/side-image.png"
            width={400}
            height={400}
            alt="design element"
          />
        </div>
        <div className="col-span-6 row-span-1 sm:col-span-2 sm:row-span-2"> {/* Added sm:col-span-2 and sm:row-span-2 */}
          <div className="header-logo">
            <Image
              src={'/logo.png'}
              width={150}
              height={300}
              alt="sensei logo"
            />
          </div>
        </div>
        <div className="header-main-content-container flex justify-between items-center row-span-5 col-span-6 sm:row-span-4"> {/* Adjusted row-span and added sm:row-span */}
          <div className="header-text-content w-full sm:w-1/2"> {/* Adjusted width for responsiveness */}
            <div className="header-text-content-internal flex flex-col gap-2">
              <div className="header-3-people-image">
                <Image
                  src={'/3-image.png'}
                  width={300}
                  height={300}
                  alt="design-element"
                />
              </div>
              <div className="header-text-content text-3xl sm:text-6xl font-bold"> {/* Added text-3xl and adjusted text-6xl for responsiveness */}
                <h2>
                  Personal AI companion, that will help you to be better
                  everyday
                </h2>
              </div>
              <div className="header-text-content-coming-soon-button">
                <button className="bg-black text-white w-2/5 mt-5 rounded-3xl py-3 ml-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
          <div className="header-phone-image z-40 mr-0 sm:mr-10 transition-transform hover:scale-110 transition-opacity hover:opacity-80"> {/* Adjusted margin for responsiveness */}
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
