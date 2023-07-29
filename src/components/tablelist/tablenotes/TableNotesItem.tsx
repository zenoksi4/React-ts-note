import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { removeNote, archiveNote } from '../../../store/noteSlice';
import './TableNotesItem.css'

interface TableNotesItemProps{
    id:string
    title: string,
    created: string,
    category: string,
    content: string,
}

const TableNotesItem: React.FC<TableNotesItemProps> = ({id, title, created, category, content}) => {
    let datesContent = content.match(/\d{2}([\/.-])\d{2}\1\d{4}/g)?.join(',');
    let dispatch = useAppDispatch();

    return(
        <tr>
            <td className="note-title">
                <div className="icon-title"><i className="fa-solid fa-shop"></i></div>
                {title}
            </td>

            <td>{created}</td>

            <td>{category}</td>

            <td className="text-ellipsis">{content}</td>

            <td>{datesContent}</td>

            <td className="icons">
                <a href="#" className="icon"><i className="fa-solid fa-pen-to-square"></i></a>

                <div className="icon" onClick={() => dispatch(archiveNote(id))}>
                    <i className="fa-solid fa-folder-plus"></i>
                </div>

                <div className="icon" onClick={() => dispatch(removeNote(id))}>
                    <i className="fa-solid fa-trash"></i>
                </div>
            </td>

        </tr>
    );
}

export default TableNotesItem;