import React from "react";

export default function Projects() {
  return (
    <section className="section projects-section">
      <div className="content-wrapper">
        <h2 className="section-title">Projects & Volunteering</h2>

        {/* =========================
            Academic Project
        ========================= */}
        <div className="project-item">
          <h3 className="project-title">
            Academic Project – HR Practical Exposure
          </h3>

          <p className="project-description italic">
            A comprehensive academic project designed to provide hands-on
            exposure to core Human Resource functions, recruitment workflows,
            and HR operations within a simulated organizational environment.
          </p>

          <ul className="project-points">
            <li>
              Simulated end-to-end recruitment lifecycle including manpower
              planning, sourcing strategies, resume screening, interview
              coordination, and candidate follow-ups.
            </li>
            <li>
              Practiced structured screening methods to align candidate
              profiles with role requirements, focusing on qualification fit,
              communication ability, and role readiness.
            </li>
            <li>
              Gained exposure to interview scheduling workflows, interviewer
              coordination, and maintaining clear communication with candidates
              throughout the hiring process.
            </li>
            <li>
              Worked on HR documentation such as candidate trackers, interview
              status sheets, and basic hiring reports using Excel-based formats.
            </li>
            <li>
              Studied and applied foundational concepts of labour laws, HR
              compliance, and ethical hiring practices relevant to Indian
              organizations.
            </li>
            <li>
              Developed an understanding of recruiter responsibilities in
              execution-heavy environments, including accuracy, follow-ups,
              record-keeping, and process consistency.
            </li>
          </ul>
        </div>

        {/* =========================
            Portfolio Project
        ========================= */}
        <div className="project-item">
          <h3 className="project-title">
            Personal Portfolio Website – HR Profile
          </h3>

          <p className="project-description italic">
            Designed and developed a personal portfolio website to present
            professional profile, HR experience, skills, and documentation in a
            structured and recruiter-friendly format.
          </p>

          <ul className="project-points">
            <li>
              Structured professional information including experience,
              education, skills, and projects into clearly separated sections.
            </li>
            <li>
              Focused on clean layout, content clarity, and readability to align
              with recruiter expectations.
            </li>
            <li>
              Ensured documentation-style presentation to reflect process
              discipline and attention to detail.
            </li>
            <li>
              Used the project as a learning exercise in content organization,
              professional branding, and systematic presentation.
            </li>
          </ul>
        </div>

        {/* =========================
            Volunteering
        ========================= */}
        <div className="project-item">
          <h3 className="project-title">
            Travel & Community Volunteering
          </h3>

          <p className="project-description italic">
            Participated in travel-based volunteering experiences focused on
            community interaction, coordination, and people engagement, helping
            build strong interpersonal and communication skills.
          </p>

          <ul className="project-points">
            <li>
              Communicated and coordinated with people from different regions,
              cultures, and backgrounds.
            </li>
            <li>
              Assisted in group coordination, scheduling, and on-ground support
              activities during travel-based programs.
            </li>
            <li>
              Developed strong people-handling skills, adaptability, and clarity
              in communication through real-world interactions.
            </li>
            <li>
              Strengthened confidence, teamwork, and responsibility in dynamic
              and unfamiliar environments.
            </li>
          </ul>
        </div>
      </div> 
     <p className="closing-note">
  Thank you for taking the time to review my profile.
</p>

    </section>
  );
}
