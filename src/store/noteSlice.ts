import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Note = {
    id: string;
    title:string;
    created:string;
    category:string;
    content:string;
}

type NotesState = {
    list: Note[];
    listArchive: Note[];
}

const initialState: NotesState = {
    list: [ {              
        id: Math.random().toString(),
        title: 'note1',
        created: new Date().toLocaleDateString('uk'),
        category: 'category1',
        content: 'notes1 03.09.2022,02.09.2022'
    },
    ],
    listArchive:[]
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
                created: new Date().toLocaleDateString('uk'),
                category: action.payload.category,
                content: action.payload.content,
            });
        },
        removeNote(state, action:PayloadAction<string>) {
            state.list = state.list.filter(note => note.id !== action.payload);
        },
        archiveNote(state, action:PayloadAction<string>) {
            let toArchiveNote = state.list.find(note => note.id === action.payload)
            if(toArchiveNote){
                state.listArchive.push(toArchiveNote);
            }
            state.list = state.list.filter(note => note.id !== action.payload);

        },
        unArchiveNote(state, action:PayloadAction<string>) {
            let toActiveNote = state.listArchive.find(note => note.id === action.payload)
            if(toActiveNote){
                state.list.push(toActiveNote);
            }
            state.listArchive = state.listArchive.filter(note => note.id !== action.payload);

        }
    },
});

export const { addNote , removeNote, archiveNote, unArchiveNote} = noteSlice.actions;

export default noteSlice.reducer;