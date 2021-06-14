import React from 'react'

const Header = props => {
	return (
		<header id='header'>
			<div className='intro'>
				<div className='overlay'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-10 col-md-offset-1 intro-text'>
								<h1>{props.data ? props.data.title1 : 'Loading'}</h1>
								<h2 id='title2' className='text-white'>
									{props.data ? props.data.title2 : 'Loading'}
								</h2>
								<p>{props.data ? props.data.paragraph1 : 'Loading'}</p>
								<br />
								<p id='paragraph2'>
									{props.data ? props.data.paragraph2 : 'Loading'}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
