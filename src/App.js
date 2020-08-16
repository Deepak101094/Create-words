import React, { useState } from "react";
import Header from "./components/header";
import Buttons from "./components/buttons";
import Footer from "./components/footer";

import "./app.css";

function App() {
  const [word, setWord] = useState("");
  const [wordsArray, setWordsArray] = useState([]);

  const alphabetClickHandler = (alphabet) => {
    let updatedWord = word.concat(alphabet);
    setWord(updatedWord);
  };

  const createWordHandler = () => {
    let updatedWordsArray = [...wordsArray];
    updatedWordsArray.push(word);
    setWordsArray(updatedWordsArray);
    setWord("");
  };

  return (
    <>
      <Header />
      <Buttons handleClick={alphabetClickHandler} />
      <div className="createword_container" onClick={createWordHandler}>
        <button className="createword_button">Create Word</button>
      </div>
      <>
        {(wordsArray || []).map((word, index) => (
          <div className="word_container" key={index}>
            <p className="word">{word}</p>
            <p className="word_length">{word.length}</p>
          </div>
        ))}
      </>
      <Footer />
    </>
  );
}

export default App;
