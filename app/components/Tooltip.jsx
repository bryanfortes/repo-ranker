import PropTypes, { element } from 'prop-types'
import React, { Children, Component } from 'react'
import withHover from './withHover'

const container = {
    position: "relative",
    display: "flex"
}

class Tooltip extends Component {
  render() {
    const {children, element, hovering} = this.props
    return (
      <div 
      style={container}>
        {hovering == true && element}
        {children}
      </div>
    )
  }
}

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    element: PropTypes.node.isRequired
}
export default withHover(Tooltip);