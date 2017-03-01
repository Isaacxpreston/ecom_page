import React from 'react'
import Radium from 'radium'

var styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "30em",
    border: "1px solid black",
    background: "lightgrey",
    '@media (max-width: 900px)': {
      height: "auto"
    }
  },
  title: {
    flex: 1,
    fontSize: "1.25em",
    textTransform: "uppercase",
    background: "darkred"
  },
  description: {
    flex: 5,
    background: "red"
  }
}


const PricingPlan = React.createClass({

	render() {
    return (
        <div style={styles.content}>
          <div style={styles.title}>
            plan uno
          </div>
          <div style={styles.description}>
            reliability costs some money$$$$$
            a lotta moneeey
            issa lotta monnneeee
            lotta money$$$$$dollarsssss


            $$ cash
          </div>
        </div>
    )
	}
})

export default Radium(PricingPlan);