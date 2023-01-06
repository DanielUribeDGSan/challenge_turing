import React from 'react';
import './SectionGrid2Form.css';
import { ContactForm } from '../forms/ContactForm';
export const SectionGrid2Form = (props) => {
	return (
		<section {...props}>
			<div className="section__grid2__form">
				<div className="row w-100 m-0">
					<div className="col-12 col-md-12 col-lg-6 content d-flex aling-items-center justify-content-center">
						<header>
							<div className="container pt-5 pb-5">
								<h2 className="title-sm text-white">Ponerse en contacto</h2>
								<h3 className="h1 text-white">
									Hablemos de su próximo gran proyecto.
								</h3>
							</div>
						</header>
					</div>
					<div className="col-12 col-md-12 col-lg-6 form d-flex aling-items-center justify-content-center">
						<div className="w-100 container pt-5 pb-5">
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
