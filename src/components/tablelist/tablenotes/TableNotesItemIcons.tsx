import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { archiveNote, removeNote, unArchiveNote } from "../../../store/noteSlice";

interface IconsProps{
    id:string,
}

const ActiveItemIcons: React.FC<IconsProps> = ({id}) => {
    let dispatch = useAppDispatch();

    return(
        <>
        <div className="icon"><i className="fa-solid fa-pen-to-square"></i></div>

        <div className="icon" onClick={() => dispatch(archiveNote(id))}>
            <i className="fa-solid fa-folder-plus"></i>
        </div>

        <div className="icon" onClick={() => dispatch(removeNote(id))}>
            <i className="fa-solid fa-trash"></i>
        </div>
        </>
    );
}

const ArchiveItemIcons: React.FC<IconsProps> = ({id}) => {
    let dispatch = useAppDispatch();

    return(

        <div className="icon" onClick={() => dispatch(unArchiveNote(id))}>
            <i className="fa-solid fa-folder-plus"></i>
        </div>

    );
}


export {ActiveItemIcons, ArchiveItemIcons};