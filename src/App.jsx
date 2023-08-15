import { CharactersContextProvider } from "./context/charactersContext"
import Characters from "./components/Characters"



const App = () => {


  return (
    <>
      <div className="container">
        <h1 className="alert alert-success text-center">Rick and Morty App</h1>
        <CharactersContextProvider>
          <Characters />
        </CharactersContextProvider>
      </div>

    </>
  )
}

export default App
