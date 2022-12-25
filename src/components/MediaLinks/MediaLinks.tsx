import React from "react";

interface MediaProps {
  link: string;
  img: string;
  alt: string;
}

const MediaLinks: React.FC<MediaProps> = ({ link, img, alt }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={alt} />
    </a>
  );
};

export default MediaLinks;
