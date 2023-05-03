import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";
// import notes from "../Notes";

function App() {
  const [notes, SetNotes] = useState([]);
  function addNote(inputNote) {
    SetNotes((prevNotes) => {
      return [...prevNotes, inputNote];
    });
  }
  function removeNote(id) {
    SetNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <Header />
      <div className = "create">
        <CreateArea onAddNote={addNote}></CreateArea>
        {notes.map((toDoTitle, index) => (
          <Note
            key={index}
            id={index}
            title={toDoTitle.title}
            content={toDoTitle.content}
            onDelete={removeNote}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
export default App;
