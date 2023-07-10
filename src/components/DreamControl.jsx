import { useState } from 'react'
import DreamList from './DreamList'
import NewDreamForm from './NewDreamForm'
import DreamDetail from './DreamDetails'
import EditDreamForm from './EditDreamForm'

function DreamControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false)
  const [mainDreamList, setMainDreamList] = useState([])
  const [selectedDream, setSelectedDream] = useState(null)
  const [editing, setEditing] = useState(false)

  const handleClick = () => {
    if (selectedDream !== null) {
      setFormVisibleOnPage(false)
      setSelectedDream(null)
      setEditing(false)
    } else {
      setFormVisibleOnPage(!formVisibleOnPage)
    }
  }

  const handleAddingNewDreamToList = (newDream) => {
    const newMainDreamList = mainDreamList.concat(newDream)
    setMainDreamList(newMainDreamList)
    setFormVisibleOnPage(false)
  }

  const handleChangingSelectedDream = (id) => {
    const selection = mainDreamList.filter(dream => dream.id === id)[0]
    setSelectedDream(selection)
  }

  const handleEditingDreamInList = (dreamToEdit) => {
    const editedMainDreamList =
      mainDreamList
      .filter(dream => dream.id !== selectedDream.id)
      .concat(dreamToEdit)

    setMainDreamList(editedMainDreamList)
    setEditing(false)
    setSelectedDream(null)
  }

  const handleEditClick = () => {
    setEditing(true)
  }

  const handleEditingDreamInList = (dreamToEdit) => {
    const editedMainDreamList =
      mainDreamList
      .filter()

  }

  let currentlyVisibleState = null;
  let buttonText = null

  if (editing) {
    currentlyVisibleState =
      <EditDreamForm
        dream={selectedDream}
        onEditDream={handleEditingDreamInList} />
    buttonText = 'Return to Dream List'
  } else if (selectedDream != null) {
    currentlyVisibleState =
      <DreamDetail
        dream={selectedDream}
        onClickingEdit={handleEditClick} />
    buttonText = 'Return to Dream List'
  } else if (formVisibleOnPage) {
    currentlyVisibleState =
      <NewDreamForm
        onNewDreamCreation={handleAddingNewDreamToList} />
    buttonText = 'Return to Dream List'
  } else {
    currentlyVisibleState =
      <DreamList
        dreamList={mainDreamList}
        onDreamSelection={handleChangingSelectedDream} />
    buttonText = 'Add your dream'
  }
  return (
    <>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </>
  )
}

export default DreamControl