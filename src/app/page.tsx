'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import LiveStreamList from "@/components/LiveStreamList";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  return (
    <main className="p-4">
      {session ? (
        <>
          <p>Signed in as {session.user?.name}</p>
          <button onClick={() => signOut()} className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
            Sign out
          </button>

          <div className="mt-6">
            <LiveStreamList />
          </div>
        </>
      ) : (
        <>
          <p>Not signed in</p>
          <button onClick={() => signIn("twitch")} className="mt-2 bg-purple-600 text-white px-4 py-2 rounded">
            Sign in with Twitch
          </button>
        </>
      )}
    </main>
  );
}