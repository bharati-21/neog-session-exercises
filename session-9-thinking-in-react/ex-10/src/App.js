import './App.css';
import {useState} from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";

const App = () => {
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState({ 
    fontFamily: 'Helvetica',
    bestUse: 'Text',
    type: 'Sans-serif',
    bestParis: ['Roboto', 'Lucida Grande']
  });

  const [copied, setCopied] = useState(false);

  const onCopiedCodeSnippet = event => {
    setCopied(prevCopied => !prevCopied);

    setTimeout(() => setCopied(prevCopied => !prevCopied) , 2000);
  }
  
  const fontInfo = [
    { 
      fontFamily: 'Helvetica',
      bestUse: 'Text',
      type: 'Sans-serif',
      bestParis: ['Roboto', 'Lucida Grande']
    },
    { 
      fontFamily: 'Open Sans',
      bestUse: 'Text',
      type: 'Sans-serif',
      bestParis: ['Montserrat', 'Lato', 'Roboto']
    },
    { 
      fontFamily: 'Montserrat',
      bestUse: 'Heading and Text',
      type: 'Sans-serif',
      bestParis: ['Open Sans', 'Lora', 'Roboto slab']
    },
    { 
      fontFamily: 'Roboto',
      bestUse: 'Heading and Text',
      type: 'Sans-serif',
      bestParis: ['Open Sans', 'Lato', 'Roboto slab']
    },
    { 
      fontFamily: 'Lato',
      bestUse: 'Text',
      type: 'Sans-serif',
      bestParis: ['Open Sans', 'Montserrat', 'Roboto']
    },
    { 
      fontFamily: 'Merriweather',
      bestUse: 'Heading',
      type: 'Serif',
      bestParis: ['Open Sans', 'Roboto']
    },
    {
      fontFamily: 'Monospace',
      bestUse: 'Code',
      type: 'Typewriter',
      bestParis: []
    },
    {
      fontFamily: 'Josefin Sans',
      bestUse: 'Text',
      type: 'Sans-serif',
      bestParis: []
    },
    {
      fontFamily: 'Raleway',
      bestUse: 'Text',
      type: 'Sans-serif',
      bestParis: []
    },
    {
      fontFamily: 'Ubuntu',
      bestUse: 'Text',
      type: 'Sans-serif',
      bestParis: []
    }
  ];

  const changeFontFamily = e => {
    setFontFamily(fontInfo.filter(font => font.fontFamily === e.target.value)[0])
  }

  const codeSnippet = `
  
                 .text {
                    font-family: ${fontFamily.fontFamily};
                    font-size: ${fontSize};
                 }
                `;
  return (
    <div className="App">
      <div className="fontsize-button-container">
        <button onClick={e => setFontSize(prevFontSize => prevFontSize + 8)}>+</button>
        <button onClick={e => setFontSize(prevFontSize => prevFontSize - 8 < 8 ? 8 : prevFontSize - 8)}>-</button>
      </div>
      <div className="fontfamily-container">
        <select className="fontfamily-dropdown" name="font-family" onChange={changeFontFamily}>
          {
            fontInfo.map(font => <option value={font.fontFamily} name="font-family">{font.fontFamily}</option>)
          }
        </select>
      </div>
      <div className="text" style={{fontSize: fontSize, fontFamily: fontFamily.fontFamily}}>
        <div>This is a sample text</div>
        </div>
        <div>
          <h1>Font Information</h1>
          {
            <ul>
              
                <li>Font : {fontFamily.fontFamily}</li>
                <li>Type: {fontFamily.type}</li>
                <li>Best Paired with: {fontFamily.bestParis.join(", ")}</li>
                <li>Font Best used for: {fontFamily.bestUse}</li>
            </ul>
            }
          </div>
          <CopyToClipboard text={codeSnippet} onCopy={onCopiedCodeSnippet}>
            <div className="copy-area">
            <button>Copy to Clipboard</button>
            <span>
            {copied ? "copied" : "copy"}
            </span>
          </div>
        </CopyToClipboard>
    </div>
  );
}

export default App;
