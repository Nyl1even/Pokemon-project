import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

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
          <div className="navbar">
            <div className="item-navbar">
              <p href="https://www.pokemon.com/us/pokedex/" target="_blank">About</p>
            </div>
            <div className="item-navbar">
              <p href="https://www.pokemon.com/us/pokedex/" target="_blank">Contact</p>
            </div>
            <div className="item-navbar">
              <p href="https://www.pokemon.com/us/pokedex/" target="_blank">Pokedex</p>
            </div>
            <div className="item-navbar">
              <p href="https://www.pokemon.com/us/pokedex/" target="_blank">Account</p>
            </div>
          </div>
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