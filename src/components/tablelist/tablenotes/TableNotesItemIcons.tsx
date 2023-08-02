import { useState } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { archiveNote, removeNote, unArchiveNote } from "../../../store/noteSlice";
import ModalEditNote from "../../modal/ModalEditNote/ModalEditNote";
import { BiEditAlt } from "react-icons/bi";
import { TbArchive, TbArchiveOff } from "react-icons/tb"
import { FaTrash } from "react-icons/fa";

interface IconsProps{
    note:{
        id:string,
        title: string,
        created: string,
        category: string,
        content: string,
    },
    isSb?: boolean
}

const ActiveItemIcons: React.FC<IconsProps> = ({note, isSb = false}) => {
    let dispatch = useAppDispatch();
    const [modalEditActive, setModalEditActive] = useState(false)

    return(
        <>
        <div className="icon" onClick={() => isSb || setModalEditActive(true)}>
            <BiEditAlt size={'30px'}/>
        </div>

        <div className="icon" onClick={() => dispatch(archiveNote(note.id))}>
            <TbArchive size={'30px'}/>
        </div>

        <div className="icon" onClick={() => dispatch(removeNote(note.id))}>
            <FaTrash size={'25px'}  />
        </div>
        {modalEditActive && <ModalEditNote active={modalEditActive} setActive={setModalEditActive} note = {note}/>}
        </>
    );
}

const ArchiveItemIcons: React.FC<IconsProps> = ({note}) => {
    let dispatch = useAppDispatch();

    return(

        <div className="icon" onClick={() => dispatch(unArchiveNote(note.id))}>
            <TbArchiveOff size={'30px'}/>
        </div>

    );
}


export {ActiveItemIcons, ArchiveItemIcons};