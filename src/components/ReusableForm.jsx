import PropTypes from "prop-types";
import { Button } from '@chakra-ui/react'

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="title"
          placeholder="Dream Title" />
          <br/>
        <label>
          Type: 
          <select name='type'>
            <option value="dream">Dream</option>
            <option value="nightmare">Nightmare</option>
            <option value="purgatory">Purgatory</option>
          </select>
        </label>
        <br/>
        <input
          type="text"
          name="description"
          placeholder="Description" />
          <br/>
        <Button type="submit">{props.buttonText}</Button>
      </form>
    </>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm