import React from "react";
import "./Webpage.css";
import studySync from "./Images/StudySyn.svg";
import hamburger from "./Images/Hamburger.svg";
import sectionImage from "./Images/usgs-hoS3dzgpHzw-unsplash.jpg";
import googleImg from "./Images/Google.svg";
import microsoftImg from "./Images/Microsoft.svg";
import linkedinImage from "./Images/linkedin.svg";
import vectorEduImg from "./Images/VectorEdu.svg";
import personalisedLearningImg from "./Images/PersonalizedLearn.svg";
import avatar1 from './Images/avatar1.png';
import avatar2 from './Images/avatar2.png';
import avatar3 from './Images/avatar3.png';
import newsImg from './Images/img.png';
function Webpage() {
  return (
    <>
      <div className="header">
        <header className="header-content">
          <a href="#logo" className="logo">
            <img src={studySync} alt="logoImage" className="logo-icon" />
            <span className="logo-text">StudySync</span>
          </a>

          <nav className="nav">
            <a href="#home" className="nav-link">
              Home{" "}
            </a>
            <a href="#features" className="nav-link">
              Features{" "}
            </a>
            <a href="#pricing" className="nav-link">
              Pricing{" "}
            </a>
            <a href="#blog" className="nav-link">
              Blog{" "}
            </a>
            <a href="#about" className="nav-link">
              About{" "}
            </a>
          </nav>

          <a href="#contact" className="contact-button">
            Contact us
          </a>
          <button type="button" className="menu-button">
            <img src={hamburger} alt="menuButton" className="menu-icon" />
          </button>
        </header>
      </div>

      <div className="content">
        <section className="main-section">
          <div className="content-left">
            <p className="section-label">Very proud to introduce</p>
            <h1 className="section-title">
              Seamless learning for brighter futures
            </h1>
            <p className="section-description">
              Our innovation platform offerrs an effortless and seamless
              approach to learning, empowering students of all ages to achieve
              brighter futures,Join us on a transformative journey to simply
              education and unlock your full potential.
            </p>
            <div className="button-group">
              <a href="#start" className="start-button">
                Start Now
              </a>
              <a href="#tour" className="tour-button">
                Take Tour
              </a>
            </div>
          </div>

          <div className="content-right">
            <div className="image-container">
              <img
                src={sectionImage}
                alt="sectionImage"
                className="section-image"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="company-container">
        <h2 className="company-title">Trusted by the best</h2>
        <div className="company-grid">
          <div className="company-logo">
            <img src={googleImg} className="svg-img" />
            <span className="logo-txt">Google</span>
          </div>
          <div className="company-logo">
            <img src={microsoftImg} className="svg-img" />
            <span className="logo-txt">Microsoft</span>
          </div>
          <div className="company-logo">
            <img src={linkedinImage} className="svg-img" />
            <span className="logo-txt">LinkedIn</span>
          </div>
          <div className="company-logo">
            <img src={vectorEduImg} className="svg-img" />
            <span className="logo-txt">VectorEdu</span>
          </div>
        </div>
      </div>

      <div className="feature-container">
        <div className="feature-content">
          <div className="main-info">
            <h2 className="main-title">Our competitive advantage</h2>
            <p className="main-desc">
              This is a section of some fillter text, also known as placeholder
              text. It share some characteristics of real written text but is
              random or otherwise generated.
            </p>
          </div>
          <div className="feature-grid">
            {/* Card 1 */}
            <div className="feature-card">
              <div className="icon-container">
                <img className="feature-svg" src={personalisedLearningImg} />
              </div>
              <div className="feature-info">
                <div className="feature-title">Personalised learning</div>
                <div className="feature-description">
                  Offer tailored learning experiences through AI and machine
                  learning to cater to individual student needs.
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="feature-card">
              <div className="icon-container">
                <img className="feature-svg" src={personalisedLearningImg} />
              </div>
              <div className="feature-info">
                <div className="feature-title">Personalised learning</div>
                <div className="feature-description">
                  Offer tailored learning experiences through AI and machine
                  learning to cater to individual student needs.
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="feature-card">
              <div className="icon-container">
                <img className="feature-svg" src={personalisedLearningImg} />
              </div>
              <div className="feature-info">
                <div className="feature-title">Personalised learning</div>
                <div className="feature-description">
                  Offer tailored learning experiences through AI and machine
                  learning to cater to individual student needs.
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="feature-card">
              <div className="icon-container">
                <img className="feature-svg" src={personalisedLearningImg} />
              </div>
              <div className="feature-info">
                <div className="feature-title">Personalised learning</div>
                <div className="feature-description">
                  Offer tailored learning experiences through AI and machine
                  learning to cater to individual student needs.
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="feature-card">
              <div className="icon-container">
                <img className="feature-svg" src={personalisedLearningImg} />
              </div>
              <div className="feature-info">
                <div className="feature-title">Personalised learning</div>
                <div className="feature-description">
                  Offer tailored learning experiences through AI and machine
                  learning to cater to individual student needs.
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="feature-card">
              <div className="icon-container">
                <img className="feature-svg" src={personalisedLearningImg} />
              </div>
              <div className="feature-info">
                <div className="feature-title">Personalised learning</div>
                <div className="feature-description">
                  Offer tailored learning experiences through AI and machine
                  learning to cater to individual student needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-container">
        <div className="testimonial-content">
          <h2>What Others Says About Us</h2>
        </div>
        <div className="testimonial-grid">
          {/* card 1 */}
          <div className="testimonial-card">
            <div className="testimonial-text">
              StudySyn revolutionized my classroom Engaging content and teacher
              resources make learning enjoyable. Highly recomended for
              educators.
            </div>
            <div className="testimonial-avatar">
              <img src={avatar3} />
            </div>
            <div className="testimonial-details">
              <h3 className="testimonial-name">Sarah jonson</h3>
              <p className="testimonial-desc">8th grade English Teacher</p>
            </div>
          </div>

          {/* card 2 */}
          <div className="testimonial-card">
            <div className="testimonial-text">
              StudySyn revolutionized my classroom Engaging content and teacher
              resources make learning enjoyable. Highly recomended for
              educators.
            </div>
            <div className="testimonial-avatar">
              <img src={avatar2}/>
            </div>
            <div className="testimonial-details">
              <h3 className="testimonial-name">Sarah jonson</h3>
              <p className="testimonial-desc">8th grade English Teacher</p>
            </div>
          </div>

          {/* card 3 */}
          <div className="testimonial-card">
            <div className="testimonial-text">
              StudySyn revolutionized my classroom Engaging content and teacher
              resources make learning enjoyable. Highly recomended for
              educators.
            </div>
            <div className="testimonial-avatar">
              <img src={avatar1} />
            </div>
            <div className="testimonial-details">
              <h3 className="testimonial-name">Sarah jonson</h3>
              <p className="testimonial-desc">8th grade English Teacher</p>
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter-container">
        <div className="newsletter-content">
          {/* Lett */}
          <div className="news-left">
              <img src={newsImg} loading="lazy"/>
          </div>
          {/* Right */}
          <div className="news-right">
              <div className="news-info">
                <h2 className="news-title">
                    Get the latest updates
                </h2>
                <p className="news-desc">
                    sign up for our newsletter
                </p>
              </div>
              <form className="news-form">
                <input className="news-email" placeholder="Email"/>
                <button className="news-send-button">
Send
                </button>
              </form>
              <div className="privacy-policy">
                By signing up to our newsletter you agree to our
                <a className="news-link">Terms of services</a>
                and
                <a className="news-link">Privacy policy</a>
              </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Webpage;
