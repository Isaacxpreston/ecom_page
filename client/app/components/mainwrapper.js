import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'

import FlexContainer from './flex_container'
import '../stylesheets/stylesheet.css'

const Main = React.createClass({

	// someAction () {
	// 	this.props.dispatch(someAction())
	// },
	
	// signUp () {
	// 	this.props.dispatch(signUp())
	// },

	//have three layers
		//navbar
		//content
			//features
			//pricing
			//footer
		//background image

	//make a layer class that has flexbox properties and see if it works on children injected into it
	render() {
		return (
			<div>

				we gonna feed u all props blalbh
				<div className="something">header nav</div>
				<FlexContainer {...this.props}>
				</FlexContainer>
				backgrond
				features
				pricing
				foot



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