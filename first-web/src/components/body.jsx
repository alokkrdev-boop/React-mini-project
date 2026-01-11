import "./body.css";

export default function Body() {
  return (
    <section className="body">

      {/* ===== OUR LATEST WORK ===== */}
      <div className="work">
        <h2>Our latest work</h2>
        <p>
          Browse our portfolio of innovative digital projects that showcase
          creativity, performance, and results.
        </p>

        <div className="work-grid">
          <div className="work-card">
            <div className="work-img mobile"></div>
            <h4>Mobile app marketing</h4>
            <span>We turn bold ideas into powerful digital solutions that connect...</span>
          </div>

          <div className="work-card active">
            <div className="work-img dashboard"></div>
            <h4>Dashboard management</h4>
            <span>We turn bold ideas into powerful digital solutions that connect...</span>
          </div>

          <div className="work-card">
            <div className="work-img fitness"></div>
            <h4>Fitness app promotion</h4>
            <span>We turn bold ideas into powerful digital solutions that connect...</span>
          </div>
        </div>
      </div>

      {/* ===== MEET THE TEAM ===== */}
      <div className="team">
        <h2>Meet the team</h2>
        <p>
          A passionate team of digital experts dedicated to your brand’s success.
        </p>

        <div className="team-grid">
          <div className="team-card">
            <img src="../assets/11.png" alt="" />
            <h5>Hailey Carter</h5>
            <span>CEO & Founder</span>
          </div>

          <div className="team-card">
            <img src="../assets/11.png" alt="" />
            <h5>James Walker</h5>
            <span>Ads manager</span>
          </div>

          <div className="team-card">
            <img src="/team3.png" alt="" />
            <h5>Jessica Morgan</h5>
            <span>Vice president</span>
          </div>

          <div className="team-card">
            <img src="/team4.png" alt="" />
            <h5>Ashley Bennett</h5>
            <span>Marketing & sales</span>
          </div>

          <div className="team-card">
            <img src="/team5.png" alt="" />
            <h5>Emily Parker</h5>
            <span>Content marketer</span>
          </div>

          <div className="team-card">
            <img src="/team6.png" alt="" />
            <h5>Ryan Mitchell</h5>
            <span>Content writer</span>
          </div>

          <div className="team-card">
            <img src="/team7.png" alt="" />
            <h5>Megan Brooks</h5>
            <span>Performance manager</span>
          </div>

          <div className="team-card">
            <img src="/team8.png" alt="" />
            <h5>Amber Foster</h5>
            <span>Senior writer</span>
          </div>
        </div>
      </div>

      {/* ===== CONTACT ===== */}
      <div className="contact">
        <h2>Reach out to us</h2>
        <p>
          Ready to grow your brand? Let’s connect and build something exceptional
          together.
        </p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email id" />
          </div>

          <textarea placeholder="Enter your message"></textarea>

          <button type="submit">Submit →</button>
        </form>
      </div>

    </section>
  );
}
