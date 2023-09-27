'use client';
import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LikedContentProps {
    songs: Song[];
}
const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
    const router = useRouter();
    const { isLoading, user } = useUser();
    useEffect(() => {
        if (!isLoading && !user) {
            router.replace("/");
        }
    }, [isLoading, user, router])
    if (songs.length == 0) return <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400
    ">
        No Liked Songs
    </div>
    return (<section className="flex flex-col gap-y-2 w-full p-6">
        {songs.map((song) => (<div className="flex items-center gap-4 w-full" key={song.id}>
            <div className="flex-1">
                <MediaItem onClick={() => { }} data={song} />
            </div>
            <LikeButton songId={song.id} />
        </div>))}
    </section>);
}

export default LikedContent;