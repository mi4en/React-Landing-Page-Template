import React from 'react'
import Impressum from './modals/Impressum'
import Daten from './modals/Daten'
import AGB from './modals/AGB'

const Contact = props => {
	return (
		<div>
			<div id='contact'>
				<div className='container'>
					<div className='col-md-8'>
						<div className='row'>
							<div className='section-title'>
								<h2>Über uns</h2>
								{/* <p>
									Please fill out the form below to send us an email and we will
									get back to you as soon as possible.
								</p> */}
							</div>
						</div>
						<div className='row'>
							<button
								className='btn btn-custom btn-contact-info btn-lg'
								data-toggle='modal'
								data-target='#impressum'
							>
								Impressum
							</button>
							<Impressum />
						</div>

						<div className='row'>
							<button
								className='btn btn-custom btn-contact-info btn-lg'
								data-toggle='modal'
								data-target='#daten'
							>
								Datenschutzerklärung
							</button>
							<Daten />
						</div>
						<div className='row'>
							<button
								type='submit'
								className='btn btn-custom btn-contact-info btn-lg'
								data-toggle='modal'
								data-target='#agb'
							>
								AGB
							</button>
							<AGB />
						</div>
					</div>
					<div className='col-md-3 col-md-offset-1 contact-info'>
						<div className='contact-item'>
							<h3>Kontaktinfo</h3>
							<p>
								<span>
									<i className='fa fa-map-marker'></i> Address
								</span>
								{props.data ? props.data.address : 'loading'}
							</p>
						</div>
						<div className='contact-item'>
							<p>
								<span>
									<i className='fa fa-phone'></i> Phone
								</span>{' '}
								{props.data ? props.data.phone : 'loading'}
							</p>
						</div>
						<div className='contact-item'>
							<p>
								<span>
									<i className='fa fa-envelope-o'></i> Email
								</span>{' '}
								{props.data ? props.data.email : 'loading'}
							</p>
						</div>
						<div className='contact-item'>
							<p>{props.data ? props.data.customText : 'loading'}</p>
						</div>
					</div>
					<div className='col-md-12'>
						<div className='row'>
							<div className='social'>
								<ul>
									<li>
										<a href={props.data ? props.data.twitter : '/'}>
											<i className='fa fa-twitter'></i>
										</a>
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

export default Contact
