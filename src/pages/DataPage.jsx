import React, { useEffect, useState } from 'react';
import turingApi from '../api/turingApi';
import { BannerImage } from '../components/BannerImage';

export const DataPage = () => {
	const [contacts, setContacts] = useState([]);
	const showContacts = async () => {
		try {
			const { data } = await turingApi.get('/contacts');
			setContacts(data.contacts);
			console.log(data);
		} catch (error) {
			console.log('Error cargando eventos');
			console.log(error);
		}
	};
	useEffect(() => {
		showContacts();
	}, []);

	contacts.map(({ name }) => {
		console.log(name);
	});

	return (
		<main>
			<BannerImage title="Data" />
			{contacts && (
				<div className="container mt-3 w-100 pb-5">
					<div className="card p-5">
						<ul>
							{contacts.map(({ name, email, message }) => (
								<li key={name}>
									{name} {email} {message}
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</main>
	);
};
