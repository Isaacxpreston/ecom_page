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
    // animation: 'x 3s ease 0s infinite',
    // Assign the result of `keyframes` to `animationName`
    // animationName: pulseKeyframes,
    background: 'lime',
    display: 'flex'
  }
};

const FlexContainer = React.createClass({
	render() {
    return (
      <div style={styles.inner}>
        {this.props.children}
      </div>
    )
	}
})

export default Radium(FlexContainer);