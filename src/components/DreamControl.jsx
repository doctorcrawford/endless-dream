import { useEffect, useState } from 'react'
import DreamList from './DreamList'
import NewDreamForm from './NewDreamForm'
import DreamDetail from './DreamDetails'
import EditDreamForm from './EditDreamForm'
import { db, auth } from './../firebase'
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore'
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function DreamControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false)
  const [mainDreamList, setMainDreamList] = useState([])
  const [selectedDream, setSelectedDream] = useState(null)
  const [editing, setEditing] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {

    const queryByTimestamp = query(
      collection(db, 'dreams'),
      orderBy('timeOpen')
    )

    const unSubscribe = onSnapshot(
      queryByTimestamp,
      (collectionSnapshot) => {
        const dreams = collectionSnapshot.docs.map((doc) => {
          const timeOpen = doc.get('timeOpen', { serverTimestamps: 'estimate' }).toDate()
          const jsDate = new Date(timeOpen)
          return {
            title: doc.data().title,
            type: doc.data().type,
            description: doc.data().description,
            timeOpen: jsDate,
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
        <Box m='5' maxW='md' p='4' bgGradient='linear(to-r, red.500, red.300, red.500)' borderWidth='1px' borderRadius='lg'>
          <h1>You must be signed in to access the dream state.</h1>
        </Box>
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
        <Box m='5' maxW='md' p='4' bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
          _hover={{
            bgGradient: 'linear(to-r, yellow.400, pink.200, gray.300)',
          }} borderWidth='1px' borderRadius='lg'>
          <Box>{currentlyVisibleState}</Box>
          {error ? null : <Button onClick={handleClick}>{buttonText}</Button>}
        </Box>
      </>
    )
  }
}

export default DreamControl