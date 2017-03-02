import React from 'react'
import Radium from 'radium'

var styles = {
    wrapper: {
      display: "none",
      background: "grey",
      '@media (max-width: 700px)': {
        display: "flex",
        justifyContent: "flex-end",
        paddingLeft: "2em",
        paddingRight: "2em",
      }
    },

    drop_down: {
      position: "absolute",
      top: "3em",
      right: "2em",
      width: "7.5em",
      flexDirection: "column",
    },

    main: {
      display: "flex",
      width: "7.5em",
      height: "4em",
      background: "grey",
    },

    center: {
      margin: "auto"
    }
}


const MobileNavBar = React.createClass({

	render() {
    return (
      <div style={styles.wrapper}>

        <div style={styles.drop_down}>
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
        </div>

        <div style={styles.main}>
            <div style={styles.center}>Sign Up</div>
        </div>

        <div style={styles.main}>
            <div style={styles.center}>Menu</div>
        </div>



      </div>
    )
	}
})

export default Radium(MobileNavBar);