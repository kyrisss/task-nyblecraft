import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../redux/notesSlice';
import { AppDispatch, RootState } from '../../redux/store';

const SearchForm = () =>{

    const search = useSelector((state: RootState) => state.notes.search)
    const dispatch = useDispatch<AppDispatch>()

    const onChangeSearch = (e: React.SyntheticEvent<HTMLInputElement>) =>{
        dispatch(setSearch(e.currentTarget.value))
    }

    return(
        <input type="text" className="form-control seacrh-input" placeholder="Найти заметку" onChange={onChangeSearch} value={search}/>
    )
}

export default SearchForm