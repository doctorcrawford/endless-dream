import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'
import { serverTimestamp } from 'firebase/firestore'

function NewDreamForm(props) {

  function handleNewDreamFormSubmission(e) {
    e.preventDefault()
    props.onNewDreamCreation({
      title: e.target.title.value,
      type: e.target.type.value,
      description: e.target.description.value,
      timeOpen: serverTimestamp()
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