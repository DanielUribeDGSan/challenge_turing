import React from 'react';
import './ContactForm.css';

export const ContactForm = () => {
	return (
		<form className="contact__form">
			<div className="row">
				<div className="col-12 col-md-6 col-lg-6">
					<label form="name">Nombre *</label>
					<input type="text" id="name" placeholder="Nombre completo" />
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-lg-0 mt-md-0 mt-5">
					<label form="country">País *</label>
					<input type="text" id="country" placeholder="País donde vies" />
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-5">
					<label form="email">Email *</label>
					<input
						type="text"
						id="email"
						placeholder="daniel.uribe@example.com"
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-5">
					<label form="email">Ciudad *</label>
					<input type="text" id="city" placeholder="Ciudad donde vives" />
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-5">
					<label form="phone">Teléfono *</label>
					<input type="text" id="phone" placeholder="+524431917018" />
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-5">
					<label form="message">Mensaje</label>
					<input type="text" id="message" placeholder="Datos extras" />
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-5">
					<label form="company">Compañia</label>
					<input type="text" id="company" placeholder="Compañia que contácta" />
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-5">
					<label form="jobtitle">Título de trabajo</label>
					<input type="text" id="jobtitle" placeholder="Tu título" />
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-5">
					<button className="button-lg button-lg-primary-white">
						Contactar
					</button>
				</div>
			</div>
		</form>
	);
};
