import React, { useRef } from "react";

interface SoundProps {
  children: React.ReactNode;
  href?: string;
  soundSrc: string;
  onClick?: () => void;
}

function Sound({ children, soundSrc, onClick }: SoundProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.error("Audio play failed", err);
      });
    }

    onClick?.();
  };

  return (
    <button onClick={playSound} style={{ all: "unset", cursor: "pointer" }}>
      {children}
      <audio ref={audioRef} src={soundSrc} />
    </button>
  );
}

export default Sound;