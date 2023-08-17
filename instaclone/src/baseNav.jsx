const Base = ({ imge, handleClick }) => {
  return (
    <>
      <footer className="flex-container base-icon">
        <i
          className="fa-solid fa-house fa-lg"
          onClick={() => handleClick(false)}
        />
        <i className="fa-solid fa-magnifying-glass fa-lg" />
        <i className="fa-regular fa-square-plus fa-lg"></i>

        <i className="fa-solid fa-clapperboard fa-lg"></i>
        <img
          src={imge}
          alt="profile picture"
          onClick={() => handleClick(true)}
          className="base-profile"
        />
      </footer>
    </>
  );
};
export default Base;
