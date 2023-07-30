import Modal from '../Modal';
import {useState} from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { addNote } from '../../../store/noteSlice';
import ModalFormWrapper from '../ModalFormWrapper';

interface AddNoteModalProps{
    active: boolean,
    setActive: (bol: boolean)=> void,
}

const ModalAddNote: React.FC<AddNoteModalProps> = ({active, setActive}) => {
    const dispatch = useAppDispatch();

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('Task')
    const [content, setContent] = useState('')
    const [valid, setValid] = useState('')

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        setValid('')

        if(title.trim().length === 0 && content.trim().length === 0) {
            setValid('please enter valid fields')
            return
        }

        dispatch(addNote({title, category, content}));

        setTitle('');
        setCategory('Task');
        setContent('');
        setActive(false);

    }

    return(
        <Modal active={active} setActive={setActive}>
            <ModalFormWrapper>
                <h1>Add Note</h1>
                {valid && <span className='invalid-field' >{valid}</span>}

                <form action="" onSubmit={(event) => (handleSubmit(event))}>
                    <label htmlFor="">Title</label><br/>
                    <input type="text" value={title} onChange={(e) => (setTitle(e.target.value))}/><br/>

                    <label htmlFor="">Category</label><br/>
                    <select className='category-input' itemType="radio" value={category} onChange={(e) => (setCategory(e.target.value))}>
                        <option value="Task">Task</option>
                        <option value="Random Thought">Random Thought</option>
                        <option value="Idea">Idea</option>
                    </select><br/>

                    <label htmlFor="">Note</label><br/>
                    <input type="text" value={content} onChange={(e) => (setContent(e.target.value))} /><br/>

                    <input type="submit" className='submit-btn'/><br/>

                </form>
            </ModalFormWrapper>
        </Modal>
    );  
}

export default ModalAddNote;