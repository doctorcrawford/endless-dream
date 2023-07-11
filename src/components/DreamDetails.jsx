import PropTypes from 'prop-types'

function DreamDetail(props) {
  const { dream, onClickingEdit } = props

  return (
    <>
      <p><strong>Dream Details</strong></p>
      <p><strong>Title:</strong> {dream.title}</p>
      <p><strong>Type:</strong> {dream.type}</p>
      <p><strong>Description:</strong> {dream.description}</p>
      <button onClick={() => onClickingEdit(dream.id)}>Edit Dream</button>
    </>
  )
}

DreamDetail.propTypes = {
  dream: PropTypes.object,
  onClickingEdit: PropTypes.func
}

export default DreamDetail