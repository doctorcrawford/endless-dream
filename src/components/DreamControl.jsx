import { useEffect, useState } from 'react'
import DreamList from './DreamList'
import NewDreamForm from './NewDreamForm'
import DreamDetail from './DreamDetails'
import EditDreamForm from './EditDreamForm'
import { db, auth } from './../firebase'
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore'

function DreamControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false)
  const [mainDreamList, setMainDreamList] = useState([])
  const [selectedDream, setSelectedDream] = useState(null)
  const [editing, setEditing] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, 'dreams'),
      (collectionSnapshot) => {
        const dreams = collectionSnapshot.docs.map((doc) => {
          return {
            title: doc.data().title,
            type: doc.data().type,
            description: doc.data().description,
            id: doc.id
          }
        })
        setMainDreamList(dreams)
      },
      (error) => {
        setError(error.message)
      }
    )

    return () => unSubscribe()
  }, [])

  const handleClick = () => {
    if (selectedDream !== null) {
      setFormVisibleOnPage(false)
      setSelectedDream(null)
      setEditing(false)
    } else {
      setFormVisibleOnPage(!formVisibleOnPage)
    }
  }

  const handleAddingNewDreamToList = async (newDreamData) => {
    await addDoc(collection(db, 'dreams'), newDreamData)
    setFormVisibleOnPage(false)
  }

  const handleChangingSelectedDream = (id) => {
    const selection = mainDreamList.filter(dream => dream.id === id)[0]
    setSelectedDream(selection)
  }

  const handleEditingDreamInList = async (dreamToEdit) => {
    const dreamRef = doc(db, 'dreams', dreamToEdit.id)
    await updateDoc(dreamRef, dreamToEdit)
    setEditing(false)
    setSelectedDream(null)
  }

  const handleEditClick = () => {
    setEditing(true)
  }

  const handleDeletingDream = async (id) => {
    await deleteDoc(doc(db, 'dreams', id))
    setSelectedDream(null)
  }

  if (auth.currentUser == null) {
    return (
      <>
        <h1>You must be signed in to access the dream state.</h1>
      </>
    )
  } else if (auth.currentUser != null) {

    let currentlyVisibleState = null;
    let buttonText = null

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (editing) {
      currentlyVisibleState =
        <EditDreamForm
          dream={selectedDream}
          onEditDream={handleEditingDreamInList} />
      buttonText = 'Return to Dream List'
    } else if (selectedDream != null) {
      currentlyVisibleState =
        <DreamDetail
          dream={selectedDream}
          onClickingEdit={handleEditClick}
          onClickingDelete={handleDeletingDream} />
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
        {error ? null : <button onClick={handleClick}>{buttonText}</button>}
      </>
    )
  }
}

export default DreamControl