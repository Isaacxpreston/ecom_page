import React from 'react'
import Radium from 'radium'
import pricing_data from '../utils/pricing_data'

var styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    // alignSelf: "flex-start",
    flex: 1,
    margin: "1em",
  },
  title_wrapper: {
    display: "flex",
    flex: 1,
    background: "grey"
  },
  pricing_wrapper: {
    display: "flex",
    background: "lightgrey",
    flex: 3,
  },
  pricing: {
    margin: "auto",
  },
  pricing_inner: {
    display: "flex",
    flex: 1
  },
  currency: {
    fontSize: "4em",
  },
  title: {
    margin: "auto",
    textAlign: "center",
    fontSize: "1.75em",
    color: "white",
    textTransform: "uppercase",
  },
  feature: {
    padding: "0.75em",
    flex: 1,
    color: "white",
    background: "grey"
  }
}

const PricingPlan = React.createClass({
	render() {
    var data = pricing_data[this.props.name]

    return (
        <div style={styles.content}>

          <div>
            <div style={styles.title_wrapper}>
              <div style={styles.title}>
                {data.name}
              </div>
            </div>
            <div  style={styles.pricing_wrapper}>
              <div style={styles.pricing}>
                <div style={styles.pricing_inner}>
                  <div style={styles.currency}>
                    {data.price.usd}
                  </div>
                  <div>
                    {data.price.usd ? "USD" : "Starting at"}
                  </div>
                </div>
                <div style={styles.pricing_inner}>
                  <div style={styles.currency}>
                    {data.price.btc}
                  </div>
                  <div>
                    BTC
                  </div>
                </div>
                <div style={styles.pricing_inner}>
                  <div>
                    per Year
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
          {data.features.map((feature) => {
            return(
            <div key={feature} style={styles.feature}>
              {feature}
            </div>
            )
          })}
          </div>

        </div>
    )
	}
})

export default Radium(PricingPlan);