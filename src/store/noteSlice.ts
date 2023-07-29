import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Note = {
    id: string;
    title:string;
    category:string;
    content:string;
}

type NotesState = {
    list: Note[];
}

const initialState: NotesState = {
    list: [],
}

type addNotesAction = {
    title:string;
    category:string;
    content:string;
}

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, action:PayloadAction<addNotesAction>) {
            state.list.push({
                id: Math.random().toString(),
                title: action.payload.title,
                category: action.payload.category,
                content: action.payload.content,
            });
        },
        removeNote(state, action:PayloadAction<string>) {
            state.list = state.list.filter(note => note.id !== action.payload);
        }
    },
});

export const { addNote , removeNote} = noteSlice.actions;

export default noteSlice.reducer;