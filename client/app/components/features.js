import React from 'react'
import Radium from 'radium'

var styles = {
  wrapper: {
    paddingLeft: "5em",
    paddingRight: "5em",
    '@media (max-width: 600px)': {
      paddingLeft: "2em",
      paddingRight: "2em",
    }
  },
  row: {
    display: "flex",
    flex: 1,
    background: "lightblue",
    border: "1px solid blue"
  },
  column: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    background: "lightblue",
    border: "1px solid blue"
  },
  feature: {
    flex: 1,
    border: "1px solid black",
    background: "lightgrey",
  },
  responsive_row: {
    display: "flex",
    flex: 1,
    background: "lightblue",
    border: "1px solid blue",
    '@media (max-width: 600px)': {
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
      <div style={styles.column}>
        <div style={styles.description}> <h2> main features </h2> </div>
        <div style={styles.description}> description </div>
        <div style={styles.description}> description </div>
      </div>
      <div style={styles.responsive_row}>
        <div style={styles.column}>
            <div style={styles.feature}> feature </div>
            <div style={styles.feature}> feature </div>
            <div style={styles.feature}> feature </div>
        </div>
        <div style={styles.responsive_row}>
            <div style={styles.feature}> image </div>
            <div style={styles.feature}> description </div>
        </div>
      </div>
      </div>
    )
	}
})

export default Radium(Features);