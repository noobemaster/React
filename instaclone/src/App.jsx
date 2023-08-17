import { useState } from "react";
import "./App.css";
import Profile from "./profile";
import Home from "./Home";
import Base from "./baseNav";
import Nav from "./nav";

function App() {
  const [prof, setProf] = useState(false);
  const imge =
    "data:image/jpeg;base64,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";

  const click = (bool) => {
    setProf(bool);
  };
  return (
    <>
      {prof ? (
        <Profile pic={imge} />
      ) : (
        <>
          <Nav />
          <Home pic={imge} />
          <Home pic={imge} />
        </>
      )}
      <Base imge={imge} handleClick={(bool) => click(bool)} />
    </>
  );
}

export default App;
