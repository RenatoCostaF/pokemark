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
  const [totalPrice, setTotalPrice] = useState('');

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
        setTotalPrice(parseFloat(totalPrice + item.price));
      } else {
        const newItem = {
          ...item,
          quantity: 1,
        };
        setCartItems([...cartItems, newItem]);
        setTotalPrice(parseFloat(totalPrice + item.price));
      }
      toast.success("Adicionado!", {
        autoClose: 1000,
      });
    },
    [cartItems, setCartItems, totalPrice]
  );

  const addQuantityCartItems = useCallback(
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
        setTotalPrice(parseFloat(totalPrice + item.price));
      } else {
        const newItem = {
          ...item,
          quantity: 1,
        };
        setCartItems([...cartItems, newItem]);
        setTotalPrice(parseFloat(totalPrice + item.price));
      }
    },
    [cartItems, setCartItems, totalPrice]
  );

  const removeCartItems = useCallback(
    (id) => {
      if (cartItems.length > 0) {
        const arraySuport = cartItems.filter((itemCart) => itemCart.id !== id);
        setCartItems(arraySuport);
      } else {
        setCartItems([]);
      }
    },
    [cartItems]
  );

  const removeQuantityCartItems = useCallback(
    (item) => {
      const itemsId = cartItems.map((itemCart) => itemCart.id);
      const result = itemsId.indexOf(item.id);

      if (cartItems[result].quantity > 1) {
        const items = cartItems.map((itemCart) => {
          if (itemCart.id === item.id) {
            return {
              ...itemCart,
              quantity: itemCart.quantity - 1,
            };
          }
          return itemCart;
        });
        setCartItems(items);
        setTotalPrice(parseFloat(totalPrice - item.price))
      } else {
        removeCartItems(item.id);
        setTotalPrice(parseFloat(totalPrice - item.price))
      }
    },
    [cartItems, setCartItems, removeCartItems, totalPrice]
  );

  const clearAllCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Context.Provider
        value={{
          cartItems,
          addCartItems,
          clearAllCart,
          addQuantityCartItems,
          removeQuantityCartItems,
          totalPrice,
        }}
      >
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
