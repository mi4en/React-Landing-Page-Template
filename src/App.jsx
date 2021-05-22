import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Footer from './components/Footer'
import Features from './components/Features'
import About from './components/About'
import Ingridients from './components/Ingridients'
import Gallery from './components/Gallery'
// import Testimonials from './components/Testimonials';
import Team from './components/Team'
import Contact from './components/Contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
})

const App = () => {
	const [landingPageData, setLandingPageData] = useState({})

	useEffect(() => {
		setLandingPageData(JsonData)
	}, [])

	return (
		<div>
			<Navigation />
			<Header data={landingPageData.Header} />
			<Features data={landingPageData.Features} />
			<Ingridients data={landingPageData.Ingridients} />
			{/* Philosophie */}
			<About data={landingPageData.About} />
			<Gallery />
			{/* <Testimonials data={landingPageData.Testimonials} /> */}
			<Team data={landingPageData.Team} />
			<Contact data={landingPageData.Contact} />
			<Footer />
		</div>
	)
}

export default App
