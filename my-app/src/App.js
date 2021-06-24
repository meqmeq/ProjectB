import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [score, updateScore] = useState(0);

  return (
    <div className="App">
      <h1 className="App-header">Why hello best baeyo</h1>
      <div>
        score: {score}
        <button
          onClick={() => {
            updateScore(score + 1);
          }}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default App;
