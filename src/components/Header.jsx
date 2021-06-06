import React from 'react'

const Header = props => {
	return (
		<header id='header'>
			<div className='intro'>
				<div className='overlay'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-8 col-md-offset-2 intro-text'>
								<h1>{props.data ? props.data.title1 : 'Loading'}</h1>
								<h1 id='title2'>
									{props.data ? props.data.title2 : 'Loading'}
								</h1>
								<p>{props.data ? props.data.paragraph1 : 'Loading'}</p>
								<p id='paragraph2'>
									{props.data ? props.data.paragraph2 : 'Loading'}
								</p>
								<a
									href='#services'
									className='btn btn-custom btn-lg page-scroll'
								>
									Learn More
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
