import './Table.css'
import TableNotesActive from './tablenotes/TableNotesActive';


const Table: React.FC = () => {

    return(
        <table className='note-table'>

            <TableNotesActive></TableNotesActive>
        </table>
    );
}


export default Table;