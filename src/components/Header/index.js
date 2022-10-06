import React from "react";

import * as S from "./styles";

import { BsCartCheck } from "react-icons/bs";

function Header() {
  return (
    <S.Container>
      <S.MarktPlace>
        Selecionado
        <S.LinkRouter to="/CartItems">
          <BsCartCheck />
        </S.LinkRouter>
      </S.MarktPlace>
    </S.Container>
  );
}

export default Header;
