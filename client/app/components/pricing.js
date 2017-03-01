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
  description: {
    flex: 1,
    border: "1px solid black",
    background: "lightgrey",
    margin: "auto"
  }
}


const Pricing = React.createClass({

	render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.column}>
          <div style={styles.description}> <h2> pricing plans </h2> </div>
          <div style={styles.description}> description </div>
        </div>
        <div style={styles.row}>
            <div style={styles.feature}> option </div>
            <div style={styles.feature}> option </div>
            <div style={styles.feature}> option </div>
        </div>
      </div>
    )
	}
})

export default Radium(Pricing);