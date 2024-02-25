export default function Sidebar(propss) {
    
    const noteElements = propss.notes.map((note) => {
//prva linija ce biti naslov 
        return <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === propss.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => propss.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")}</h4>

                <button 
                    className="delete-btn"
onClick={()=>propss.delete(note)}
>
                    <i className="gg-trash trash-icon"></i>
                </button>

            </div>
        </div>
    })

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={propss.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
