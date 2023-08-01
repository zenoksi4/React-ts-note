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
    },
}

const ActiveItemIcons: React.FC<IconsProps> = ({note}) => {
    let dispatch = useAppDispatch();
    const [modalEditActive, setModalEditActive] = useState(false)

    return(
        <>
        <div className="p-3">
            <i className="fa-solid fa-pen-to-square cursor-pointer" onClick={() => setModalEditActive(true)}></i>
        </div>

        <div className="p-3">
            <i className="fa-solid fa-folder-plus cursor-pointer" onClick={() => dispatch(archiveNote(note.id))}></i>
        </div>

        <div className="p-3">
            <i className="fa-solid fa-trash cursor-pointer" onClick={() => dispatch(removeNote(note.id))}></i>
        </div>
        {modalEditActive && <ModalEditNote active={modalEditActive} setActive={setModalEditActive} note = {note}/>}
        </>
    );
}

const ArchiveItemIcons: React.FC<IconsProps> = ({note}) => {
    let dispatch = useAppDispatch();

    return(

        <div className="icon">
            <i className="fa-solid fa-folder-minus  cursor-pointer" onClick={() => dispatch(unArchiveNote(note.id))}></i>
        </div>

    );
}


export {ActiveItemIcons, ArchiveItemIcons};