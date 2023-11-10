import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  const [allNotes, setAllNotes] = useState(notes);

  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  }

  function addNote() {
    if (newNote.title || newNote.content) {
      setAllNotes((prevNotes) => [...prevNotes, newNote]);
      setNewNote({
        title: "",
        content: ""
      });
    }
    event.preventDefault();
  }

  function deleteNote(id) {
    setAllNotes((prevNotes) => prevNotes.filter((note) => note.key !== id));
  }

  return (
    <div>
      <Header />
      <div>
        <form>
          <input
            name="title"
            onChange={handleChange}
            value={newNote.title}
            placeholder="Title"
          />
          <textarea
            name="content"
            onChange={handleChange}
            value={newNote.content}
            placeholder="Take a note..."
            rows="3"
          />
          <button onClick={addNote}>Add</button>
        </form>
      </div>
      <div>
        {allNotes.map((note) => (
          <Note
            key={note.key}
            id={note.key}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
