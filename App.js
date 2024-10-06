import { useState } from "react";
import OpenAI from "openai";

const App = () => {
  const openai = new OpenAI({
    apiKey: process.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");

  const fetchResponse = async () => {
    const messages = [
      {
        role: "system",
        content: `you are a ${selectedLanguage} translator that translates the given input into your language.`,
      },
      {
        role: "user",
        content: `${inputText}`,
      },
    ];
    if (!selectedLanguage || !inputText) {
      setResponse("Please add text and language type to translate");
      return;
    }
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
    });
    console.log(response);
    setResponse(response.choices[0].message.content);
  };

  const onChangeRadioBtn = (e) => {
    const { value } = e.target;
    setSelectedLanguage(value);
  };
  console.log("hello");

  const onChangeTextarea = (e) => {
    const { value } = e.target;
    setInputText(value);
  };

  return (
    <div className="appbody">
      <header>
        <img className="headerbg" src="./assets/worldmap.png" alt="" />
      </header>
      <div className="chat">
        <textarea value={inputText} onChange={onChangeTextarea} name="" id="" />
        <label htmlFor="French">
          <input
            type="radio"
            name="language"
            id="French"
            value="french"
            onChange={onChangeRadioBtn}
          />{" "}
          French
        </label>
        <label htmlFor="Spanish">
          <input
            type="radio"
            name="language"
            id="Spanish"
            value="spanish"
            onChange={onChangeRadioBtn}
          />{" "}
          Spanish
        </label>
        <label htmlFor="Japanese">
          <input
            type="radio"
            name="language"
            id="Japanese"
            value="japanese"
            onChange={onChangeRadioBtn}
          />{" "}
          Japanese
        </label>
        <label htmlFor="Hinglish">
          <input
            type="radio"
            name="language"
            id="Hinglish"
            value="hinglish"
            onChange={onChangeRadioBtn}
          />{" "}
          Hinglish
        </label>
        <button onClick={fetchResponse}>Translate</button>
        <textarea name="" id="" readOnly value={response} />
      </div>
    </div>
  );
};

export default App;
