"use client";

import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";
import Image from "next/image";

interface MediaItemProps {
  onClick?: (id: string) => void;
  song: Song;
}
export default function MediaItem({ song, onClick }: MediaItemProps) {
  const imagePath = useLoadImage(song);
  const player = usePlayer();
  function handleClick() {
    if (onClick) {
      return onClick(song.id);
    }
    return player.setId(song.id);
  }

  return (
    <div
      onClick={handleClick}
      className="
  flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50
  w-full  p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          className="object-cover"
          src={imagePath || "/images/liked.png"}
          fill
          sizes="(max-width: 768px) 40px, (max-width: 1200px) 50px, 60px"
          alt="image"
        />
      </div>
      <div className="w-full  flex flex-col gap-y-1 truncate">
        <p className="text-white truncate">{song.title}</p>
        <p className="text-neutral-400 text-sm truncate">{song.author}</p>
      </div>
    </div>
  );
}
;
