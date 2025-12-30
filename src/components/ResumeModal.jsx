export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="resume-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="resume-modal-header">
          <span>Resume</span>
          <button onClick={onClose} className="resume-close">
            ×
          </button>
        </div>

        {/* Viewer */}
        <div className="resume-modal-body">
          <iframe
            src="/Shivam_Jaiswal_Resume.pdf"
            title="Resume"
          />
        </div>
      </div>
    </div>
  );
}
