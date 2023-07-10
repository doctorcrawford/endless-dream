import PropTypes from 'prop-types'

function DreamDetail(props) {
  const { dream } = props

  return (
    <>
      <p><strong>Dream Details</strong></p>
      <p><strong>Title:</strong> {dream.title}</p>
      <p><strong>Type:</strong> {dream.type}</p>
      <p><strong>Description:</strong> {dream.description}</p>

    </>
  )
}

DreamDetail.propTypes = {
  dream: PropTypes.object,
}

export default DreamDetail