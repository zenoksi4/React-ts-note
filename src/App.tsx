import {useState} from 'react'
import ModalAddNote from './components/modal/ModalAddNote/ModalAddNote';
import TableSummary from './components/tablelist/tableSummary/TableSummary';
import TableNotesArchive from './components/tablelist/tablenotes/tableNotesArchive/TableNotesArchive';
import AddNoteButton from './components/buttons/addnotebutton/AddNoteButton';
import TableNotesActive from './components/tablelist/tablenotes/tableNotesActive/TableNotesActive';

function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="grid place-items-center bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 ">
      <TableNotesActive/>
      <AddNoteButton setActive={setModalActive}/>
      <ModalAddNote active={modalActive} setActive={setModalActive}/>
      <TableNotesArchive/>
      <TableSummary/>
    </div>
  );
}

export default App;
