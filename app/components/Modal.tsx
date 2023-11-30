import React, { Children } from 'react'

interface ModalProps {
    modalOpen : boolean
    setModalOpen : (open : boolean)=> boolean | void;
    children : React.ReactNode
}

const Modal : React.FC<ModalProps> = ({modalOpen, setModalOpen , children}) => {
    return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
            
            {children}
            <div className="modal-action">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button onClick={()=> setModalOpen(false)}
                className="btn">Close</button>
            </form>
            
            </div>
            
        </div>
    </div>
)
}

export default Modal