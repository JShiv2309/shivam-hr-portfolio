export default function Skills() {
  return (
    <section className="section skills">
      <div className="content-wrapper">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {/* Column 1 */}
          <div className="skills-column">
            <div className="skills-block">
              <h3>Core – Recruitment & Talent Acquisition</h3>

              <p className="skills-desc">
                Practical exposure to end-to-end recruitment support activities,
                covering sourcing, screening, interview coordination, and hiring
                follow-ups within structured hiring workflows.
              </p>

              <div className="skills-card">
                <ul>
                  <li>Candidate sourcing and resume shortlisting</li>
                  <li>Telephonic screening and preliminary candidate evaluation</li>
                  <li>Interview scheduling and coordination with stakeholders</li>
                  <li>Candidate follow-ups and engagement tracking</li>
                  <li>Support for selection documentation and hiring records</li>
                </ul>
              </div>
            </div>

            <div className="skills-block">
              <h3>Supporting – HR Operations & Tools</h3>

              <p className="skills-desc">
                Experience supporting operational HR activities with a strong focus
                on documentation accuracy, process discipline, and execution
                consistency in recruitment-driven environments.
              </p>

              <div className="skills-card">
                <ul>
                  <li>Excel-based candidate trackers and recruitment reports</li>
                  <li>Maintaining interview status, hiring data, and recruiter notes</li>
                  <li>HR documentation support and process coordination</li>
                  <li>Exposure to labour laws and compliance-oriented HR practices</li>
                  <li>MS Office and Google Workspace for daily HR operations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="skills-column">
            <div className="skills-block">
              <h3>Learning – Growth, Analytics & Technology</h3>

              <p className="skills-desc">
                Actively developing skills aligned with modern Talent Acquisition
                and HR operations, with an interest in technology adoption, data
                utilization, and process optimization.
              </p>

              <div className="skills-card">
                <ul>
                  <li>GenAI tools for recruitment support and HR documentation</li>
                  <li>Basic Python for data handling and task automation</li>
                  <li>Foundational understanding of HR analytics concepts</li>
                  <li>Interest in recruitment technology and system-driven hiring</li>
                  <li>Continuous learning mindset toward HR process improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> 
    <div className="section-divider"></div>
    </section>
  );
}
