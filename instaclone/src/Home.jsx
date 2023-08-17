import { useState } from "react";

const Home = ({ pic }) => {
  const [activ, chActiv] = useState([{ like: false }, { book: false }]);
  const sty = { color: "red" };
  function change(e) {
    const [like, book] = activ;
    const targ = e.target.id;
    if (targ === "like") {
      activ[0] = { [targ]: !like.like };
      chActiv([...activ]);
    } else if (targ === "book") {
      activ[1] = { [targ]: !book.book };
      chActiv([...activ]);
    }

    console.log();
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div
          className="flex-container"
          style={{
            justifyContent: "flex-start",
          }}
        >
          <img src={pic} alt="profile picture" className="profile-post" />
          <div className="Name">name</div>
        </div>
        <div>
          <img src={pic} alt="post" className="post" />
        </div>
        <br />
        <div
          className="flex-container"
          style={{ justifyContent: "flex-start" }}
        >
          <i
            id="like"
            className={`${
              activ[0].like ? "fa-solid" : "fa-regular"
            } fa-heart fa-xl  post-icon `}
            style={activ[0].like ? sty : null}
            onClick={change}
          />
          <i className="fa-regular fa-comment fa-xl post-icon"></i>
          <i className="fa-regular fa-paper-plane fa-xl post-icon"></i>
        </div>
        <i
          style={{ float: "right" }}
          id="book"
          className={`${
            activ[1].book ? "fa-solid" : "fa-regular"
          }  fa-bookmark fa-xl`}
          onClick={change}
        ></i>
        <br />
        <div style={{ textAlign: "left" }}>
          <span>
            <b>198765 like</b>
          </span>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            voluptatem ut consequuntur, accusantium veritatis sint temporibus,
            eveniet distinctio, amet ullam quasi cupiditate qui non reiciendis
            repellat fuga hic nobis recusandae?
          </div>
          <span style={{ color: "grey" }}>12 december</span>
        </div>
      </div>
      <br />
    </>
  );
};
export default Home;
