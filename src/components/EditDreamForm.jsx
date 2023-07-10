import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types'

function EditDreamForm(props) {
  const { dream } = props

  function handleEditDreamFormSubmission(e) {
    e.preventDefault();
    props.onEditDream({
      title: e.target.title.value,
      type: e.target.type.value,
      description: e.target.description.value,
      id: dream.id
    })
  }

  return (
    <>
      <h3>Update Dream</h3>
      <ReusableForm
        formSubmissionHandler={handleEditDreamFormSubmission}
        buttonText='Update Dream' />
    </>
  )
}

EditDreamForm.propTypes = {
  dream: PropTypes.object,
  onEditDream: PropTypes.func
}

export default EditDreamForm