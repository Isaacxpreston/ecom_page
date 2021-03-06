import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'

import '../stylesheets/open_sans.css'

import LandingSplash from './landing_splash'
import Features from './features'
import Pricing from './pricing'
import Footer from './footer'
import NavBar from './navbar'
import MobileNavBar from './navbar_mobile'

const styles = {
	nav: {
		zIndex: 3,
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		// background: "grey"
	},
	content: {
		position: "absolute",
		top: "34em",
		left: 0,
		width: "100%",
		zIndex: 2,
		// background: "blue",
	},
	backdrop: {
		position: "fixed",
		top: "4em",
		left: 0,
		width: "100%",
		zIndex: 1,
	},
	wrapper: {
		// fontFamily: "sans-serif"
	}
}

const Main = React.createClass({

	render() {
		return (
			<div style={styles.wrapper}>
				<div style={styles.nav}>
					<NavBar />
					<MobileNavBar />
				</div>
				<div style={styles.backdrop}>
					<LandingSplash />
				</div>
				<div style={styles.content}>
					<Features />
					<Pricing />
					<Footer />
				</div>
			</div>
		)
	}
})

function mapStatetoProps (state=[]) {
	return {
		simpleReducer: state.simpleReducer,
	}
}

const MainWrapper = connect(mapStatetoProps)(Main);

export default MainWrapper;