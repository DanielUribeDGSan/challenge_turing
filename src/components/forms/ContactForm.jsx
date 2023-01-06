import React from 'react';
import Swal from 'sweetalert2';
import turingApi from '../../api/turingApi';
import { useForm } from '../../hooks/useForm';
import './ContactForm.css';

const contactFormFields = {
	contactName: '',
	contactEmail: '',
	contactCountry: '',
	contactCity: '',
	contactPhone: '',
	contactMessage: '',
	contactCompany: '',
	contactJobTitle: '',
};

export const ContactForm = () => {
	const {
		contactName,
		contactEmail,
		contactCountry,
		contactCity,
		contactPhone,
		contactMessage,
		contactCompany,
		contactJobTitle,
		onInputChange: onContactInputChange,
		onResetForm,
	} = useForm(contactFormFields);

	const contactSubmit = (event) => {
		event.preventDefault();
		if (contactName === '') {
			Swal.fire('Datos vacíos', 'El nombre es obligatorio', 'warning');
			return;
		}
		if (contactEmail === '') {
			Swal.fire('Datos vacíos', 'El nombre es obligatorio', 'warning');
			return;
		}
		if (contactPhone === '') {
			Swal.fire('Datos vacíos', 'El nombre es obligatorio', 'warning');
			return;
		}
		if (contactCity === '') {
			Swal.fire('Datos vacíos', 'El nombre es obligatorio', 'warning');
			return;
		}
		if (contactCompany === '') {
			Swal.fire('Datos vacíos', 'El nombre es obligatorio', 'warning');
			return;
		}
		if (contactJobTitle === '') {
			Swal.fire('Datos vacíos', 'El nombre es obligatorio', 'warning');
			return;
		}

		sendContact({
			name: contactName,
			email: contactEmail,
			country: contactCountry,
			phone: contactCity,
			company: contactPhone,
			jobTitle: contactMessage,
			city: contactCompany,
			message: contactJobTitle,
		});
	};

	const sendContact = async ({
		name,
		email,
		country,
		phone,
		company,
		jobTitle,
		city,
		message,
	}) => {
		try {
			const { data } = await turingApi.post('/contacts', {
				name,
				email,
				country,
				phone,
				company,
				jobTitle,
				city,
				message,
			});
			onResetForm();
			Swal.fire(
				'Información envíada',
				'En 24 horas responderos tu solicitud',
				'success'
			);
		} catch (error) {
			console.log(error);
			Swal.fire('Ocurrio un error', 'Intentalo mas tarde', 'error');
		}
	};

	return (
		<form className="contact__form" onSubmit={contactSubmit}>
			<div className="row">
				<div className="col-12 col-md-6 col-lg-6">
					<label form="name">Nombre *</label>
					<input
						type="text"
						id="name"
						placeholder="Nombre completo"
						name="contactName"
						value={contactName}
						onChange={onContactInputChange}
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-lg-0 mt-md-0 mt-5">
					<label form="country">País</label>
					<input
						type="text"
						id="country"
						placeholder="País donde vies"
						name="contactEmail"
						value={contactEmail}
						onChange={onContactInputChange}
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-5">
					<label form="email">Email *</label>
					<input
						type="text"
						id="email"
						placeholder="daniel.uribe@example.com"
						name="contactCountry"
						value={contactCountry}
						onChange={onContactInputChange}
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-5">
					<label form="email">Ciudad *</label>
					<input
						type="text"
						id="city"
						placeholder="Ciudad donde vives"
						name="contactCity"
						value={contactCity}
						onChange={onContactInputChange}
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-5">
					<label form="phone">Teléfono *</label>
					<input
						type="text"
						id="phone"
						placeholder="+524431917018"
						name="contactPhone"
						value={contactPhone}
						onChange={onContactInputChange}
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-5">
					<label form="message">Mensaje</label>
					<input
						type="text"
						id="message"
						placeholder="Datos extras"
						name="contactMessage"
						value={contactMessage}
						onChange={onContactInputChange}
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-5">
					<label form="company">Compañia *</label>
					<input
						type="text"
						id="company"
						placeholder="Compañia que contácta"
						name="contactCompany"
						value={contactCompany}
						onChange={onContactInputChange}
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-5">
					<label form="jobTitle">Título de trabajo *</label>
					<input
						type="text"
						id="jobTitle"
						placeholder="Tu título"
						name="contactJobTitle"
						value={contactJobTitle}
						onChange={onContactInputChange}
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-6 mt-5">
					<button className="button-lg button-lg-primary-white" type="submit">
						Contactar
					</button>
				</div>
			</div>
		</form>
	);
};
