import { Link } from "react-router-dom";

const Base = ({ imge }) => {
  return (
    <>
      <footer className="flex-container base-icon">
        <Link to="/" style={{ color: "#fff" }}>
          <i className="fa-solid fa-house fa-lg" />
        </Link>
        <Link to="/search" style={{ color: "#fff" }}>
          <i className="fa-solid fa-magnifying-glass fa-lg" />
        </Link>
        <i className="fa-regular fa-square-plus fa-lg"></i>
        <Link to="/reels" style={{ color: "#fff" }}>
          <i className="fa-solid fa-clapperboard fa-lg"></i>
        </Link>
        <Link to="/profile" style={{ color: "#fff" }}>
          <img src={imge} alt="profile picture" className="base-profile" />
        </Link>
      </footer>
    </>
  );
};
export default Base;
