import { useState } from "react";

export default function AddNotes({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const limit_character = 200;

  const handleChange = (event) => {
    if (limit_character - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        value={noteText}
        onChange={handleChange}
        cols="10"
        rows="8"
        placeholder="type to add a note..."
      ></textarea>
      <div className="note-footer">
        <small>{limit_character - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
