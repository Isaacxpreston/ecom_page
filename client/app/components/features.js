import React from 'react'
import Radium from 'radium'

import BulletPoint from './bullet'

var styles = {
  wrapper: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingBottom: "5em",
    paddingTop: "2em",
    background: "green",
    '@media (max-width: 600px)': {
      paddingLeft: "2em",
      paddingRight: "2em",
    }
  },
  column: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    background: "lightblue",
    border: "1px solid blue",
  },
  column_padding: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    background: "lightblue",
    border: "1px solid blue",
    paddingBottom: "2em"
  },
  feature: {
    flex: 1,
    border: "1px solid black",
    background: "lightgrey",
  },
  image: {
    flex: 1,
    border: "1px solid black",
    background: "navy",
    color: "blue",
    textAlign: "center",
    margin: "auto"
  },
  responsive_row: {
    display: "flex",
    flex: 1,
    background: "lightblue",
    border: "1px solid blue",
    '@media (max-width: 900px)': {
      flexDirection: "column"
    }
  },
  description: {
    flex: 1,
    border: "1px solid black",
    background: "lightgrey",
    margin: "auto"
  }
}


const Features = React.createClass({

	render() {
    return (
      <div style={styles.wrapper}>
      <div style={styles.column_padding}>
        <div style={styles.description}> <h1> main features </h1> </div>
        <div style={styles.description}> description </div>
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
        <div style={styles.responsive_row}>
            <div style={styles.image}>
              <h1>image placeholder</h1>
              <h1>image placeholder</h1>
              <h1>image placeholder</h1>
              <h1>image placeholder</h1>
              <h1>image placeholder</h1>
              <h1>image placeholder</h1>
            </div>
        </div>
      </div>
      </div>
    )
	}
})

export default Radium(Features);