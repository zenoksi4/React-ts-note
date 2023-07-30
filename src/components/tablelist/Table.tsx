import './Table.css'

interface TableProps{
    children?: React.ReactNode
}

const Table: React.FC<TableProps> = ({children}) => {

    return(
        <table className='note-table'>
            {children}
        </table>
    );
}


export default Table;