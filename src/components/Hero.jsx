import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section className="section hero-section">
        <div className="content-wrapper">
          <div className="hero-grid">
            {/* LEFT COLUMN */}
            <div className="hero-left">
              <div className="hero-name-row">
                <h1 className="hero-name">
                  Shivam Jaiswal
                  <span className="name-separator"> | </span>
                </h1>

                <button
                  className="btn-primary hero-resume-btn"
                  onClick={() => setIsResumeOpen(true)}
                >
                  View Resume
                </button>
              </div>

              <h2 className="hero-subtitle">
                HR Recruiter | Talent Acquisition
              </h2>

              <hr className="hero-divider" />

              <p className="hero-volunteer-note">
                Entry-level HR Recruiter with practical exposure across the full
                recruitment lifecycle, including candidate sourcing, telephonic
                interviews, interview coordination, and structured hiring
                follow-ups. Currently working as an HR Intern – Recruitment,
                supporting organized hiring pipelines and operational
                recruitment processes.
              </p>

              <p> 
                <em>
                "I am genuinely open to contributing as a volunteer in social and
                community-focused initiatives. I am happy to connect across
                platforms with organizations or individuals seeking support for
                meaningful causes. It would be a privilege to contribute my
                time, skills, and commitment toward work that creates positive
                social impact."
                </em>
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="hero-right">
              <h3>What I Bring</h3>

              <p>
                Hands-on experience supporting end-to-end recruitment workflows
                with a strong focus on structured sourcing, screening, and
                interview coordination.
              </p>

              <p>
                Clear and consistent candidate communication, ensuring regular
                follow-ups to maintain engagement, transparency, and hiring
                process clarity.
              </p>

              <p>
                Practical exposure to Excel-based hiring trackers, recruitment
                documentation, and process reporting, combined with a
                continuous learning mindset toward HR tools and recruitment
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
