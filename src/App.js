import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import 'bootstrap/dist/css/bootstrap.min.css';
function Dropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Choose your Pokemon picture</p>
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header>
        <div className="header">
          <img src={require('./pokemon-logo.png')} alt="pokemon logo" className='logo' />
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.pokemon.com/us/pokedex/" target="_blank">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.pokemon.com/us/pokedex/" target="_blank">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.pokemon.com/us/pokedex/" target="_blank">Pokedex</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.pokemon.com/us/pokedex/" target="_blank">Account</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="main-page">
        <Dropzone />
        <div>
          <img src={require('./result-text.png')} alt="result text" className='resultText' />
        </div>
      </div>
    </div>
  );
}

export default App;