import './TableNotesItem.css'

interface TableNotesItemProps{
    title: string,
    created: string,
    category: string,
    content: string,
}

const TableNotesItem: React.FC<TableNotesItemProps> = ({title, created, category, content}) => {
    let datesContent = content.match(/\d{2}([\/.-])\d{2}\1\d{4}/g)?.join(',');

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

                <div className="icon">
                    <i className="fa-solid fa-folder-plus"></i>
                </div>

                <div className="icon">
                    <i className="fa-solid fa-trash"></i>
                </div>
            </td>

        </tr>
    );
}

export default TableNotesItem;