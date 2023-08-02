import { useAppSelector } from "../../../hooks/useAppSelector";
import Table from "../Table";
import { MdOutlineOtherHouses } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";

const TableSummary: React.FC = () => {
    const notes = useAppSelector(state => state.notes.list);
    const archiveNotes = useAppSelector(state => state.notes.listArchive);


    return(
        <>
            <h1>Active category</h1>
            <Table>
                <thead>     
                    <tr>  
                        <th>Note Category</th>
                        <th>Active</th>
                        <th>Archived</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="category-count note-title">
                            <div className="icon-title"><MdOutlineOtherHouses size={'50px'}/></div>
                            Task
                        </td>
                        <td>{notes.filter(note => note.category == 'Task').length}</td>
                        <td>{archiveNotes.filter(note => note.category == 'Task').length}</td>
                    </tr>

                    <tr>
                        <td className="category-count note-title">
                            <div className="icon-title"><BiBrain size={'50px'}/></div>
                            Random Thought
                        </td>
                        <td>{notes.filter(note => note.category == 'Random Thought').length}</td>
                        <td>{archiveNotes.filter(note => note.category == 'Random Thought').length}</td>
                    </tr>

                    <tr>
                        <td className="category-count note-title">
                            <div className="icon-title"><TbBulb size={'50px'}/></div>
                            Idea
                        </td>
                        <td>{notes.filter(note => note.category == 'Idea').length}</td>
                        <td>{archiveNotes.filter(note => note.category == 'Idea').length}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default TableSummary;