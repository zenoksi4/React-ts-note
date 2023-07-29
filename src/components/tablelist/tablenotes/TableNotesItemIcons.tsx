import { useState } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { archiveNote, removeNote, unArchiveNote } from "../../../store/noteSlice";
import ModalEditNote from "../../modal/ModalEditNote/ModalEditNote";

interface IconsProps{
    note:{
        id:string,
        title: string,
        created: string,
        category: string,
        content: string,
    }
}

const ActiveItemIcons: React.FC<IconsProps> = ({note}) => {
    let dispatch = useAppDispatch();
    const [modalEditActive, setModalEditActive] = useState(false)

    return(
        <>
        <div className="icon" onClick={() => setModalEditActive(true)}>
            <i className="fa-solid fa-pen-to-square"></i>
        </div>

        <div className="icon" onClick={() => dispatch(archiveNote(note.id))}>
            <i className="fa-solid fa-folder-plus"></i>
        </div>

        <div className="icon" onClick={() => dispatch(removeNote(note.id))}>
            <i className="fa-solid fa-trash"></i>
        </div>
        {modalEditActive && <ModalEditNote active={modalEditActive} setActive={setModalEditActive} note = {note}/>}
        </>
    );
}

const ArchiveItemIcons: React.FC<IconsProps> = ({note}) => {
    let dispatch = useAppDispatch();

    return(

        <div className="icon" onClick={() => dispatch(unArchiveNote(note.id))}>
            <i className="fa-solid fa-folder-plus"></i>
        </div>

    );
}


export {ActiveItemIcons, ArchiveItemIcons};