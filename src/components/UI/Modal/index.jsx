import './styles.css';
import { AiOutlineClose } from 'react-icons/ai';

export default function Modal({
  children,
  isOpen,
  onClose,
  title,
  width = '',
  lineTitle = true,
  btnClose = true,
  borderRadius = '',
  padding = '',
}) {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div
        className="modal"
        style={{
          width: width,
          borderRadius: borderRadius,
          padding: padding,
        }}
      >
        <h1>{title}</h1>
        {lineTitle && <hr style={{ opacity: 0.15, marginTop: '10px' }} />}
        {children}
        {btnClose && <AiOutlineClose onClick={onClose} className="close-icon-modal" />}
      </div>
    </div>
  );
}
