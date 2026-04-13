//modal for item description
const Modal = ({ children, onClose }) => {
  return (
    //clicking off closes modal
    <div className="modal-overlay" onClick={onClose}>
      
      {/*prevents clicking modal from closing it */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
        
        {/*close button*/}
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;