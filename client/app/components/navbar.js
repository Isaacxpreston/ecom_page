import React from 'react'
import Radium from 'radium'

var styles = {
  wrapper: {
    display: "flex"
  },
  main: {
    flex: 1,
    border: "1px solid black",
    background: "lightgrey",
    textAlign: "center"
  }
}


const NavBar = React.createClass({

	render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.main}>
            option
        </div>
        <div style={styles.main}>
            option
        </div>
        <div style={styles.main}>
            option
        </div>
        <div style={styles.main}>
            option
        </div>
        <div style={styles.main}>
            option
        </div>
        <div style={styles.main}>
            option
        </div>
      </div>
    )
	}
})

export default Radium(NavBar);