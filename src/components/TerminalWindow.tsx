import React from 'react';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
}

export default function TerminalWindow({ title, children }: TerminalWindowProps) {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="terminal-text">{title}</span>
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </div>
  );
}