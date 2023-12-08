import ItemListContainer from "./components/ItemListContainer.jsx"
import NavBar from "./components/NavBar.jsx"


const App = () => {
     const texto = "Bienvenido"
  return (
    <>
       <NavBar/>
       <ItemListContainer
          texto = {texto}       
       />
    </>

  )
}

export default App