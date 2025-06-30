import Link from 'next/link';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';

export default function TemplateCard({ name, icon, desc, slug }: TEMPLATE) {
  return (
    <Link href={`/dashboard/content/${slug}`}>
      <div className="p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
        <Image src={icon} alt="icon" width={50} height={50} />
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
