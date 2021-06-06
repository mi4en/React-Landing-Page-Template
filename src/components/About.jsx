import React from 'react'

const About = props => {
	return (
		<div id='about'>
			<div className='container'>
				<div className='row'>
					<div className='col-xs-12 col-md-6'>
						<div className='about-text'>
							<h2>Gold & Roses Philosophie</h2>
							<h3>Nature First</h3>
							<p>{props.data ? props.data.paragraph : 'loading...'}</p>
						</div>
						<img
							src='img/philosophy/Philosophie Background.jpg'
							className='img-responsive'
							alt='philosophie rose garden baground'
						/>
					</div>
					<div className='col-xs-12 col-md-6'>
						<h3>Why Choose Nashto Kremche?</h3>
						<div className='list-style'>
							<div>
								<ul>
									<li className='row'>
										<img
											src='img/philosophy/1.jpg'
											alt='rose'
											className='col-xs-3'
										/>
										<div className='col-xs-9'>
											<h4>Verbundenheit zur Natur</h4>
											<ul>
												<li>
													Unsere oberste Priorität ist der rücksichtsvolle
													Umgang mit Mensch, Tier und Umwelt. Die Interaktion
													mit der Natur ist unsere größte Inspiration.Bei der
													Entwicklung unserer Hautcreme haben wir uns bewusst
													für Anwendung natürlicher Inhaltsstoffe entschieden,
													deren positiven Wirkungen auf Mensch, Tier und Umwelt
													bewiesen sind.
												</li>
												<li>
													<span className='text-bold'>Verzicht</span> auf die
													Anwendung von{' '}
													<span className='text-bold'>
														Mikroplastik, Silikone, Parabene oder Mineralöl
													</span>
													.
												</li>
											</ul>
										</div>
									</li>
									<li className='row'>
										<img
											src='img/philosophy/2.jpg'
											alt='rose'
											className='col-xs-4'
										/>
										<div className='col-xs-8'>
											<h4>Nachhaltigkeit</h4>
											<p>
												Unsere Produktverpackungen bestehen aus nachhaltigen
												Rohstoffen. Unsere Produktverpackung besteht zu 98% aus
												<span className='text-bold'>
													recycelfähigen
												</span> Glas,{' '}
												<span className='text-bold'>recycelten</span> Papier und
												<span className='text-bold'>recycelfähigen</span>{' '}
												Bambus. Aus hygienischen Gründen wird einen 100%
												recycelfähigen Plastikseparator verwendet.
											</p>
										</div>
									</li>
									<li className='row'>
										<img
											src='img/philosophy/3.jpg'
											alt='rose'
											className='col-xs-4'
										/>
										<div className='col-xs-8'>
											<h4>Dermatologisch getestet & optimiert</h4>
											<p>
												Die Qualität unserer Produkte steht im Vordergrund.
												Deswegen wurde unsere Hautcreme von einem unabhängigen,
												dermatologischen Institut nach geltenden EU-Richtlinien
												getestet. Die Hautcreme wurde ausschließlich mit der
												Bestnote ausgezeichnet.Bei zahlreichen Probandentest
												durch Mitglieder unserer Teams und Community sind bisher
												keine Nebenwirkungen bekannt.
											</p>
										</div>
									</li>
									<li className='row'>
										<img
											src='img/philosophy/4.jpg'
											alt='rose'
											className='col-xs-4'
										/>
										<div className='col-xs-8'>
											<h4>Tier und Umweltschutz</h4>
											<p>
												<span className='text-bold'>Keine</span> Tierversuche -
												weder bei den Inhaltsstoffen noch beim fertigen Produkt
												Wir haben uns zum Ziel gesetzt -{' '}
												<span className='text-bold'>5% der Erlöse</span> für
												<span className='text-bold'>gemeinnützlichen</span>{' '}
												Zwecken zu verwenden. Es werden Tier- und
												Naturschutzprojekte in Deutschland, Österreich und
												Bulgarien unterstützt. Die generierten Mitteln werden an
												die <span className='text-bold'>gemeinnützige</span>{' '}
												Tier- und Naturschutzorganisation{' '}
												<span className='text-bold'>
													"Street Animal Rescue International"
												</span>{' '}
												gespendet.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
