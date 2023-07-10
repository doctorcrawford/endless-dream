import Dream from "./Dream"
import PropTypes from 'prop-types'

function DreamList(props) {

  const dreamList =
    props.dreamList.map((dream) =>
      <Dream
        title={dream.title}
        description={dream.description}
        id={dream.id}
        key={dream.id} />
    )
  return (
    <>
      <h3>All Your Dreams</h3>
      {dreamList}
    </>
  )
}

DreamList.propTypes = {
  dreamList: PropTypes.array,
}

export default DreamList