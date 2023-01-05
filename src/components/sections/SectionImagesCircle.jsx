import React from 'react';
import './SectionImagesCircle.css';
import CerMmi from '../../assets/images/cer-pmi.jpg';
import videoBg from '.././../assets/videos/Video.mp4';
import Girl from '../../assets/images/refresh22-home-left-body.jpg';
export const SectionImagesCircle = () => {
	return (
		<section>
			<div className="section__images__circle container-fluid">
				<div className="row">
					<div className="col-12 col-md-12 col-lg-3 position-relative">
						<div>
							<div className="video_circle">
								<video src={videoBg} autoPlay loop muted />
							</div>
							<img
								className="img-fluid img-rectangular d-none-md"
								src={Girl}
								alt="gilt slalom"
							/>
						</div>
					</div>
					<div className="col-12 col-md-12 col-lg-5 d-flex align-items-center justify-content-center">
						<header>
							<h2 className="title-sm pr-circle-auto">
								LA MANERA IDEAL PARA MANEJAR TUS DATOS
							</h2>
							<h3 className="title-lg h1">
								Somos asesores, estrategas e ingenieros centrados en las
								personas, por encima de todo.
							</h3>
							<p className="p-lg p-opacity mt-4">
								Somos el socio estratégico que necesitas para potenciar los
								datos de tu organización. Contamos con más de 15 años de
								experiencia brindando soluciones innovadoras, adaptadas a las
								necesidades de nuestros clientes, en más de 10 industrias y
								diferentes áreas funcionales.
							</p>
						</header>
					</div>
					<div className="col-12 col-md-12 col-lg-4 d-flex align-items-center justify-content-center d-none-md">
						<img className="img-circle" src={CerMmi} alt="cer-pmi" />
					</div>
				</div>
			</div>
		</section>
	);
};
