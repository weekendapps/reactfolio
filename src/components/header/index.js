import React from 'react';

import Logo from './logo';
import Menu from './menu';
//import Biography from '../biography/biography';
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


const Header = ( { siteTitle } ) => (
	<header id="header">
		{SocialMediaList}
		<div className="header-container">
			<Logo title="Andelus" />
		</div>
		<Menu></Menu>
		<div className="menu-toggle">
			<img src={require("../../icons/menu-icon.png")} onClick={menuToggle} />
		</div>
	</header>
);

var bool = false;
function menuToggle(){
	if(!bool) {
		console.log("clicked");
		document.getElementById("header").style.height="14.5em";
		//document.getElementById("bio").style.marginTop="11.5em";
		bool = true;
	}else{
		console.log("Not clicked");
		document.getElementById("header").style.height="4em";
		//document.getElementById("bio").style.marginTop="0";
		bool = false;
	}
	
}

export default Header;
