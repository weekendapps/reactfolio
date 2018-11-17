import React from 'react';

import Logo from './logo';
import './header.scss';

var SocialMedia =[
    {icon: require("../../icons/twitter-icon.png"), link: "https://twitter.com"},
    {icon: require("../../icons/linkedin-icon.png"), link: "https://www.linkedin.com/"},
    {icon: require("../../icons/github-icon.png"), link: "https://github.com"}
];

const SocialMediaList = SocialMedia.map((social) =>
    <span className="overlay">
		<a key={social.icon} href={social.link}>
			<img className="social-icons" key={social.icon} src={social.icon}/> 
		</a>
	</span>
);


const Header = ({ socialMedia }) => (
	<header>
		<div className="header-container">
			<Logo title="Andelus" />
		</div>
		<div className="social-media">
			{SocialMediaList}
		</div>
	</header>
);

export default Header;
