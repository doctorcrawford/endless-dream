import React from "react"
import PropTypes from "react"

function Dream(props) {
  return (
    <>
      <div onClick={() => props.whenDreamClicked(props.id)}>
        <p>Your dream:</p>
        <p>{props.title}</p>
      </div>
    </>
  )
}

Dream.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  whenDreamClicked: PropTypes.func
}

export default Dream