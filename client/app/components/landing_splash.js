import React from 'react'
import Radium from 'radium'
import FlexContainer from './flex_container'

var globals = {
  flex: 1,
  "textAlign": "center"
}

var styles = {
  global: {
    flex: 1
  },
  content1: {
    background: "blue",
    color: "white",
    border: "5px solid green",
    margin: "5px",
    padding: "5px",
    ...globals
  },
  content2: {
    background: "red",
    ...globals
  }
}


const LandingSplash = React.createClass({

	render() {
    return (
      <FlexContainer>
        <div style={styles.content1}>
          content one
            <br />
            aksdfks
        </div>
        <div style={styles.content2}>
          content two
        </div>
      </FlexContainer>
    )
	}
})

export default Radium(LandingSplash);