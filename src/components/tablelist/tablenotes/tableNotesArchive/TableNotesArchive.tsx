import TableNotes from "../TableNotes";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import Table from "../../Table";
import TableNotesItem from "../TableNotesItem";


const TableNotesArchive: React.FC = () => {
    const notes = useAppSelector(state => state.notes.listArchive);

    return(
        <>
            <h1>Archive</h1>
            <Table>
                <TableNotes>
                    {notes.map((note) =>(
                        <TableNotesItem key={note.id} isArchive= {true} note = {note} />
                    ))}
                </TableNotes>
            </Table>
        </>
    );
}

export default TableNotesArchive;