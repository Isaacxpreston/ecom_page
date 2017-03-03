import React from 'react'
import Radium from 'radium'

//todo-
  //box shadow
  //logo on left

var styles = {
    wrapper: {
      display: "flex",
      justifyContent: "flex-end",
      height: "4em",
      background: "grey",
      paddingLeft: "5em",
      paddingRight: "5em",
      '@media (max-width: 700px)': {
        display: "none"
      }
    },
    main: {
      display: "flex",
      width: "7.5em",
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
        <div onClick={() =>{
          var y = document.getElementById("pricing").getBoundingClientRect().top + window.scrollY
          window.scrollTo(0, y)   
        }} style={styles.main}>
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