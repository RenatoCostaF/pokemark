import React, { useContext } from "react";
import Context from "../../Global";

import * as S from "./styles";

function PokeCart() {
  const { cartItems } = useContext(Context);

  return (
    <>
      {cartItems.length > 0 &&
        cartItems.map((cart) => {
          return (
            <S.Container key={cart.id}>
              <S.Content>
                <p>Name: {cart.name}</p>
                <p>Price: {cart.price}</p>
                <img src={cart.img} alt="img Pokemon" />
                <p>Quantity: {cart.quantity}</p>
              </S.Content>
            </S.Container>
          );
        })}
    </>
  );
}

export default PokeCart;
