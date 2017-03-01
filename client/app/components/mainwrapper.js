import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'

import FlexContainer from './flex_container'

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
				<FlexContainer {...this.props}>
					<div>
						content one
						sakdufhsak fasudf usk sdksdf 
					</div>
					<div>
						content two
						29239482379847
					</div>
				</FlexContainer>
				{/*backgrond
				features
				pricing
				foot*/}



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