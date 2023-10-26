import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex flex-col gap-y-5">
      <div className="logo text-2xl font-bold">
        <Link href="/">SENSEII</Link>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center w-1/2">
          <h2 className="text-7xl leading-tight font-bold">
            Personal AI to help you be better Everyday
          </h2>
        </div>
        <Image
          className="mx-20"
          src={'/hero.png'}
          width={400}
          height={400}
          alt="Iphone with senseii application open"
        />
      </div>
    </header>
  );
};

export default Header;
