import React from "react";

const Education = () => {
  return (
    <section className="section">
      <div className="content-wrapper">
        <h2 className="section-title">Education</h2>
       

        <div className="education-grid">
          <div className="education-card">
            <h3>Master of Arts (M.A.) in Economics</h3>
            <p className="edu-institute">
              Mahatma Gandhi Kashi Vidyapeeth
            </p>
            <p className="edu-duration">2025 – 2027</p>
            <p className="edu-desc">
              Academic focus on Economics of Human Resource Development and Labour
              Economics, with emphasis on workforce planning, hiring dynamics, and
              human capital development aligned with modern Talent Acquisition and
              HR operations.
            </p>
          </div>

          <div className="education-card">
            <h3>
              Post Graduate Diploma in Human Resource Management & Service
              Industrial Law
            </h3>
            <p className="edu-institute">
              Banaras Hindu University
            </p>
            <p className="edu-duration">2023 – 2024</p>
            <p className="edu-desc">
              Specialized in recruitment and selection, labour laws, industrial
              relations, and compliance-driven HR practices, supporting structured
              hiring processes and documentation-intensive recruitment environments.
            </p>
          </div>

          <div className="education-card">
            <h3>Bachelor of Commerce (B.Com)</h3>
            <p className="edu-institute">
              Harishchandra P.G. College
            </p>
            <p className="edu-duration">2020 – 2023</p>
            <p className="edu-desc">
              Built a strong foundation in business operations, organizational
              management, and commercial principles, supporting practical
              understanding of corporate environments and cross-functional HR
              coordination.
            </p>
          </div>
        </div>
      </div>
     <div className="section-divider"></div>
    </section>
  );
};

export default Education;
