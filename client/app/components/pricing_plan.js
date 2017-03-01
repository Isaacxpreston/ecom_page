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
  title_wrapper: {
    display: "flex",
    flex: 1,
    background: "darkred"
  },
  pricing_wrapper: {
    display: "flex",
    // flexDirection: "column",
    flex: 3,
  },
  pricing: {
    margin: "auto",
    // display: "flex",
    // flexDirection: "column",
    // flex: 3,
    // padding: "0.5em"
  },
  pricing_inner: {
    display: "flex",
    flex: 1,
    background: "grey"
  },
  currency: {
    fontSize: "2.5em"
  },
  title: {
    margin: "auto",
    textAlign: "center",
    fontSize: "1.5em",
    color: "white",
    textTransform: "uppercase",
  },
  feature: {
    // padding: "1em",
    flex: 1,
    color: "white",
    background: "navy"
  }
}

const PricingPlan = React.createClass({

	render() {
    return (
        <div style={styles.content}>

          <div style={styles.title_wrapper}>
            <div style={styles.title}>
              Trader
            </div>
          </div>

          <div  style={styles.pricing_wrapper}>
            <div style={styles.pricing}>
              <div style={styles.pricing_inner}>
                <div style={styles.currency}>
                  $9.99
                </div>
                <div>
                  or
                </div>
              </div>
              <div style={styles.pricing_inner}>
                <div style={styles.currency}>
                  .01 BTC 
                </div>
                <div>
                  / year
                </div>
              </div>
            </div>
          </div>

          <div style={styles.feature}>
            Unlimited trades
          </div>
          <div style={styles.feature}>
            Calculate capital gains with FIFO, LIFO, or Average
          </div>
          <div style={styles.feature}>
            Bitcoin, Ether, Monero, or any alt-coin
          </div>
          <div style={styles.feature}>
            View sales, balances and cost-basis
          </div>
          <div style={styles.feature}>
            1040 (Schedule D), Form 8949 data
          </div>
          <div style={styles.feature}>
            Export to TurboTax®
          </div>

        </div>
    )
	}
})

export default Radium(PricingPlan);