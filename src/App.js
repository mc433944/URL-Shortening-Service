import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const shortenUrl = (event) => {
    //logic to check url and call api
    console.log("shortenUrl:", url);
    event.preventDefault();
  }

  const updateUrl = (event) => {
    setUrl(event.target.value);
    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">

        <h4>Url Shortener</h4>
        <form onSubmit={(event) => shortenUrl(event)}>
          <div>
            <input value={url} onChange={(event) => updateUrl(event)} />
            <input type="submit" value="Shorten Url" /> 
          </div>
        </form>
        {!!shortenedUrl ? 
          <h5 style={{color: 'green'}}>Shortened Url: {shortenedUrl}</h5>
          :
          null
        } 
      </header>
    </div>
  );
}

export default App;
