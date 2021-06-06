import React from 'react'

const Impressum = () => {
	return (
		<div
			className='modal fade'
			id='impressum'
			tabindex='-1'
			role='dialog'
			aria-labelledby='impressumLabel'
		>
			<div className='modal-dialog' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<button
							type='button'
							className='close'
							data-dismiss='modal'
							aria-label='Close'
						>
							<span aria-hidden='true'>&times;</span>
						</button>
						<h4 className='modal-title' id='impressumLabel'>
							Impressum
						</h4>
					</div>
					<div className='modal-body'>
						<div className='text-black'>
							<p className='text-black'>
								Gesetzliche Anbieterkennung: To Be Determined GmbH
							</p>
							<p>diese vertr. d. d. Geschäftsführer To Be Determined</p>
							<p>To Be Determined</p>
							<p>PLZ Stadt</p>
							<p>Deutschland</p>
							<p> Telefon: To Be Determined</p>
							<p>E-Mail: To Be Determined</p>
							<p>USt-IdNr.: To Be Determined</p>
							<p>
								eingetragen im Handelsregister des Amtsgerichtes To Be
								Determined Handelsregisternummer To Be Determined
							</p>
							<p>
								Inhaltlich Verantwortlicher gemäß § 55 RStV: HerrTo Be
								Determined, To Be Determined, PLZ To Be Determined, Deutschland
							</p>
							<h4 className='text-black'>Alternative Streitbeilegung:</h4>
							<p>
								Die Europäische Kommission stellt eine Plattform für die
								außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit,
								aufrufbar unter https://ec.europa.eu/odr. Wir weisen Dich des
								Weiteren darauf hin, dass wir für eine Teilnahme an
								Streitbeilegungsverfahren vor einer
								Verbraucherschlichtungsstelle nicht zur Verfügung stehen. Wir
								sind seit To Be Determined Mitglied der Initiative "FairCommerce
								To Be Determined". Nähere Informationen hierzu finden Sie unter
								To Be Determined.
							</p>
						</div>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-default'
							data-dismiss='modal'
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Impressum
