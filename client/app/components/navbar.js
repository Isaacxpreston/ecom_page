import React from 'react'
import Radium from 'radium'

var styles = {
  desktop: {
    wrapper: {
      display: "flex",
      height: "3em",
      '@media (max-width: 600px)': {
        display: "none"
      }
    },
    main: {
      display: "flex",
      flex: 1,
      border: "1px solid black",
      background: "lightgrey",
    },
    center: {
      margin: "auto"
    }
  },
}


const NavBar = React.createClass({

	render() {
    return (
      <div style={styles.desktop.wrapper}>
        <div style={styles.desktop.main}>
            <div style={styles.desktop.center}>About Us</div>
        </div>
        <div style={styles.desktop.main}>
            <div style={styles.desktop.center}>Accountants</div>
        </div>
        <div style={styles.desktop.main}>
            <div style={styles.desktop.center}>FAQ</div>
        </div>
        <div style={styles.desktop.main}>
            <div style={styles.desktop.center}>Pricing</div>
        </div>
        <div style={styles.desktop.main}>
            <div style={styles.desktop.center}>Sign Up</div>
        </div>
      </div>
    )
	}
})

export default Radium(NavBar);