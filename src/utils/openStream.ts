// utils/openStream.ts
export async function openStream({
    login,
    platform,
  }: {
    login: string;
    platform: "twitch"; // Add support for other platforms later
  }) {
    try {
      // Fire and forget — don't await
      fetch("/api/track-click", {
        method: "POST",
        body: JSON.stringify({ login, platform }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error("Tracking failed", err);
    }
  
    const url = platform === "twitch"
      ? `https://www.twitch.tv/${login}`
      : "#"; // fallback or future support
  
    window.open(url, "_blank");
  }
  