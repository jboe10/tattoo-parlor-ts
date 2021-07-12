import React from 'react';

interface footerProps {}

export const Footer: React.FC<footerProps> = () => {
	return (
		<footer>
			<h3>Always Closed</h3>
			<nav className="nav-desktop">
				<a href="/">Gallery</a>
				<a href="/">Artists</a>
				<a href="/">Our Shop</a>
				<a href="/">Contact</a>
			</nav>
		</footer>
	);
};
