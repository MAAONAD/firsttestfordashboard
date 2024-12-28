import React from 'react';

export default function RetroScreen({ children }: { children: React.ReactNode }) {
  return (
    <div className="retro-screen">
      <div className="scan-lines"></div>
      <div className="screen-content">{children}</div>
      <div className="screen-flicker"></div>
    </div>
  );
}