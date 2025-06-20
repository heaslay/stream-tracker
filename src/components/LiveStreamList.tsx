// components/LiveStreamList.tsx
import { useEffect, useState } from "react";
import StreamCard from "./StreamCard";

export default function LiveStreamList() {
  const [streams, setStreams] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/twitch/follows")
      .then((res) => res.json())
      .then((data) => setStreams(data.data || []));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {streams.map((stream) => (
        <StreamCard
          key={stream.id}
          user_name={stream.user_name}
          title={stream.title}
          game_name={stream.game_name}
          started_at={stream.started_at}
          user_login={stream.user_login}
        />
      ))}
    </div>
  );
}
