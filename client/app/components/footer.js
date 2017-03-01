import React from 'react'
import Radium from 'radium'

var styles = {
  wrapper: {
    display: "flex",
    paddingLeft: "5em",
    paddingRight: "5em",
    background: "darkgreen",
    '@media (max-width: 600px)': {
      paddingLeft: "2em",
      paddingRight: "2em",
    }
  },
  main: {
    flex: 1,
    border: "1px solid black",
    background: "lightgrey",
    textAlign: "center"
  }
}


const Footer = React.createClass({

	render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.main}>
            <h1>footer</h1>
        </div>
      </div>
    )
	}
})

export default Radium(Footer);