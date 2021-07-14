import React from 'react';

interface footerProps {}

export const Footer: React.FC<footerProps> = () => {
	return (
		<footer>
			<h3>
				<a href="/">Always Closed</a>
			</h3>
			<nav className="nav-desktop">
				<a href="#gallery">Gallery</a>
				<a href="#artists">Artists</a>
				<a href="#about">Our Shop</a>
			</nav>
		</footer>
	);
};
