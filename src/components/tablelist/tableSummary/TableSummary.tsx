import { useAppSelector } from "../../../hooks/useAppSelector";
import Table from "../Table";


const TableSummary: React.FC = () => {
    const notes = useAppSelector(state => state.notes.list);
    const archiveNotes = useAppSelector(state => state.notes.listArchive);


    return(
        <>
            <h1 className="font-bold text-4xl py-5">Active category</h1>
            <Table>
                <thead className="text-slate-50">     
                    <tr className=" text-left">  
                        <th className="py-3 px-20">Note Category</th>
                        <th className="py-3 px-6">Active</th>
                        <th className="py-3 px-6">Archived</th>

                    </tr>
                </thead>
                <tbody className="bg-opacity-70 bg-gray-300">
                    <tr>
                        <td className="flex items-center">
                            <div className="p-3 bg-white bg-opacity-25 rounded-full m-3 text-slate-50"><i className="fa-solid fa-shop"></i></div>
                            Task
                        </td>
                        <td>{notes.filter(note => note.category == 'Task').length}</td>
                        <td>{archiveNotes.filter(note => note.category == 'Task').length}</td>
                    </tr>

                    <tr>
                    <td className="flex items-center">
                        <div className="p-3 bg-white bg-opacity-25 rounded-full m-3 text-slate-50"><i className="fa-regular fa-lightbulb"></i></div>
                            Random Thought
                        </td>
                        <td>{notes.filter(note => note.category == 'Random Thought').length}</td>
                        <td>{archiveNotes.filter(note => note.category == 'Random Thought').length}</td>
                    </tr>

                    <tr>
                    <td className="flex items-center">
                        <div className="p-3 bg-white bg-opacity-25 rounded-full m-3 text-slate-50"><i className="fa-solid fa-head-side-virus"></i></div>
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