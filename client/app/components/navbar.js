import React from 'react'
import Radium from 'radium'

var styles = {
    wrapper: {
      display: "flex",
      justifyContent: "flex-end",
      height: "3em",
      paddingLeft: "5em",
      paddingRight: "5em",
      '@media (max-width: 600px)': {
        display: "none"
      }
    },
    main: {
      display: "flex",
    //   flex: 1,
      width: "7.5em",
      border: "1px solid black",
      background: "lightgrey",
    },
    center: {
      margin: "auto"
    }
}


const NavBar = React.createClass({

	render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.main}>
            <div style={styles.center}>About Us</div>
        </div>
        <div style={styles.main}>
            <div style={styles.center}>Accountants</div>
        </div>
        <div style={styles.main}>
            <div style={styles.center}>FAQ</div>
        </div>
        <div style={styles.main}>
            <div style={styles.center}>Pricing</div>
        </div>
        <div style={styles.main}>
            <div style={styles.center}>Sign Up</div>
        </div>
      </div>
    )
	}
})

export default Radium(NavBar);