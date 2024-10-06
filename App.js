import {useState} from 'react'
import OpenAI from "openai";

const App = () => {
const openai = new OpenAI({apiKey: process.OPENAI_API_KEY, dangerouslyAllowBrowser:true});
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [inputText, setInputText] = useState('');

  const onChangeRadioBtn = (e) => {
    const {value} = e.target
    setSelectedLanguage(value)
  }
  console.log('hello')

  const onChangeTextarea = (e) => {
    const {value} = e.target
    setInputText(value)
  }

  console.log(selectedLanguage)
  console.log(inputText)

  return (
    <div className="appbody">
      <header>
        <img className="headerbg" src="./assets/worldmap.png" alt="" />
      </header>
      <div className="chat">
        <textarea value={inputText} onChange={onChangeTextarea} name="" id="" />
        <label htmlFor="French">
          <input type="radio" name="language" id="French" value="fr" onChange={onChangeRadioBtn} /> French
        </label>
        <label htmlFor="Spanish">
          <input type="radio" name="language" id="Spanish" value="es" onChange={onChangeRadioBtn} /> Spanish
        </label>
        <label htmlFor="Japanese">
          <input type="radio" name="language" id="Japanese" value="ja" onChange={onChangeRadioBtn} /> Japanese
        </label>
        <button>Translate</button>
        <textarea name="" id="" />
      </div>
    </div>
  );
};

export default App;
