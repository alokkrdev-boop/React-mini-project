import "./navbar.css";

export default function Navbar() {
  return (

    
    <nav className="navbar">
      <div className="leftnav"></div>

      <div className="middlenav">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Our Work</a>
        <a href="#">Testimonial</a>
      </div>

      <div className="rightnav">
        <div className="rightnav1">
          <div className="moon"></div>
        </div>
        <button className="connect-btn">Connect</button>
      </div>
    </nav>
  );
}
