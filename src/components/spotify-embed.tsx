"use client";

import { useState } from "react";

type Props = {
  src: string;
  title: string;
  height: number;
};

export default function SpotifyEmbed({ src, title, height }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative rounded-2xl overflow-hidden" style={{ height }}>
      {!loaded && <div className="absolute inset-0 bg-pearl-bush-200 rounded-2xl" />}
      <iframe title={title} data-testid="embed-iframe" className="w-full rounded-2xl" src={src} height={height} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" onLoad={() => setLoaded(true)} />
    </div>
  );
}
