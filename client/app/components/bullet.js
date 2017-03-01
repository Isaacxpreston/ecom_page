import React from 'react'
import Radium from 'radium'

var styles = {
  wrapper: {
    display: "flex",
    flex: 1
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingLeft: "1em",
    paddingRight: "1em",
    border: "1px solid black",
    background: "lightgrey",
  },
  image: {
    background: "orange",
    height: "4em",
    width: "4em"
  },
  title: {
    flex: 1,
    fontSize: "1.25em",
    textTransform: "uppercase",
    background: "darkred"
  },
  description: {
    flex: 1,
    background: "red"
  }
}


const BulletPoint = React.createClass({

	render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.image}>
          icon
        </div>

        <div style={styles.content}>
          <div style={styles.title}>
            Reliability
          </div>
          <div style={styles.description}>
            Have your history reviewed by a Chartered Public
            Accountants to ensure they are accurate and
            compliant with tax codes
          </div>
        </div>
      </div>
    )
	}
})

export default Radium(BulletPoint);