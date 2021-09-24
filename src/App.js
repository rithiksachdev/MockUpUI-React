//import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';
import uuid from 'react-uuid';
import Sidebar from './components/Sidebar';
function App() {
  const [notes,setNote]=useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  )
  const[activeNote,setActiveNote]=useState(false)
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  const onAddNote=()=>{
    const newNote={
      id:uuid(),
      title:"New Note",
      body:"",
      lastModified:Date.now()
    }
    setNote([newNote,...notes]) //new note is appended to the spread notes
  }
  const onDeleteNote=(idToDelete)=>{
    setNote(notes.filter((note)=>note.id!==idToDelete));
  }
  const getActiveNote = () => {
    return notes.find((note)=>note.id===activeNote);
  };
  const onUpdateNote=(updatedNote)=>{
    const updatedNotesArray=notes.map((note)=>{
      if(note.id===activeNote){
      return updatedNote
      }
      return note
    })
    setNote(updatedNotesArray)
  }
  

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} onDeleteNote={onDeleteNote}  />
    </div>
  );
}

export default App;
