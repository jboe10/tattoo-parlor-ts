import React from 'react';
import { Carousel } from './Carousel';

interface GalleryProps {

}

export const Gallery: React.FC<GalleryProps> = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-title">
        <h2>Out Artwork</h2>
      </div>
      <Carousel/>
      <div className="gallery-title">
        <h2>Out Artists</h2>
      </div>
    </section>
  );
}