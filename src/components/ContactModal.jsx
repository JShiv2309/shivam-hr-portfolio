export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="modal-close"
          aria-label="Close contact modal"
          onClick={onClose}
        >
          ×
        </button>

        <h2>Let’s Connect</h2>

        <p>
          Feel free to reach out for recruitment opportunities, HR discussions,
          or professional collaboration.
        </p>

        <ul className="contact-list">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:jshiv.2309@gmail.com">
              jshiv.2309@gmail.com
            </a>
          </li>

          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/shivam-jaiswal"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/shivam-jaiswal
            </a>
          </li>

          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/your-github-username
            </a>
          </li>

          <li>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://instagram.com/your-instagram-handle"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram.com/your-instagram-handle
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
