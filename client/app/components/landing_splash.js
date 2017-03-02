import React from 'react'
import Radium from 'radium'

var styles = {
  wrapper: {
    display: "flex",
    // paddingLeft: "5em",
    // paddingRight: "5em",
    // background: "white",
    // '@media (max-width: 600px)': {
    //   paddingLeft: "2em",
    //   paddingRight: "2em",
    // }
  },
  main: {
    flex: 1,
    height: "100%", //30em
    // border: "1px solid black",
    // background: "navy",
    // color: "blue",
    // textAlign: "center"
  }
}


const LandingSplash = React.createClass({

	render() {
    return (
      <div style={styles.wrapper}>
        <img src={require('../images/buildings.jpg')} style={styles.main} />
      </div>
    )
	}
})

export default Radium(LandingSplash);