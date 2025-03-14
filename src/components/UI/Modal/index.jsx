import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ children, isOpen, onClose, title }) {

    if (!isOpen) return null;

    return (
        <div className="overlay">
            <div className="modal">
                <h1>{title}</h1>
                <hr style={{opacity: 0.15, marginTop: '10px'}}/>
                {children}
                <AiOutlineClose onClick={onClose} className="close-icon-modal" />
            </div>
        </div>
    );
}