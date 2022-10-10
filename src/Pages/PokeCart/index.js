import React, { useContext } from "react";
import Context from "../../Global";

import * as S from "./styles";

function PokeCart() {
  const {
    cartItems,
    clearAllCart,
    removeQuantityCartItems,
    addQuantityCartItems,
    totalPrice,
  } = useContext(Context);

  return (
    <>
      <S.Content>
        <S.ImgContent>
          <h2>Image</h2>
        </S.ImgContent>
        <S.NameContent>
          <h2>Name</h2>
        </S.NameContent>
        <S.QuantityContent>
          <h2>Quantity</h2>
        </S.QuantityContent>
        <S.PriceContent>
          <h2>Price Unity</h2>
        </S.PriceContent>
        <S.PriceContent>
          <h2>Price Total</h2>
        </S.PriceContent>
      </S.Content>

      {cartItems.length > 0 &&
        cartItems.map((cart) => {
          return (
            <S.Container key={cart.id}>
              <S.Content>
                <S.ImgContent>
                  <img src={cart.img} alt="img Pokemon" />
                </S.ImgContent>
                <S.NameContent>
                  <p>{cart.name}</p>
                </S.NameContent>
                <S.QuantityContent>
                  <S.ButtonQuantity
                    onClick={() =>
                      removeQuantityCartItems({
                        name: cart.name,
                        id: cart.id,
                        img: cart.img,
                        price: cart.price,
                      })
                    }
                  >
                    -
                  </S.ButtonQuantity>
                  <p>{cart.quantity}</p>
                  <S.ButtonQuantity
                    onClick={() =>
                      addQuantityCartItems({
                        name: cart.name,
                        id: cart.id,
                        img: cart.img,
                        price: cart.price,
                      })
                    }
                  >
                    +
                  </S.ButtonQuantity>
                </S.QuantityContent>

                {cart.quantity > 1 ? (
                  <>
                    <S.PriceContent>
                      <p>
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(cart.price)}
                      </p>
                    </S.PriceContent>
                    <S.PriceContent>
                      <p>
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(cart.price * cart.quantity)}
                      </p>
                    </S.PriceContent>
                  </>
                ) : (
                  <>
                    <S.PriceContent>
                      <p>
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(cart.price)}
                      </p>
                    </S.PriceContent>
                    <S.PriceContent>
                      <p>
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(cart.price)}
                      </p>
                    </S.PriceContent>
                  </>
                )}
              </S.Content>
            </S.Container>
          );
        })}
      <S.ContentBotton>
        <S.ButtonBotton onClick={() => clearAllCart()}>
          Clear Cart
        </S.ButtonBotton>
        <S.ButtonBotton>Finish</S.ButtonBotton>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalPrice)}
        </p>
      </S.ContentBotton>
    </>
  );
}

export default PokeCart;
