import React, { useContext } from "react";

import * as S from "./styles";

import { BsCartCheck } from "react-icons/bs";
import Context from "../../Global";

function Header() {
  const { cartItems } = useContext(Context);

  return (
    <S.Container>
      <S.MarktPlace>
        <p>Selecionado</p>
        <S.LinkRouter to="/CartItems">
          <S.CartButtonContent>
            <BsCartCheck />
            {cartItems.length > 0 ? (
              <S.CartQuantityItem>{cartItems.length} </S.CartQuantityItem>
            ) : (
              ""
            )}
          </S.CartButtonContent>
        </S.LinkRouter>
      </S.MarktPlace>
    </S.Container>
  );
}

export default Header;
