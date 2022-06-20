import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const AppInfo: React.FC = () => {

    const notes = useSelector((state: RootState) => state.notes.notes)
    
    return(
        <div className="app-info">
            <h1>Тестовое задание nyblecraft</h1>
            <h2>Общее число заметок: {notes.length}</h2>
        </div>
    )
}

export default AppInfo;