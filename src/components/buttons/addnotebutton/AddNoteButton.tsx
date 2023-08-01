
interface AddNoteButtonProps{
    setActive: (bol: boolean)=> void,
}

const AddNoteButton: React.FC<AddNoteButtonProps> = ({setActive}) => {

    return(
            <div>
                <button className="py-5 px-11 flex m-5 rounded-xl leading-4 text-center
                 uppercase font-bold text-white ring-blue-500 
                 shadow-[inset_0_0_40px_40px_rgb(71,97,161)]
                    hover:shadow-[inset_0_0_10px_0_rgb(71,97,161),0_0_10px_4px_rgb(71,97,161)] hover:bg-inherit cursor-pointer transition-shadow" onClick={() => setActive(true)}>
                    add note
                </button>
            </div>
    );
}


export default AddNoteButton;   