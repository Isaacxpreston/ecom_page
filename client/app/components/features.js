import React from 'react'
import Radium from 'radium'

var styles = {
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
      <div>
      <div style={styles.column}>
        <div style={styles.description}> <h2> main features </h2> </div>
        <div style={styles.description}> description </div>
        <div style={styles.description}> description </div>
      </div>
      <div style={styles.row}>
        <div style={styles.column}>
            <div style={styles.feature}> feature </div>
            <div style={styles.feature}> feature </div>
            <div style={styles.feature}> feature </div>
        </div>
        <div style={styles.row}>
            <div style={styles.feature}> image </div>
            <div style={styles.feature}> description </div>
        </div>
      </div>
      </div>
    )
	}
})

export default Radium(Features);