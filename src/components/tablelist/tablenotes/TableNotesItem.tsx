import { ActiveItemIcons, ArchiveItemIcons } from './TableNotesItemIcons';


interface TableNotesItemProps{
    isArchive: boolean,
    note:{
        id:string,
        title: string,
        created: string,
        category: string,
        content: string,
    }
}

const TableNotesItem: React.FC<TableNotesItemProps> = ({isArchive, note}) => {
    let datesContent = note.content?.match(/(\d+)([\/.-])(\d+)([\/.-])(\d+)/g)?.join(',');

    return(
        <tr className='bg-opacity-70 bg-gray-300 '>
            <td className="flex items-center px-[25px]  py-[12px]">
                <div className="p-3 bg-white bg-opacity-25 rounded-full m-3 text-slate-50">
                    {note.category === 'Task' && <i className="fa-solid fa-shop"></i>}
                    {note.category === 'Random Thought' && <i className="fa-regular fa-lightbulb"></i>}
                    {note.category === 'Idea' && <i className="fa-solid fa-head-side-virus"></i>}
                </div>
                <span className='text-ellipsis'>{note.title}</span>
            </td>

            <td className='px-[25px]  py-[12px]'>{note.created}</td>

            <td className='px-[25px]  py-[12px]'>{note.category}</td>

            <td className="px-[25px]  py-[12px] max-w-[200px] truncate">{note.content}</td>

            <td className='px-[25px]  py-[12px]'>{datesContent}</td>

            <td className="px-[25px]  py-[12px] flex ">
                
                {!isArchive && <ActiveItemIcons note = {note}/>}

                {isArchive && <ArchiveItemIcons note = {note}/>}

            </td>   

        </tr>
    );
}

export default TableNotesItem;