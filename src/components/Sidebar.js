import React from 'react';
function Sidebar({notes,onAddNote,activeNote,setActiveNote}) {
    const sortedNotes = notes.sort((a, b) => a.lastModified - b.lastModified);
    return (
        <div className='app-sidebar'>
          <div className='app-sidebar-header'>
              <h1>Notes</h1>
              <button className="bg-transparent btn" onClick={onAddNote}>+</button>
          </div>
          <div className='app-sidebar-notes'>
              {sortedNotes.map((note)=>(
                <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={()=>setActiveNote(note.id)}>
                    <div className="sidebar-note-title">
                        <strong>{note.title}</strong>
                    </div>
                </div>  

              ))}             
        </div>
        
        </div>
    );
 }
export default Sidebar