import React, { useState } from 'react'
import DreamList from './DreamList'
import NewDreamForm from './NewDreamForm'

function DreamControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false)
  const [mainDreamList, setMainDreamList] = useState([])

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage)
  }

  const handleAddingNewDreamToList = (newDream) => {
    const newMainDreamList = mainDreamList.concat(newDream)
    setMainDreamList(newMainDreamList)
    setFormVisibleOnPage(false)
  }

  let currentlyVisibleState = null;
  let buttonText = null

  if (formVisibleOnPage) {
    currentlyVisibleState =
      <NewDreamForm
        onNewDreamCreation={handleAddingNewDreamToList} />
    buttonText = 'Return to Dream List'
  } else {
    currentlyVisibleState =
      <DreamList
        dreamList={mainDreamList} />
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