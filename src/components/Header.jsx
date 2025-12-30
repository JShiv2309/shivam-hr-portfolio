import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-quote">
          HR Recruiter focused on Talent Acquisition & Hiring Operations
        </div>

        <button
          className="btn-primary"
          onClick={() => setIsContactOpen(true)}
        >
          Let’s Connect
        </button>
      </header>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
