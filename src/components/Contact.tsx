import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h3>Contact</h3>
        </div>

        <div className="contact-grid">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:inamulhassan.tech@gmail.com" data-cursor="disable">
                inamulhassan.tech@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+92 305 9737538</p>
            <h4>Location</h4>
            <p>Lahore, Pakistan</p>
          </div>

          <div className="contact-box">
            <h4>Education</h4>
            <p>BS in Computer Science</p>
            <p className="edu-year">2023 - 2027</p>
            <p className="edu-detail">Superior University</p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            <div className="social-links-grid">
              <a href="https://github.com/sufiinamulhassan" target="_blank" data-cursor="disable" className="contact-social">
                Github <MdArrowOutward />
              </a>
              <a href="https://www.linkedin.com/in/sufiinamulhassan/" target="_blank" data-cursor="disable" className="contact-social">
                Linkedin <MdArrowOutward />
              </a>
              <a href="https://leetcode.com/u/sufiinamulhassan" target="_blank" data-cursor="disable" className="contact-social">
                LeetCode <MdArrowOutward />
              </a>
              <a href="https://www.kaggle.com/sufiinamulhassan" target="_blank" data-cursor="disable" className="contact-social">
                Kaggle <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>

        <footer className="footer-area">
          <div className="footer-line"></div>
          <div className="footer-content">
            <p className="footer-copyright">
              Inam Ul Hassan's Portfolio <span className="footer-separator">|</span> <MdCopyright /> {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
