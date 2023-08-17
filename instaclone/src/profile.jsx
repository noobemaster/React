const Profile = ({ pic }) => {
  return (
    <>
      <div>
        <div className="flex-container">
          <img src={pic} alt="profile picture" className="profile-pic" />
          <div className="stats">
            <h3>8</h3>
            <p>posts</p>
          </div>
          <div className="stats">
            <h3>8</h3>
            <p>followers</p>
          </div>
          <div className="stats">
            <h3>8</h3>
            <p>following</p>
          </div>
        </div>
        <div>instagram</div>
        <div className="bio">bio</div>
        <div className="flex-container">
          <button className="profile-btn">edit profile</button>
          <button className="profile-btn">share profile</button>
          <button
            style={{
              borderRadius: 8,
              backgroundColor: "rgb(56, 53, 53)",
              color: "#fff",
            }}
          >
            <i className="fa-solid fa-user-plus"></i>
          </button>
        </div>
      </div>
      <br />
      <div className="flex-container">
        <i className="fa-solid fa-table-cells"></i>
        {/* <i className="fa-solid fa-clapperboard"></i> */}
        <i className="fa-solid fa-user-tag"></i>
      </div>
      <hr />
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam tempore,
        at nobis vero nisi consequatur consectetur laborum itaque. Dolores
        dolore nulla amet voluptate quia accusantium vero sapiente voluptatem
        tempore deleniti.
      </div>
    </>
  );
};
export default Profile;
