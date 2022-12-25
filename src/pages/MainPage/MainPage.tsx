import React from "react";
import "./MainPage.scss";

const MainPage: React.FC = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="preview">
          <h2 className="preview__quote">
            I drink wine and
            <br />I know things
          </h2>
          <p className="quote-author">Tyrion Lannister</p>
        </div>
      </div>
    </main>
  );
};
export default MainPage;
