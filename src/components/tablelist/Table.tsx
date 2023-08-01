
interface TableProps{
    children?: React.ReactNode
}

const Table: React.FC<TableProps> = ({children}) => {

    return(
        <table className='table-auto my-6 text-2xl shadow-[0_0_20px_rgba(0,0,0,.15)] rounded-md truncate '>
            {children}
        </table>
    );
}


export default Table;