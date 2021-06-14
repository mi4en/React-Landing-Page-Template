import React from 'react'

const Features = props => {
	return (
		<div id='features' className='text-center'>
			<div className='container'>
				<div className='col-md-10 col-md-offset-1 section-title'>
					<h2>Hautcreme mit wirkungsvollen und natürlichen Inhaltsstoffen</h2>
					<p>100% Natural</p>
					<p>
						Die Hautcreme enthält ausschließlich natürlicher Zutaten. Über die
						Inhaltsstoffe liegen die folgenden wissenschaftlich erforschten
						Erkenntnisse vor:
					</p>
				</div>
				<div className='row'>
					{props.data
						? props.data.map((d, i) => (
								<div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
									{' '}
									<img src={d.img} alt='...' />
									<h3>{d.title}</h3>
								</div>
						  ))
						: 'Loading...'}
				</div>
			</div>
		</div>
	)
}

export default Features
