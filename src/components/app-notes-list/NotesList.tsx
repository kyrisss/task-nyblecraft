import { AppDispatch, RootState } from "../../redux/store"
import { useSelector, useDispatch } from 'react-redux';
import NotesItem from "../app-notes-item/NotesItem";
import { Note } from "../../redux/notesSlice";


const NotesList = () => {

    const notes = useSelector((state: RootState) => state.notes.notes)
    const filterSet = useSelector((state: RootState) => state.notes.filter)
    const filterArray = Array.from(filterSet)
    const search = useSelector((state: RootState) => state.notes.search)

    const searchNotes = notes.filter(note => {
        return note.message.includes(search)
    })

    let filterNotes: Note[]

    if(filterArray.length !== 0){
        filterNotes = searchNotes.filter(note => {
           return filterArray.some( tag => note.message.includes(tag))
       })
    }
    else{
        filterNotes = searchNotes
    }

    const elements = filterNotes.map(note => {
        return <NotesItem
            key={note.id}
            id={note.id}
            message={note.message}
            tags={note.tags} />
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default NotesList
