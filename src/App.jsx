
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
const App = () => {
  return(
    <BrowserRouter>

      <NavBar/>

      

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

