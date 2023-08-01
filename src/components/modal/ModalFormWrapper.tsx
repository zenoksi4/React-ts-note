
interface ModalFormWrapperProps{
    children?: React.ReactNode,
}

const ModalFormWrapper: React.FC<ModalFormWrapperProps> = ({children}) => {
    return(
        <div className="w-96 p-8 rounded-md bg-[#ffffff5b] backdrop-blur-md text-white text-lg">
            {children}
        </div>
    )
}

export default ModalFormWrapper;