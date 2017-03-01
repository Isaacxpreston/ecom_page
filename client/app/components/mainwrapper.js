import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'

import LandingSplash from './landing_splash'
import Features from './features'
import Pricing from './pricing'
import Footer from './footer'

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
				<LandingSplash />
				<Features />
				<Pricing />
				<Footer />
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