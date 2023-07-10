import React from "react"
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="title"
          placeholder="Dream Title" />
        <label>
          Type: 
          <select name='type'>
            <option value="dream">Dream</option>
            <option value="nightmare">Nightmare</option>
            <option value="purgatory">Purgatory</option>
          </select>
        </label>
        <input
          type="text"
          name="description"
          placeholder="Description" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm