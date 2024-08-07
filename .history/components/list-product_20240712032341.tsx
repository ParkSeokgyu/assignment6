import Image from "next/image";
import Link from "next/link";

import { formatToTimeAgo} from "@/lib/utils";

interface ListProductProps {
  title: string;
  created_at: Date;
  photo: string;
  id: number;
}

export default function ListProduct({
  title,
  created_at,
  photo,
  id,
}: ListProductProps) {
  return (
    <Link href={`/products/${id}`} className="flex gap-5 border-b border-gray-500">
      <div className="relative size-28 rounded-md overflow-hidden">
        <Image fill src={photo} alt={title} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-lg">{title}</span>
        <span className="text-sm text-neutral-500">
          {formatToTimeAgo(created_at.toString())}
        </span>
      </div>
    </Link>
    
  );
}