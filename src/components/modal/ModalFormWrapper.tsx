import './ModalFormWrapper.css'

interface ModalFormWrapperProps{
    children?: React.ReactNode,
}

const ModalFormWrapper: React.FC<ModalFormWrapperProps> = ({children}) => {
    return(
        <div className="modal-content">
            {children}
        </div>
    )
}

export default ModalFormWrapper;