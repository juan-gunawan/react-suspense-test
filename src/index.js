import React, { Fragment, Timeout } from "react";
import ReactDOM from "react-dom";

// Utils
import { ImageFetcher } from "../resource/ImageFetcher";

import "./styles.css";

function App() {
  loadImage = triggers => () => {};

  return (
    <div className="App">
      <button onClick={this.loadImage()}>Display Image</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
