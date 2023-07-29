import { useAppSelector } from "../../../../hooks/useAppSelector";
import TableNotesItem from "../TableNotesItem";
import Table from "../../Table";
import TableNotes from "../TableNotes";



const TableNotesActive: React.FC = () => {
    const notes = useAppSelector(state => state.notes.list);

    return(
        <Table>
            <TableNotes>
                {notes.map((note) =>(
                    <TableNotesItem
                    key={note.id}
                    isArchive= {false}
                    {...note}
                    />
                ))}
            </TableNotes>
        </Table>
    );
}

export default TableNotesActive;