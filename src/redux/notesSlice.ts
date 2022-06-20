import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import nextId from "react-id-generator";
import data from '../JSON/data.json'

interface changeNoteAction{
  id: string,
  message: string,
}

export interface Note {
  id: string,
  message: string,
  tags: string[]
}

export interface NotesState {
  notes: Note[],
  filter: string[],
  search: string,
  isLoading: boolean
}

export const generateTags = (text: string) => {
  const arr = []
  let startIndex = -1
  console.log(text)

  while ((startIndex = text.indexOf('#', startIndex + 1)) !== -1) {
      let hashIndex = text.indexOf('#', startIndex)
      let spaceIndex = text.indexOf(' ', hashIndex)
      console.log(hashIndex, spaceIndex)
      if(spaceIndex == -1){
          arr.push(text.slice(hashIndex))
      } else {
          arr.push(text.slice(hashIndex, spaceIndex))
      }

  }
  return arr
}

const initialState: NotesState = {
  notes: data,
  filter: [],
  search: '',
  isLoading: true
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      if(!state.filter.includes(action.payload)){
        state.filter.push(action.payload)
      }
    },
    deleteFilterTag: (state, action:PayloadAction<string>) => {
      let tag = state.filter.find(tag => tag === action.payload)
      if(tag){
        const index = state.filter.indexOf(tag)
        state.filter = [...state.filter.slice(0, index), ...state.filter.slice(index + 1)]

      }
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    addNote: (state, action:PayloadAction<string>) => {
      state.notes.push({
        id: nextId(),
        message: action.payload,
        tags: generateTags(action.payload)
      })
    },
    changeNote: (state, action:PayloadAction<changeNoteAction>) => {
      let note = state.notes.find(el => el.id === action.payload.id)

      if(note){
        const index = state.notes.indexOf(note)
        state.notes[index].message = action.payload.message
        state.notes[index].tags = generateTags(action.payload.message)
      }
    },
    deleteNote: (state, action:PayloadAction<string>) => {
      let note = state.notes.find(el => el.id === action.payload)
      if(note){
        const index = state.notes.indexOf(note)
        state.notes = [...state.notes.slice(0, index), ...state.notes.slice(index + 1)]

      }
    },
  },
})

export const { setFilter, setSearch, changeNote, addNote, deleteNote, deleteFilterTag } = notesSlice.actions

export default notesSlice.reducer