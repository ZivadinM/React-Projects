import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { addDoc, onSnapshot, doc,deleteDoc} from "firebase/firestore"
import { notesCollection, db } from "./FireBase"
import "./App.css"

export default function App() {
  

    // const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) ||[])
    const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) ||[])

    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    
// bez firestore
    // function createNewNote() {
    //     const newNote = {
    //         id: nanoid(),
    //         body: "# Type your markdown note's title here"
    //     }
    //     setNotes(prevNotes => [newNote, ...prevNotes])
    //     setCurrentNoteId(newNote.id)
    // }
    //cuvanje u localstorage, svaki put kada se promeni nestu u listi notes-a
    // React.useEffect(()=>{
    //     localStorage.setItem("notes", JSON.stringify(notes))
    // },[notes])

    async function createNewNote() {
        const newNote = {
            body: "# Type your markdown note's title here"
        }
         const  newNoteReferece = await addDoc(notesCollection,newNote)
        setCurrentNoteId(newNoteReferece.id)
    }


    React.useEffect(()=>{
        const unsubscribe = onSnapshot(notesCollection, (snapshot)=>{
            const notesArr = snapshot.docs.map(doc => ({
                ...doc.data(),
                id:doc.id
            }))
            setNotes(notesArr)
        })
        return unsubscribe
    },[])

    function updateNote(text) {
        let i
        
        //dodata funkcija da se editovani note popne na vrh
        setNotes(oldNotes => {
            const x=[];
            for(i=0;i<oldNotes.length;i++)
                if(oldNotes[i].id === currentNoteId)
                    x.unshift({...oldNotes[i],body:text})
                else
                x.push(oldNotes[i])
            return x;

        })
        // setNotes(oldNotes => oldNotes.map(oldNote => {
        //     return oldNote.id === currentNoteId
        //         ? { ...oldNote, body: text }
        //         : oldNote
        // }))
    }
    // //funkcija brisanja bez firestore
    // function deletee(event,note){
    //     event.stopPropagation()
    //     setNotes(oldNotes => {
    //         const x=[]
    //         let i;
    //         for(i=0;i<oldNotes.length;i++)
    //             if(oldNotes[i].id != note.id)
    //                x.push(oldNotes[i])
    //                return x
    //             //drugi nacin
    //             //    setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))

    //     })}
    async function deletee(note){
        const docRef = doc(db,"notes",note.id)
        await deleteDoc(docRef)
    }
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    delete={deletee}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
