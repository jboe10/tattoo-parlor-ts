import React, { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	const [dropdownShow, setDropdownShow] = useState<Boolean>(false);

	return (
		<div className="home" id="home">
			<header>
				<div className="header-logo">
					<a href="/">Always Closed</a>
				</div>
				<nav className="nav-desktop">
					<a href="#gallery">Gallery</a>
					<a href="#artists">Artists</a>
					<a href="#about">Our Shop</a>
				</nav>
				<div
					className="nav-mobile"
					onClick={() => setDropdownShow(!dropdownShow)}
				>
					{!dropdownShow && <FontAwesomeIcon icon={faBars} />}
					{dropdownShow && <FontAwesomeIcon icon={faTimes} />}
				</div>
			</header>
			{dropdownShow && (
				<div className="mobile-dropdown-nav">
					<a href="#gallery">Gallery</a>
					<a href="#artists">Artists</a>
					<a href="#about">Our Shop</a>
				</div>
			)}
			<div className="hero-wrap">
				<div className="hero">
					Not Your grandpa's Tattoo Shop
					<br />
					Book Today with one of our artists
					<span className="hero-color-change">
						, Good Luck getting a Spot this year
					</span>
				</div>
			</div>
			<div className="white-corner-triangles">
				<div className="left-triangle"></div>
				<div className="right-triangle"></div>
			</div>
		</div>
	);
};
