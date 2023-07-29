import './AddNoteButton.css'

interface AddNoteButtonProps{
    setActive: (bol: boolean)=> void,
}

const AddNoteButton: React.FC<AddNoteButtonProps> = ({setActive}) => {

    return(
            <div>
                <a className="add-note__btn" onClick={() => setActive(true)}>
                    add note
                </a>
            </div>
    );
}


export default AddNoteButton;   