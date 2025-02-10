import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ children, isOpen, onClose }) {

    if (!isOpen) return null;

    return (
        <div className="overlay">
            <div className="modal">
                {children}
                <AiOutlineClose onClick={onClose} className="close-icon-modal" />
            </div>
        </div>
    );
}