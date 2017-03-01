import React from 'react'
import Radium from 'radium'

var styles = {
  wrapper: {
    display: "flex",
    paddingLeft: "5em",
    paddingRight: "5em",
  },
  main: {
    flex: 1,
    height: "20em",
    border: "1px solid black",
    background: "navy",
    color: "white",
    textAlign: "center"
  }
}


const LandingSplash = React.createClass({

	render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.main}>
            <h1>image placeholder</h1>
            <h1>image placeholder</h1>
            <h1>image placeholder</h1>
            <h1>image placeholder</h1>
        </div>
      </div>
    )
	}
})

export default Radium(LandingSplash);