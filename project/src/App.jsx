import { useState } from "react"
import { nanoid } from "nanoid"
import NotesList from './components/NotesList'
import Search from "./components/Search"

function App() {

  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "this is my note",
    date: "15/15/15"
  },
  {
    id: nanoid(),
    text: "this is my note",
    date: "15/15/15"
  }])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className="container">
      <div className="title">
        <h1>My Notes</h1>
      </div>
      <Search handleSearch={setSearch} />
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(search))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
    </div>
  )
}

export default App
