import "./footer.css";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>

          <p className="footer-desc">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Our work</a>
            <a href="#">Testimonial</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>Subscribe to our newsletter</h4>
          <p>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>Copyright 2025 © agency.ai - All Right Reserved.</span>

        <div className="socials">
          <span>f</span>
          <span>x</span>
          <span>📷</span>
          <span>in</span>
        </div>
      </div>
    </footer>
  );
}
