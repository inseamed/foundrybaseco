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

      <a href="#contact">
        <button>Get Quote</button>
      </a>
    </nav>
  );
}

export default Navbar;