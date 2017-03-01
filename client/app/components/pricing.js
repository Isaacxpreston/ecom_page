import React from 'react'
import Radium from 'radium'
import PricingPlan from './pricing_plan.js'

var styles = {
  wrapper: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingBottom: "5em",
    paddingTop: "2em",
    background: "lightgreen",
    '@media (max-width: 600px)': {
      paddingLeft: "2em",
      paddingRight: "2em",
    }
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
  column: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    background: "lightblue",
    border: "1px solid blue",
    paddingBottom: "2em"
  },
  feature: {
    flex: 1,
    height: "5em",
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
        <div style={styles.responsive_row}>
          <PricingPlan />
          <PricingPlan />
          <PricingPlan />
          <PricingPlan />
            {/*<div style={styles.feature}> option </div>
            <div style={styles.feature}> option </div>
            <div style={styles.feature}> option </div>
            <div style={styles.feature}> option </div>*/}
        </div>
      </div>
    )
	}
})

export default Radium(Pricing);