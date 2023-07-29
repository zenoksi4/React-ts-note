import React from 'react';
import {useState} from 'react'
import Table from "./components/tablelist/Table";
import TableNotesActive from "./components/tablelist/tablenotes/TableNotesActive";
import AddNoteButton from "./components/buttons/addnotebutton/AddNoteButton";
import ModalAddNote from './components/modal/ModalAddNote/ModalAddNote';
import "./App.css";

function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="container">
      <TableNotesActive/>
      <AddNoteButton setActive={setModalActive}/>
      <ModalAddNote active={modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default App;
