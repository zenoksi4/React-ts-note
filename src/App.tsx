import {useState} from 'react'
import ModalAddNote from './components/modal/ModalAddNote/ModalAddNote';
import "./App.css";
import TableSummary from './components/tablelist/tableSummary/TableSummary';
import TableNotesArchive from './components/tablelist/tablenotes/tableNotesArchive/TableNotesArchive';
import AddNoteButton from './components/buttons/addnotebutton/AddNoteButton';
import TableNotesActive from './components/tablelist/tablenotes/tableNotesActive/TableNotesActive';

function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="container">
      <TableNotesActive/>
      <AddNoteButton setActive={setModalActive}>Add note</AddNoteButton>
      <ModalAddNote active={modalActive} setActive={setModalActive}/>
      <TableNotesArchive/>
      <TableSummary/>
    </div>
  );
}

export default App;
