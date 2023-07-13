import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/react'

function DreamDetail(props) {
  const { dream, onClickingEdit, onClickingDelete } = props

  return (
    <>
      <p><strong>Dream Details</strong></p>
      <p><strong>Title:</strong> {dream.title}</p>
      <p><strong>Type:</strong> {dream.type}</p>
      <p><strong>Description:</strong> {dream.description}</p>
      <Button onClick={() => onClickingEdit(dream.id)}>Edit Dream</Button>
      <Button onClick={() => onClickingDelete(dream.id)}>Delete Dream</Button>
    </>
  )
}

DreamDetail.propTypes = {
  dream: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default DreamDetail