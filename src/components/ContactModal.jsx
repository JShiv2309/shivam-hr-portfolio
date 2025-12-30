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
              href="https://www.linkedin.com/in/shivam-jaiswal-0b5073243?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFBgJc7NcRFyp51XfLwxJHw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shivam Jaiswal
            </a>
          </li>

          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/JShiv2309"
              target="_blank"
              rel="noopener noreferrer"
            >
              JShiv2309
            </a>
          </li>

          <li>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://www.instagram.com/shivj_23/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shivj_23
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
