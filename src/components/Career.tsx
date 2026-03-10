import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {/* Robust Row-Based Experience Layout */}
          <div className="career-info-box company-group">
            <div className="company-header">
              <h3>JTech Solutions</h3>
              <h5>Lahore, Pakistan · Full-time · 9 months</h5>
            </div>

            <div className="experience-list">
              <div className="experience-row">
                <div className="exp-left">
                  <div className="role-dot"></div>
                  <div className="role-connector"></div>
                  <div className="role-meta">
                    <h4>Associate Machine Learning Engineer</h4>
                    <h5>Contract</h5>
                    <p className="role-date">Oct 2025 – Present · 6 mons</p>
                  </div>
                </div>
                <div className="exp-right">
                  <p>
                    Engineered an end-to-end semantic document comparison platform using Python and FastAPI.
                    Integrated LLMs via Ollama API for automated tone detection and semantic scoring.
                  </p>
                </div>
              </div>

              <div className="experience-row">
                <div className="exp-left">
                  <div className="role-dot"></div>
                  <div className="role-meta">
                    <h4>Data Scientist Intern</h4>
                    <h5>Internship</h5>
                    <p className="role-date">Jul 2025 – Sep 2025 · 3 mons</p>
                  </div>
                </div>
                <div className="exp-right">
                  <p>
                    Modeled customer churn on 50,000+ records utilizing Random Forest and Logistic Regression.
                    Performed feature engineering and statistical analysis to identify key retention drivers.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
