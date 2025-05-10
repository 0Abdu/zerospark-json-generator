import './App.css'
import charactersData from './data/character-ids.json';
import auraKeys from './data/aura-keys.json';
import CustomizeCharacter from './components/CustomizeCharacter';
import GitHubIcon from './components/GitHubIcon'

function App() {

  return (
    <>
      <h2>ZeroSpark JSON Generator </h2>
      <GitHubIcon />
      <CustomizeCharacter charactersData={charactersData} auraKeys={auraKeys}/>
    </>
  )
}

export default App
