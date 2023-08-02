import { ActiveItemIcons, ArchiveItemIcons } from './TableNotesItemIcons';
import './TableNotesItem.css'
import '../../../index.css'
import { MdOutlineOtherHouses } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";

interface TableNotesItemProps{
    isArchive: boolean,
    note:{
        id:string,
        title: string,
        created: string,
        category: string,
        content: string,
    }
    isSb?:boolean
}

const TableNotesItem: React.FC<TableNotesItemProps> = ({isArchive, note, isSb}) => {
    let datesContent = note.content?.match(/(\d+)([\/.-])(\d+)([\/.-])(\d+)/g)?.join(',');

    return(
        <tr>
            <td className="note-title">
                <div className="icon-title">
                    {note.category === 'Task' && <MdOutlineOtherHouses size={'50px'}/>}
                    {note.category === 'Random Thought' && <BiBrain size={'50px'}/>}
                    {note.category === 'Idea' && <TbBulb size={'50px'}/>}
                </div>
                <span className='text-ellipsis'>{note.title}</span>
            </td>

            <td>{note.created}</td>

            <td>{note.category}</td>

            <td className="text-ellipsis">{note.content}</td>

            <td>{datesContent}</td>

            <td className="icons">
                
                {!isArchive && <ActiveItemIcons isSb={isSb} note = {note}/>}

                {isArchive && <ArchiveItemIcons isSb={isSb} note = {note}/>}

            </td>   

        </tr>
    );
}

export default TableNotesItem;