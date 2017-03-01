import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'

import LandingSplash from './landing_splash'
import Features from './features'
import Pricing from './pricing'
import Footer from './footer'
import NavBar from './navbar'

const styles = {
	nav: {
		zIndex: 3,
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		background: "grey"
	},
	content: {
		position: "absolute",
		top: "250px",
		left: 0,
		width: "100%",
		zIndex: 2,
		background: "blue",
		height: "1200px"
	},
	backdrop: {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		zIndex: 1,
	}
}

const Main = React.createClass({
	//have three layers
		//navbar
		//content
			//features
			//pricing
			//footer
		//background image

	render() {
		return (
			<div>
				<div style={styles.nav}>
					<NavBar />
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