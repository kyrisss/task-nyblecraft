import { useRef, useState } from "react"
import { changeNote, deleteNote, Note, setFilter } from "../../redux/notesSlice"
import { AppDispatch } from "../../redux/store"
import { useDispatch } from 'react-redux';


interface Prop {
    id: string
    message: string
    tags: string[]
}

const NotesItem: React.FC<Prop> = ({ id, tags, message}) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [editMode, setEditMode] = useState<Boolean>(false)
    const dispatch = useDispatch<AppDispatch>()

    const toggleEditMode = () => {
        setEditMode(tags => !tags)
        if (inputRef && inputRef.current && editMode) {
            inputRef.current.focus();
        }
    }

    const onChangeFilter = (e: any) => {
        dispatch(setFilter(e.currentTarget.textContent))
    }

    const mapTags = tags.map((tag, i) => {
        return (
            <span key={i} className="tag" onClick={onChangeFilter}>{tag}</span>
        )
    })

    const changeMessage = (e: React.SyntheticEvent<HTMLInputElement>) => {
        const {id} = e.currentTarget.dataset

        dispatch(changeNote({
            id: String(id),
            message: e.currentTarget.value
        }))
    }

    const onDelete = (id: string) => {

        dispatch(deleteNote(id))
    }

    return (
        <li className="list-group-item" >
            <div className="messageContainer">
                <input type="text" ref={inputRef} className="list-group-item-input" value={message} disabled={!editMode} data-id={id} onChange={changeMessage} onBlur={toggleEditMode}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={toggleEditMode}>
                        <i className="fas fa-edit" ></i>
                    </button>
                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={() => onDelete(id)}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div className="tagsContainer">
                {mapTags}
            </div>
        </li>
    )
}

export default NotesItem;