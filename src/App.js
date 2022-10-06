import Nav from "./components/Nav";
import Header from "./components/Header";
import HandlerRoutes from "./Routes";
import Context from "./Global";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as S from "./AppStyles";
import { useCallback, useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addCartItems = useCallback(
    (item) => {
      const itemsId = cartItems.map((itemCart) => itemCart.id);
      const result = itemsId.indexOf(item.id);

      if (result >= 0) {
        const items = cartItems.map((itemCart) => {
          if (itemCart.id === item.id) {
            return {
              ...itemCart,
              quantity: itemCart.quantity + 1,
            };
          }
          return itemCart;
        });
        setCartItems(items);
      } else {
        const newItem = {
          ...item,
          quantity: 1,
        };
        setCartItems([...cartItems, newItem]);
      }
      toast.success("Adicionado!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
    },
    [cartItems, setCartItems]
  );

  return (
    <div>
      <Context.Provider value={{ cartItems, addCartItems }}>
        <ToastContainer />
        <S.Container>
          <Nav />
          <S.Content>
            <Header />
            <S.ContentHandleRouter>
              <HandlerRoutes />
            </S.ContentHandleRouter>
          </S.Content>
        </S.Container>
      </Context.Provider>
    </div>
  );
}

export default App;
