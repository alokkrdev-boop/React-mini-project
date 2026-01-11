import "./main.css";

export default function Main() {
  return (
    <section className="main">
      {/* Heading */}
      <div className="maintop">
        <h2 className="maintop1">How can we help?</h2>
        <p className="maintop2">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>
      </div>

      {/* Services */}
      <section className="services">
        <div className="services-grid">

          <div className="service-card">
            <div className="icon-circle">
              <span className="icon">A</span>
            </div>
            <div className="service-content">
              <h3>Advertising</h3>
              <p>
                We turn bold ideas into powerful digital solutions that connect,
                engage...
              </p>
            </div>
          </div>

          <div className="service-card active">
            <div className="icon-circle">
              <span className="icon">C</span>
            </div>
            <div className="service-content">
              <h3>Content marketing</h3>
              <p>
                We turn bold ideas into powerful digital solutions that connect,
                engage and...
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-circle">
              <span className="icon">W</span>
            </div>
            <div className="service-content">
              <h3>Content writing</h3>
              <p>
                We turn bold ideas into powerful digital solutions that connect...
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-circle">
              <span className="icon">S</span>
            </div>
            <div className="service-content">
              <h3>Social media</h3>
              <p>
                We turn bold ideas into powerful digital solutions that connect,
                engage...
              </p>
            </div>
          </div>

        </div>
      </section>
    </section>
  );
}
