import React from 'react'
  import Radium from 'radium'

var pulseKeyframes = Radium.keyframes({
  '0%': {width: '10%'},
  '50%': {width: '50%'},
  '100%': {width: '10%'},
}, 'pulse');

var styles = {
  flex: {
    background: 'lime',
    display: 'flex',
    flex: 1,
  }
};

const FlexContainer = React.createClass({

  componentWillMount () {
    // if(this.props.column) {
    //   styles.flex["flexDirection"] = "column"
    // }
  },

	render() {
    return (
      <div style={styles.flex}>
        {this.props.children}
      </div>
    )
	}
})

export default Radium(FlexContainer);