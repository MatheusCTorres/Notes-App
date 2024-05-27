import AddNotes from "./AddNotes";
import Notes from "./CardNotes";

export default function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Notes id={note.id} text={note.text} date={note.date} key={note.id} handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNotes handleAddNote={handleAddNote} />
    </div>
  );
}
 
