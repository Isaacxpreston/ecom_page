import React from 'react'
import Radium from 'radium'

import BulletPoint from './bullet'

var styles = {
  wrapper: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingBottom: "5em",
    paddingTop: "2em",
    background: "white",
    '@media (max-width: 600px)': {
      paddingLeft: "2em",
      paddingRight: "2em",
    }
  },
  column: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    // background: "lightblue",
    // border: "1px solid blue",
  },
  row_padding: {
    display: "flex",
    flex: 1,
    // background: "lightblue",
    // border: "1px solid blue",
    paddingTop: "1em",
    paddingBottom: "1em",
  },
  image: {
    height: "500px",
    width: "600px",
    paddingLeft: "2em",
    '@media (max-width: 900px)': {
      display: "none"
    } 
  },
  responsive_row: {
    display: "flex",
    flex: 1,
    // background: "lightblue",
    // border: "1px solid blue",
    '@media (max-width: 900px)': {
      flexDirection: "column"
    }
  },
  description: {
    fontSize: "4em",
    textTransform: "uppercase",
    // border: "1px solid black",
    // background: "lightgrey",
    margin: "auto"
  }
}


const Features = React.createClass({

	render() {
    return (
      <div style={styles.wrapper}>
      <div style={styles.row_padding}>
        <div style={styles.description}>features</div>
      </div>
      <div style={styles.responsive_row}>
        <div style={styles.column}>
            <BulletPoint />
            <BulletPoint />
            <BulletPoint />
            <BulletPoint />
            <BulletPoint />
            <BulletPoint />
        </div>
        <img src={require('../images/computer.png')} style={styles.image} />
      </div>
      </div>
    )
	}
})

export default Radium(Features);