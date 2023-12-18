
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Nav from "./components/navBar/Nav"

const App = () => {
  return(
    <BrowserRouter>

      <Nav/>

      

      <Routes>
        <Route path="/" element={ <ItemListContainer/>} />
        <Route path="/productos/:categoriaId" element={ <ItemListContainer/>} />
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
        

        <Route path="/not-found" element={ <h2>Not found</h2> }/>
        <Route path="*" element={ <Navigate to={"/not-found"}/> }/>
      </Routes>





    </BrowserRouter>
  )
}

export default App

