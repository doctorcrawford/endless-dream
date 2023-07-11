import PropTypes from 'prop-types'
// import { v4 } from 'uuid'
import ReusableForm from './ReusableForm'

function NewDreamForm(props) {

  function handleNewDreamFormSubmission(e) {
    e.preventDefault()
    props.onNewDreamCreation({
      title: e.target.title.value,
      type: e.target.type.value,
      description: e.target.description.value,
      // id: v4()
    })
  }

  return (
    <>
      <h3>Add to your endless dreams...</h3>
      <ReusableForm
        formSubmissionHandler={handleNewDreamFormSubmission}
        buttonText='Add New Dream' />
    </>
  )
}

NewDreamForm.propTypes = {
  onNewDreamCreation: PropTypes.func
}

export default NewDreamForm