import React from "react";

function Main({activeNote,onUpdateNote,onDeleteNote}) {
    const onEditField = (key,value) => {
        onUpdateNote({
            ...activeNote,
            [key]:value,
            lastModified:Date.now()
        })
    }
    const downloadTxtFile = (value) => {
        const element = document.createElement("a");
        const file = new Blob([value], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = activeNote.title + ".txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      }
    if(!activeNote) return <div className='no-active-note'>There is no note selected</div>
    
    return( 
    <div className="app-main">
      <div className="app-main-note-edit">
        <div className="row">
            <div className="col">
            <input 
            type="text"
            id="title"
            value={activeNote.title}
            placeholder="Note Title"
            onChange={(e)=>onEditField("title",e.target.value)}
            autoFocus/>
            </div>
            <div className="col">

            <small className='note-meta'>{new Date().toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                })}
              </small>

            </div>
        </div>
        <textarea id="body"
         value={activeNote.body}
         placeholder="Write your note here"
         onChange={(e)=>onEditField("body",e.target.value)}
        />
        <button className="m-3 btn btn-danger" onClick={()=>onDeleteNote(activeNote.id)}>Delete</button>
        <button className="btn btn-info" onClick={() => downloadTxtFile(activeNote.body)}>Save to Text</button>
      </div>
    </div>
    );
}

export default Main