import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Let's Work Together</h1>
      <p>
        I'm always excited to team up with visionary organizations or simply chat about design ideas. 
        Want to brainstorm ideas together? I'd love to chat! Feel free to reach out at:
      </p>
      <div className="contact-email">
        <a href="mailto:iamneginsem@gmail.com">iamneginsem@gmail.com</a>
      </div>
      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:iamneginsem@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact; 