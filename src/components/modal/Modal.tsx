import ReactDom from "react-dom";

interface ModalProps{
    active: boolean,
    setActive: (bol: boolean)=> void,
    children?: React.ReactNode,
}

const Modal: React.FC<ModalProps> = ({active, setActive, children}) => {
    return(        
        ReactDom.createPortal(
            <div className={active ? 'h-screen w-screen bg-[rgba(0,0,0,0.75)] fixed inset-0 flex place-content-center opacity-1 pointer-events-auto ease-out transition-all': 
            'h-screen w-screen bg-[rgba(0,0,0,0.75)] fixed inset-0 flex place-content-center opacity-0 pointer-events-none ease-out transition-all'} 
            onClick={() => setActive(false)}>
    
                <div className='text-gray-300 absolute text-4xl right-1/4 top-[0px] z-10 hover:text-gray-100 hover:cursor-pointer' onClick={() => setActive(false)}><i className="fa-regular fa-circle-xmark"></i></div>
                <div className={active ? `p-6 px-40 h-3/6 scale-100 transition-all`: `p-6 px-40 h-3/6 scale-50 transition-all left-0 top-0`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById("modal")!
        )
    );  
    
}

export default Modal;