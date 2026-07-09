function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">
        FOUNDRY <span>CO.</span>
      </h2>

      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="navbar-actions">
        <a className="navbar-phone" href="tel:+13028583224">
          (302) 858-3224
        </a>
        <a href="#contact">
          <button className="btn-primary chamfer-sm">Get Quote</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;