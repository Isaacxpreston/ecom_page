import React from 'react'
import Radium from 'radium'

var pulseKeyframes = Radium.keyframes({
  '0%': {width: '10%'},
  '50%': {width: '50%'},
  '100%': {width: '10%'},
}, 'pulse');

var styles = {
  inner: {
    // Use a placeholder animation name in `animation`
    animation: 'x 3s ease 0s infinite',
    // Assign the result of `keyframes` to `animationName`
    animationName: pulseKeyframes,
    background: 'blue',
    height: '4px',
    margin: '0 auto',
  }
};

const FlexContainer = React.createClass({

	render() {
    return (
      <div style={styles.inner}>
        aksjdf
      </div>
    )
	}
})

export default Radium(FlexContainer);