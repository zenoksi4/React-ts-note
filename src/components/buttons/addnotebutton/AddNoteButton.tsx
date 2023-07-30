import './AddNoteButton.css'

interface AddNoteButtonProps{
    setActive: (bol: boolean)=> void,
}

const AddNoteButton: React.FC<AddNoteButtonProps> = ({setActive}) => {

    return(
            <div>
                <button className="add-note__btn" onClick={() => setActive(true)}>
                    add note
                </button>
            </div>
    );
}


export default AddNoteButton;   