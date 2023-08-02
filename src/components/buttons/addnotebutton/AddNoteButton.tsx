import './AddNoteButton.css'

interface AddNoteButtonProps{
    setActive: (bol: boolean) => void,
    children?: React.ReactNode,
}

const AddNoteButton: React.FC<AddNoteButtonProps> = ({setActive = ()=>{}, children}) => {

    return(
            <div className='wrap'>
                <button className="add-note__btn" onClick={() => setActive(true)}>
                    {children}
                </button>
            </div>
    );
}


export default AddNoteButton;   