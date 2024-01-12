import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Nav from "../components/navBar/Nav";
import CartView from "../components/CartView/CartView";
import Checkout from "../components/checkout/Checkout";
import LoginScreen from "../components/LoginScreen/LoginScreen";



 export const AppRouter = () => {
    const {user} = useContext(UserContext)
    return(
        <BrowserRouter>
        <Nav />
        {
          user.logged
          ?
          <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/productos/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          
          
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        :
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route  path="*" element={<Navigate to={"/login"} />}/>
        </Routes>
        }
      </BrowserRouter>
    )
}

export default AppRouter