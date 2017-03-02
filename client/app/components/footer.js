import React from 'react'
import Radium from 'radium'

var styles = {
  wrapper: {
    display: "flex",
    paddingLeft: "5em",
    paddingRight: "5em",
    background: "grey",
    flexDirection: "column",
    '@media (max-width: 600px)': {
      paddingLeft: "2em",
      paddingRight: "2em",
    }
  },
  main: {
    dispay: "flex",
    flexDirection: "column",
    flex: 1,
    paddingTop: "3em",
    paddingBottom: "5em"
  },
  content: {
    display: "flex",
    flex: 3,
  },
  copyright: {
    flex: 1,
    fontSize: "0.85em",
    textAlign: "center",
    paddingTop: "1em",
    paddingBottom: "1em"
  }
}

//todo-
  //horizontal flexbox
  //vertical parent container
    //copyright at bottom

const Footer = React.createClass({

	render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.content}>
        <div style={styles.main}>
          <div>
            Simplified Taxes for your Cryptocurrency & Blockchain assets.
          </div>
        </div>
        <div style={styles.main}>
          <div>About Us</div>
          <div>FAQs</div>
          <div>Contact Us</div>
        </div>
        <div style={styles.main}>
          <div>Login</div>
          <div>Signup</div>
          <div>Privacy Policy</div>
          <div>Terms of Service</div>   
        </div>
        </div>
        <div style={styles.copyright}>
          © 2017 Wisdom. All rights reserved.
        </div>
      </div>
    )
	}
})

export default Radium(Footer);