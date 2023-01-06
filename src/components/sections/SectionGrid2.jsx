import React from 'react';
import './SectionGrid2.css';
import ServiceImage from '../../assets/images/servicios.jpg';

export const SectionGrid2 = (props) => {
	return (
		<section {...props}>
			<div className="container-fluid section__grid2">
				<div className="row">
					<div className="col-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center p-5-auto">
						<img className="img-fluid" src={ServiceImage} alt="servicios" />
					</div>
					<div className="col-12 col-md-12 col-lg-6 p-5-auto">
						<header className="container">
							<h2 className="title-sm text-gray mtl-0 mt-md-0 mt-4">
								LO QUE OFRECEMOS
							</h2>
							<h3 className="h1 mt-4">Servicios en Turing-IA</h3>
							<p className="mt-4 d-flex align-items-center justify-content-center">
								En 43 mercados de todo el mundo, los equipos de Turing tienen
								autonomía para actuar con rapidez y hacer lo correcto para
								nuestros clientes, lo que nos hace más personales y ágiles que
								las consultoras tradicionales. Nos importa mucho ayudarle a
								afrontar sus mayores retos y hacer realidad su visión.
							</p>
							<p>
								Proporcionamos a nuestros clientes una gama de productos y
								servicios relacionados con el analisis de datos, mediante el uso
								de tecnologias como Tableau, Salesforce, PMI, Scrum.
							</p>
							<p>
								Con Turing, nunca se trata sólo del proyecto en cuestión. Se
								trata de generar confianza y facilitar su éxito a largo plazo.
								Vamos a su encuentro, integramos a nuestro personal en el suyo y
								compartimos nuestros conocimientos en cada paso del proceso.
							</p>
						</header>
					</div>
				</div>
			</div>
		</section>
	);
};
