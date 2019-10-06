import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'


function Footer(props) {
	const footerRef = useRef();
	const [footerSpace, setFooterSpace] = useState(0);
	const calculateSpace = () => {
		const position = footerRef && footerRef.current.getBoundingClientRect();
		if (!position)
			return;
		if (((position.top + position.height) < window.innerHeight)) {
			// Push down the footer when its not at the bottom of screen
			const outputSpace = window.innerHeight - (position.top + position.height);
			if(footerSpace !== outputSpace) {
				setFooterSpace(outputSpace)
			}
		}

		// Reset Footer extra footer offset to zero
		else if ((position.top > window.innerHeight) && footerSpace !== 0 ) {
			setFooterSpace(0);
		}
	}
	useEffect(calculateSpace)
	const Space = () => (<div style={{ height: footerSpace }}/>)
	return (
		<>
		<Space />
		<div className="Footer" ref={footerRef} >
			<div className="footerColumn">
				<div><h1>Assembl(i)</h1></div>
				<div><Link to="/description">Description/Mission</Link></div>
				<div><Link to="/statement">Statement</Link></div>
			</div>
			<div className="footerColumn">
				<div><h1>USEFUL LINKS</h1></div>
				<div><Link to="/">Home</Link></div>
				<div><Link to="/about">About</Link></div>
				<div><Link to="/contact">Contact</Link></div>
				<div><Link to="https://www.lead555.com/">Lead555</Link></div>
			</div>
			<div className="footerColumn">
				<div><h1>STAY IN TOUCH</h1></div>
				<div><Link to="/phone">Phone</Link></div>
				<div><Link to="/email">Email</Link></div>
				<div className="footerMediaIcons">
					<a href="https://facebook.com"><img className="footerMediaIcon" src={facebook} /></a>
					<a href="https://twitter.com"><img className="footerMediaIcon" src={twitter} /></a>
					<a href="https://instagram.com"><img className="footerMediaIcon" src={instagram} /></a>
				</div>
			</div>
		</div>
		</>
	)
}

export default Footer