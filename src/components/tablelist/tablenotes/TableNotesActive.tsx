import TableNotes from "./TableNotes";
import { useAppSelector } from "../../../hooks/useAppSelector";
import Table from "../Table";
import TableNotesItem from "./TableNotesItem";



const TableNotesActive: React.FC = () => {
    const notes = useAppSelector(state => state.notes.list);

    return(
        <Table>
            <TableNotes>
                {notes.map((note) =>(
                    <TableNotesItem
                    key={note.id}
                    {...note}
                    />
                ))}
            </TableNotes>
        </Table>
    );
}

export default TableNotesActive;