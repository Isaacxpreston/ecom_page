import React from 'react'
import Radium from 'radium'

var styles = {
  wrapper: {
    display: "flex",
    paddingLeft: "5em",
    paddingRight: "5em",
    background: "grey",
    '@media (max-width: 600px)': {
      paddingLeft: "2em",
      paddingRight: "2em",
    }
  },
  main: {
    flex: 1,
    // border: "1px solid black",
    // background: "lightgrey",
    // textAlign: "center"
  }
}


const Footer = React.createClass({

	render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.main}>
            <h1>© 2017 Wisdom. All rights reserved.</h1>
        </div>
      </div>
    )
	}
})

export default Radium(Footer);