import { useState } from 'react';
import './App.css';
import CreateAreaField from './component/CreateArea';
import Header from './component/Header';
import ShowNoteList from './component/ShowCard';

const App = () => {
  const [notes, setNotes] = useState([])


  // Add Note or store the note js Object in the state
  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }
  console.log('notes', notes);

  // Update Note
  const updateNote = (id, updatedNote) => {
    setNotes(prevNotes => {
      return prevNotes.map((noteItem, index) => {
        if (index === id) {
          return updatedNote
        } else {
          return noteItem
        }
      })
    })
  }

  // Delete Note
  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className="App">
      <Header/>
      <CreateAreaField
        addNote={addNote}
      />
      {notes.map((noteItem, index) => {
        return (
          <ShowNoteList
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onClickDelete={() => deleteNote(index)}
            // onClickUpdate={(updatedNote) => updateNote(index, updatedNote)} // Fixed this line
          />
        )
      })}
    </div>
  );
}

export default App;
