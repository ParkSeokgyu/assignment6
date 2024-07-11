"use client";

import {
  HomeIcon as SolidHomeIcon,
  ChevronLeftIcon as SolidchevronLeftIcon,
  ChevronRightIcon as SolidchevronRightIcon,
  VideoCameraIcon as SolidVideoCameraIcon,
  UserIcon as SolidUserIcon,
} from "@heroicons/react/24/solid";
import {
  HomeIcon as OutlineHomeIcon,
  ChevronLeftIcon as OutlinechevronLeftIcon,
  ChevronRightIcon as OutlinechevronRightIcon,
  VideoCameraIcon as OutlineVideoCameraIcon,
  UserIcon as OutlineUserIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 w-full mx-auto max-w-screen-md grid grid-cols-4 border-gray-500 border-t px-5 py-5 *:text-white">
      <Link href="/products" className="flex flex-col items-center gap-px">
        {pathname === "/products" ? (
          <SolidHomeIcon className="w-7 h-7" />
        ) : (
          <OutlineHomeIcon className="w-7 h-7" />
        )}
      </Link>
      <Link href="/life" className="flex flex-col items-center gap-px">
        {pathname === "/life" ? (
          <SolidchevronLeftIcon className="w-7 h-7" />
        ) : (
          <OutlinechevronLeftIcon className="w-7 h-7" />
        )}
      </Link>
      <Link href="/chat" className="flex flex-col items-center gap-px">
        {pathname === "/chat" ? (
          <SolidchevronRightIcon className="w-7 h-7" />
        ) : (
          <OutlinechevronRightIcon className="w-7 h-7" />
        )}
        {/* <span>채팅</span> */}
      </Link>
      <Link href="/profile" className="flex flex-col items-center gap-px">
        {pathname === "/profile" ? (
          <SolidUserIcon className="w-7 h-7" />
        ) : (
          <OutlineUserIcon className="w-7 h-7" />
        )}
      </Link>
    </div>
  );
}