
import './App.scss';
import AddNote from './components/app-add-notes/AddNote';
import Filter from './components/app-filter/Filter';
import AppInfo from './components/app-info/AppInfo';
import NotesList from './components/app-notes-list/NotesList';
import SearchForm from './components/app-search-form/SearchForm';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchForm />
          <Filter />
        </div>
        <AddNote />
        <NotesList />
      </div>
    </Provider>
  );
}

export default App;
