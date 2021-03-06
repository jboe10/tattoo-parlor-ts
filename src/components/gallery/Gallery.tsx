import React from 'react';
import { Carousel } from './Carousel';

interface GalleryProps {}

export const Gallery: React.FC<GalleryProps> = () => {
	return (
		<section className="gallery-section" id="gallery">
			<div className="gallery-title">
				<h2>Our Artwork</h2>
			</div>
			<Carousel />
			<div className="gallery-title">
				<h2>Our Artists</h2>
			</div>
		</section>
	);
};
