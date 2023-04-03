import residents from "./datas/datas";
import Animal from "./components/Animal"

function App() {

  return (
    <div className="App" >
      {residents.map ((resident)  =>
      <Animal resident={resident} key={resident.id}  />
      )}
    </div>
  )
}

export default App
