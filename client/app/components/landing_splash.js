import React from 'react'
import Radium from 'radium'
import FlexContainer from './flex_container'

var styles = {
  row: {
    display: "flex",
    background: "blue",
    color: "navy"
  },
  column: {
    display: "flex",
    background: "blue",
    color: "navy",
    flexDirection: "column"
  },
  content1: {
    flex: 1,
    background: "lightblue",
  },
  content2: {
    flex: 1,
    background: "turquoise"
  },
  feature: {
    flex: 1,
    background: "lightgrey"
  }
}


const LandingSplash = React.createClass({

	render() {
    return (
      <div style={styles.row}>
        <div style={styles.content1}>
          <div style={styles.column}>
            <div style={styles.feature}> feature </div>
            <div style={styles.feature}> feature </div>
            <div style={styles.feature}> feature </div>
          </div>
        </div>
        <div style={styles.content2}>
          <div style={styles.row}>
            <div style={styles.feature}> feature </div>
            <div style={styles.feature}> feature </div>
          </div>
        </div>
      </div>
    )
	}
})

export default Radium(LandingSplash);