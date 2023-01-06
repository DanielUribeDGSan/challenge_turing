import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarMovil } from './NavbarMovil';
import './Nabvar.css';
export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<NavLink className="navbar-brand logo" to="/">
					TURING-IA
				</NavLink>
				<NavbarMovil />
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									`nav-link  ${isActive ? 'active' : ''}`
								}
								to="/"
							>
								Inicio
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									`nav-link  ${isActive ? 'active' : ''}`
								}
								to="/servicios"
							>
								Servicios
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
