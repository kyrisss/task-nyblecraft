import { useSelector, useDispatch } from 'react-redux';
import { deleteFilterTag } from '../../redux/notesSlice';
import { AppDispatch, RootState } from '../../redux/store';

const Filter = () => {

    const filter = useSelector((state: RootState) => state.notes.filter)
    const dispatch = useDispatch<AppDispatch>()
    
    const onDeleteTag = (e: React.MouseEvent<HTMLElement>) =>{
        if(e.currentTarget.textContent){
            dispatch(deleteFilterTag(e.currentTarget.textContent))
        }
    }

    const mapFilter = filter.map((tag, i) => {
        return (
            <span key={i} className="tag" onClick={onDeleteTag}>{tag}</span>
        )
    })

    return (
        <div className="filter-group">
            {mapFilter}
        </div>
    )
}

export default Filter;