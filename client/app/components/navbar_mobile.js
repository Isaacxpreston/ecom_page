import React from 'react'
import Radium from 'radium'

var styles = {
    wrapper: {
      display: "none",
      '@media (max-width: 600px)': {
        display: "flex",
        justifyContent: "flex-end",
        paddingLeft: "2em",
        paddingRight: "2em",
      }
    },

    drop_down: {
      position: "absolute",
      top: "calc(3em +2px)",
      right: "calc(2em + 2px)",
      width: "7.5em",
      flexDirection: "column",
    },

    main: {
      display: "flex",
    //   flex: 1, //change to flex width
      width: "7.5em",
      height: "3em",
      border: "1px solid black",
      background: "lightgrey",
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
            <div style={styles.center}>More</div>
        </div>



      </div>
    )
	}
})

export default Radium(MobileNavBar);