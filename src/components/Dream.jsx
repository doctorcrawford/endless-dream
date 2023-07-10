import React from "react"
import PropTypes from "react"

function Dream(props) {
  return (
    <>
      <p>Your dream:</p>
      <p>{props.title}</p>
    </>
  )
}

Dream.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string
}

export default Dream