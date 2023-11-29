import React from 'react'

interface ModalProps {
    modalOpen : boolean
    setModalOpen : (open : boolean)=> boolean | void;
}

const Modal : React.FC<ModalProps> = ({modalOpen, setModalOpen}) => {
    return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
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