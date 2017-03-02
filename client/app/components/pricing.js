import React from 'react'
import Radium from 'radium'
import PricingPlan from './pricing_plan.js'

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
  responsive_row: {
    display: "flex",
    flex: 1,
    // background: "lightblue",
    // border: "1px solid blue",
    '@media (max-width: 900px)': {
      flexDirection: "column"
    }
  },
  row_padding: {
    display: "flex",
    flex: 1,
    // background: "lightblue",
    // border: "1px solid blue",
    paddingTop: "1em",
    paddingBottom: "1em",
  },
  feature: {
    flex: 1,
    height: "5em",
    border: "1px solid black",
    // background: "lightgrey",
    
  },
  description: {
    fontSize: "4em",
    textTransform: "uppercase",
    // border: "1px solid black",
    // background: "lightgrey",
    margin: "auto"
  }
}


const Pricing = React.createClass({

	render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.row_padding}>
          <div style={styles.description}>pricing</div>
        </div>
        <div style={styles.responsive_row}>
          <PricingPlan />
          <PricingPlan />
          <PricingPlan />
          <PricingPlan />
        </div>
      </div>
    )
	}
})

export default Radium(Pricing);