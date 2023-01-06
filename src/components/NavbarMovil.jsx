import React, { useRef, useState } from 'react';
import './NavbarMovil.css';
import { NavLink } from 'react-router-dom';

export const NavbarMovil = () => {
	const [menu, setMenu] = useState(false);
	const ref = useRef();

	const handleOpenMenu = () => {
		const div = ref.current;
		div.classList.add('fade-in');
		div.classList.remove('fade-out');
		setMenu(!menu);
	};
	const handleCloseMenu = () => {
		const div = ref.current;
		div.classList.remove('fade-in');
		div.classList.add('fade-out');
		setTimeout(() => {
			setMenu(!menu);
		}, 600);
	};

	return (
		<div className="navbar__movil " ref={ref}>
			<button className="navbar-toggler" type="button" onClick={handleOpenMenu}>
				<span className="navbar-toggler-icon"></span>
			</button>
			{menu && (
				<nav>
					<div className="container">
						<button className="close-btn" onClick={handleCloseMenu}>
							<i className="fa-solid fa-xmark text-white"></i>
						</button>
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink
									onClick={handleCloseMenu}
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
									onClick={handleCloseMenu}
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
				</nav>
			)}
		</div>
	);
};
