const Ingridients = props => {
	return (
		<div id='ingridients' className='text-center'>
			<div className='container'>
				<div className='section-title'>
					<h2>Unsere natürlichen Inhaltsstoffe</h2>
					<p>Die bezaubernde Natur ist unsere größte Inspiration.</p>
					<p>
						Jeder Zutat unserer Rezeptur wird als traditionelles und natürliches
						Heilmittel verwendet.
					</p>
				</div>
				<div className='row'>
					{props.data
						? props.data.map((d, i) => (
								<div key={`${d.name}-${i}`} className='col-md-4 col-sm-6'>
									<img src={d.img} alt='...' className='ingridients-img' />
									<div className='service-desc'>
										<button type='button' className='btn'>
											<a href={d.wiki} target='_blanc'>
												{d.name}
											</a>
										</button>
										<p>{d.text}</p>
									</div>
								</div>
						  ))
						: 'loading'}
				</div>
			</div>
		</div>
	)
}

export default Ingridients
