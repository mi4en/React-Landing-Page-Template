import React from 'react'

const Footer = () => {
	return (
		<div id='footer'>
			<div className='container text-center'>
				<p>
					&copy; {new Date().getFullYear()} Gold & Roses. Website Created by{' '}
					<a href='https://www.mario-nikolov.com' target='_blanc'>
						Mario Nikolov
					</a>
				</p>
			</div>
		</div>
	)
}

export default Footer
