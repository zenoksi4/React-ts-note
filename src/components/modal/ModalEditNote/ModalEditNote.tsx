import Modal from '../Modal';
import { useState } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { editNote } from '../../../store/noteSlice';
import ModalFormWrapper from '../ModalFormWrapper';


interface ModalEditNoteProps{
    active: boolean,
    setActive: (bol: boolean)=> void,
    note:{
        id:string,
        title: string,
        created: string,
        category: string,
        content: string,
    }
}

const ModalEditNote: React.FC<ModalEditNoteProps> = ({active, setActive, note}) => {
    const dispatch = useAppDispatch();
    const id = note.id;
    const created = note.created;

    const [title, setTitle] = useState(note.title)
    const [category, setCategory] = useState(note.category)
    const [content, setContent] = useState(note.content)
    const [valid, setValid] = useState('')

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        setValid('');

        if(title.trim().length === 0 && content.trim().length === 0) {
            setValid('please enter valid fields')
            return
        }

        dispatch(editNote({id, title, created, category, content}));

        setTitle('');
        setCategory('Task');
        setContent('');
        setActive(false);
    }

    return(

        <Modal active={active} setActive={setActive}>
            <ModalFormWrapper>
                <h1 className='text-center text-4xl font-bold'>Edit Note</h1>
                {valid && <span className='text-red-600 font-bold border-b-2 border-red-600' >{valid}</span>}

                <form action="" onSubmit={(event) => (handleSubmit(event), {once: true})}>
                    <label className='py-1' htmlFor="">Title:</label><br/>
                    <input className='mb-4 w-full bg-transparent border-b' type="text" value={title} onChange={(e) => (setTitle(e.target.value), {once: true})}/><br/>

                    <label className='py-1' htmlFor="">Category:</label><br/>
                    <select className='py-1 my-3 text-black rounded-lg bg-transparent cursor-pointer border-b-2' itemType="radio" value={category} onChange={(e) => (setCategory(e.target.value), {once: true})}>
                        <option value="Task">Task</option>
                        <option value="Random Thought">Random Thought:</option>
                        <option value="Idea">Idea</option>
                    </select><br/>

                    <label htmlFor="">Note:</label><br/>
                    <input className='mb-4 w-full bg-transparent border-b' type="text" value={content} onChange={(e) => (setContent(e.target.value), {once: true})} /><br/>

                    <input type="submit" className='p-4 font-bold text-white ring-blue-500 
                        shadow-[inset_0_0_40px_40px_rgb(71,97,161)]
                        hover:shadow-[inset_0_0_10px_0_rgb(71,97,161),0_0_10px_4px_rgb(71,97,161)] hover:bg-inherit cursor-pointer transition-shadow w-full'/><br/>

                </form>
            </ModalFormWrapper>
        </Modal>
        
    );  
}

export default ModalEditNote;