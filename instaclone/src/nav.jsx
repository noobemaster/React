const Nav = () => {
  return (
    <nav className="flex-container" style={{ alignItems: "baseline" }}>
      <h1 style={{ fontFamily: "futura" }}>instagram</h1>
      <div style={{ justifySelf: "flex-end" }}>
        <i className="fa-regular fa-heart fa-2xl nav-icon"></i>
        <i className="fa-brands fa-facebook-messenger fa-2xl "></i>
      </div>
    </nav>
  );
};
export default Nav;
