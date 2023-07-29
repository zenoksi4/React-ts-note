import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { removeNote, archiveNote } from '../../../store/noteSlice';
import './TableNotesItem.css'
import { ActiveItemIcons, ArchiveItemIcons } from './TableNotesItemIcons';

interface TableNotesItemProps{
    isArchive: boolean,
    id:string,
    title: string,
    created: string,
    category: string,
    content: string,
}

const TableNotesItem: React.FC<TableNotesItemProps> = ({isArchive, id, title, created, category, content}) => {
    let datesContent = content.match(/\d{2}([.-])\d{2}\1\d{4}/g)?.join(',');

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
                
                {!isArchive && <ActiveItemIcons id = {id}/>}

                {isArchive && <ArchiveItemIcons id = {id}/>}

            </td>

        </tr>
    );
}

export default TableNotesItem;