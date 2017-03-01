import React from 'react'
import Radium from 'radium'
import FlexContainer from './flex_container'

var styles = {
  wrapper: {
    display: "flex"
  },
  row: {
    display: "flex",
    flex: 1,
    background: "blue",
    color: "navy",
  },
  column: {
    display: "flex",
    flex: 1,
    background: "blue",
    color: "navy",
    flexDirection: "column",
  },
  feature: {
    flex: 1,
    border: "1px solid black",
    background: "lightgrey",
  }
}


const LandingSplash = React.createClass({

	render() {
    return (
      <div style={styles.wrapper}>
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
    )
	}
})

export default Radium(LandingSplash);