import React, {useState} from 'react'
import './App.css';

function App() {

  const [longUrl, setLongUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const shortenUrl = (event) => {

    const postUrl = 'http://localhost:3001/api/shortenUrl'
    fetch(postUrl, { 
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({longUrl: longUrl})
    })
    .then(response => response.json())
    .then(data => {
      setShortenedUrl(data.shortUrl);
    })
    
    event.preventDefault();
  }

  const updateUrl = (event) => {
    setLongUrl(event.target.value);
    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Url Shortener</h1>
        <form onSubmit={(event) => shortenUrl(event)}>
          <div>
            <input value={longUrl} onChange={(event) => updateUrl(event)} />
            <input type="submit" value="Shorten Url" /> 
          </div>
        </form>

        <br />
        <br />
        
        {!!shortenedUrl ? (
          <div>
            <h3>Shortened Url: </h3>
            <a className="Url-Link" href={longUrl}>{shortenedUrl}</a>
          </div>
          )
          :
          null
        } 
      </header>
    </div>
  );
}

export default App;
