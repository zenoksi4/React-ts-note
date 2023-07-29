interface TableNotes{
    children?: React.ReactNode
}

const TableNotes: React.FC<TableNotes> = ({children}) => {

    return(
        <>
            <thead>     
                <tr>  
                    <th>Name</th>
                    <th>Created</th>
                    <th>Category</th>
                    <th>Content</th>
                    <th>Dates</th>
                    <th>ICONS</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </>
    );
}

export default TableNotes;