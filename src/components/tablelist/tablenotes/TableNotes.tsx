interface TableNotesProps{
    children?: React.ReactNode
}

const TableNotes: React.FC<TableNotesProps> = ({children}) => {

    return(
        <>
            <thead className="text-slate-50">     
                <tr className="rounded-t-5 text-left">  
                    <th className="py-3 px-6">Name</th>
                    <th className="py-3 px-6">Created</th>
                    <th className="py-3 px-6">Category</th>
                    <th className="py-3 px-6">Content</th>
                    <th className="py-3 px-6">Dates</th>
                    <th className="py-3 px-6">ICONS</th>
                </tr>
            </thead>
            <tbody className="font-bold"> 
                {children}
            </tbody>
        </>
    );
}

export default TableNotes;