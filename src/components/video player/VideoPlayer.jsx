import React from "react";

export default function VideoPlayer({ link, title, className }) {
  return (
    <iframe
      src={link}
      allow="fullscreen"
      className={className}
      title={title}
    ></iframe>
  );
}
