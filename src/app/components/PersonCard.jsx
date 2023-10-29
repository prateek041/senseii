import Link from 'next/link';
import Image from 'next/image';

export default function PersonCard(props) {
  const { name, link, image } = props;
  return (
    <div className="person-card flex justify-around items-center gap-x-10 h-full bg-contain w-4/5">
      <div className={`rounded-3xl w-full`}>
        <div className="h-full">
          <div className="h-80">{name}</div>
          <div>
            <Link href={link}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
