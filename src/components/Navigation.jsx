const Navigation = () => {
	return (
		<nav id='menu' className='navbar navbar-default navbar-fixed-top'>
			<div className='container'>
				<div className='navbar-header'>
					<button
						type='button'
						className='navbar-toggle collapsed'
						data-toggle='collapse'
						data-target='#bs-example-navbar-collapse-1'
					>
						{' '}
						<span className='sr-only'>Toggle navigation</span>{' '}
						<span className='icon-bar'></span>{' '}
						<span className='icon-bar'></span>{' '}
						<span className='icon-bar'></span>{' '}
					</button>
					<div className='brand-container'>
						<a className='navbar-brand page-scroll' href='#page-top'>
							NATURE MEETS SKIN
							<p>Natural Cosmetics</p>
						</a>
					</div>
				</div>

				<div
					className='collapse navbar-collapse'
					id='bs-example-navbar-collapse-1'
				>
					<ul className='nav navbar-nav navbar-right'>
						<li>
							<a href='#features' className='page-scroll'>
								Hautcreme
							</a>
						</li>
						<li>
							<a href='#ingridients' className='page-scroll'>
								Inhaltsstoffe
							</a>
						</li>
						<li>
							<a href='#about' className='page-scroll'>
								Philosophie
							</a>
						</li>
						<li>
							<a href='#contact' className='page-scroll'>
								Über uns
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
