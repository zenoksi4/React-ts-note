import {useState} from 'react'
import TableNotesActive from "./components/tableList/tableNotes/tableNotesActive/TableNotesActive";
import AddNoteButton from "./components/buttons/addNoteButton/AddNoteButton";
import ModalAddNote from './components/modal/ModalAddNote/ModalAddNote';
import "./App.css";
import TableNotesArchive from './components/tableList/tableNotes/tableNotesArchive/TableNotesArchive';

function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="container">
      <TableNotesActive/>
      <AddNoteButton setActive={setModalActive}/>
      <ModalAddNote active={modalActive} setActive={setModalActive}/>
      <TableNotesArchive/>
    </div>
  );
}

export default App;
