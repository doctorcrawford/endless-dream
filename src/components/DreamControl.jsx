import React, { useState } from 'react'
import DreamList from './DreamList'
import NewDreamForm from './NewDreamForm'
import DreamDetail from './DreamDetails'

function DreamControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false)
  const [mainDreamList, setMainDreamList] = useState([])
  const [selectedDream, setSelectedDream] = useState(null)

  const handleClick = () => {
    if (selectedDream !== null) {
      setFormVisibleOnPage(false)
      setSelectedDream(null)
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

  let currentlyVisibleState = null;
  let buttonText = null

  if (selectedDream !== null) {
    currentlyVisibleState =
      <DreamDetail
        dream={selectedDream} />
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