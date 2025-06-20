// components/StreamCard.tsx
import React from "react";
import { openStream } from "@/utils/openStream";

interface StreamCardProps {
  user_name: string;
  title: string;
  game_name: string;
  started_at: string;
  user_login: string; // Add this to open correct stream
}

function formatUptime(startedAt: string) {
  const start = new Date(startedAt);
  const now = new Date();
  const diffMs = now.getTime() - start.getTime();

  const totalMinutes = Math.floor(diffMs / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0) return `${hours}h ${minutes}m ago`;
  return `${minutes}m ago`;
}

const StreamCard: React.FC<StreamCardProps> = ({
  user_name,
  title,
  game_name,
  started_at,
  user_login,
}) => {
  const handleClick = () => {
    openStream({ login: user_login, platform: "twitch" });
  };

  return (
    <div
      onClick={handleClick}
      className="border rounded-lg p-4 shadow bg-white dark:bg-zinc-800 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
    >
      <h3 className="font-bold text-lg">{user_name}</h3>
      <p className="text-sm text-gray-300 italic">{game_name}</p>
      <p className="mt-1">{title}</p>
      <p className="mt-2 text-xs text-gray-400">
        Live since: {formatUptime(started_at)}
      </p>
    </div>
  );
};

export default StreamCard;
