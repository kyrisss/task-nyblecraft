import { useState } from "react"
import { AppDispatch } from "../../redux/store";
import { addNote, Note } from '../../redux/notesSlice';
import { useDispatch } from 'react-redux';
import nextId from "react-id-generator";



const AddNote: React.FC = () => {

    const [message, setMessage] = useState('')
    const dispatch = useDispatch<AppDispatch>()


    const onChangeValue = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }


    const onSubmit = (e: any) => {
        e.preventDefault()
        dispatch(addNote(message))
        e.currentTarget.reset()
    }

    const validBtnClass: string = "btn btn-outline-light"
    const notValidBtnClass: string = "btn btn-outline-danger"


    return (
        <div className="app-add-form" >
            <h3>Новая заметка</h3>
            <form onSubmit={onSubmit}
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Текст заметки"
                    name="name"
                    onChange={onChangeValue} />
                <button type="submit"
                    className={validBtnClass}>Добавить</button>
            </form>
        </div>
    )
}

export default AddNote