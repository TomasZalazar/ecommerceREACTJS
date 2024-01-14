


import { CartProvider } from "./context/CartContext";
import { UserContextProvider } from "./context/UserContext";
import {AppRouter} from "./router/AppRouter";



const App = () => {
  
  return (
  <UserContextProvider>
    <CartProvider>
      <AppRouter/>
    </CartProvider>
  </UserContextProvider>
  );
};

export default App;
