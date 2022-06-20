import { useState } from "react"
import { AppDispatch } from "../../redux/store";
import { addNote } from '../../redux/notesSlice';
import { useDispatch } from 'react-redux';



const AddNote: React.FC = () => {

    const [message, setMessage] = useState('')
    const dispatch = useDispatch<AppDispatch>()
    const [valid, setValid] = useState(true)


    const onChangeValue = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!message) {
            setValid(false)

        } else {
            dispatch(addNote(message))
            setMessage('')
            e.currentTarget.reset()
            setValid(true)
        }

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
                    className={valid ? validBtnClass : notValidBtnClass}>Добавить</button>
            </form>
        </div>
    )
}

export default AddNote