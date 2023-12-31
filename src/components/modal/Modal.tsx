import './Modal.css'
import ReactDom from "react-dom";

interface ModalProps{
    active: boolean,
    setActive: (bol: boolean)=> void,
    children?: React.ReactNode,
}

const Modal: React.FC<ModalProps> = ({active, setActive, children}) => {
    return(        
        ReactDom.createPortal(
        <div className={active ? 'modal active': 'modal'} onClick={() => setActive(false)}>
            <div className='close'><i className="fa-regular fa-circle-xmark"></i></div>
            <div className={active ? `content active`: `content`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById("modal")!
        )
    );  
    
}

export default Modal;