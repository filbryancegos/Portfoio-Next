import Link from 'next/link'
import ActiveLink from './ActiveLink'
import Image from 'next/image'
import styles from '../styles/Nav.module.css'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function Nav() {

	const { dispatch } = useContext(AppContext)
	const { isMobile } = useContext(AppContext);

	function toogleMobile() {
		dispatch({
			type: 'TOOGLE_MENU'
		})
	}

	return (
		<header>
			<div onClick={toogleMobile} className={`menu-btn ${isMobile ? 'close' : ''}`}>
				<div className="btn-line"></div>
				<div className="btn-line"></div>
				<div className="btn-line"></div>
			</div>
			<nav className={`menu ${isMobile ? 'show': ''}`}>
				<div className={`menu-branding ${isMobile ? 'show': ''}`}>
					<div className="portrait">
						<Image 
						src="/portrait.jpg"
						alt="profile picture"
						width={500}
						height={500}
						className={styles.profile}
						></Image>
					</div>
				</div>
				<ul className={`menu-nav ${isMobile ? 'show' : ''}`}>
					<li className="nav-item">
						<ActiveLink href='/'>Home</ActiveLink>
					</li>
					<li className="nav-item">
						<ActiveLink  href='/about'>About</ActiveLink>
					</li>
					<li className="nav-item">
						<ActiveLink  href='/notes'>Note</ActiveLink>
					</li>
					<li className="nav-item">
						<ActiveLink  href='/tasksmanager'>Tasks Manager</ActiveLink>
					</li>
					
				</ul>
			</nav>
		</header>
	)
}

export default Nav;

