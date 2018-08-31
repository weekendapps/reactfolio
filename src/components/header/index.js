import React from 'react';
import Link from 'gatsby-link';
import Logo from './logo';
import './header.scss';
const Header = ({ siteTitle }) => (
	<header>
		<div className="header-container">
			<Logo title="Andelus" />
		</div>
	</header>
);

export default Header;
