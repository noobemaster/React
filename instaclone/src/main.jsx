import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
/* 
 1.create a profile component with pic,num post, num followers
   num following. name under pic,edit profile  && share profile btn.
   gallary and tags under the button
 2.create a home component wiyh a  its name at the top a hert btn for
   notification and a messenger icon
 3. add components tha constituit the post with
         a) image and name in-line
         b)img/video
         c)hert, comments, share && bookmark btn in-line
         d) a caption
         e) time stamp
*/
