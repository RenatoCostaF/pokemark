import React, { useState } from "react";

import * as S from "./styles";

import { BsCommand, BsBag, BsWindowDock } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Pokeball from "../../assets/pokeball.svg";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuIsOpen = () => setIsMenuOpen(!isMenuOpen);

  return (
    <S.Container
      style={{
        minWidth: isMenuOpen ? "296px" : "116px",
      }}
    >
      <S.Logo>
        <img src={Pokeball} alt="Pokeball" />
        <p
          style={{
            display: isMenuOpen ? "block" : "none",
          }}
        >
          Pokemark
        </p>
      </S.Logo>
      <S.NavBar>
        <S.LinkRouter to="/">
          <S.MarketPlace
            style={{
              width: isMenuOpen ? "190px" : "17px",
            }}
          >
            <BsCommand />
            <p
              style={{
                display: isMenuOpen ? "block" : "none",
              }}
            >
              MarketPlace
            </p>
          </S.MarketPlace>
        </S.LinkRouter>

        <S.LinkRouter to="/inventory">
          <S.Inventory
            style={{
              width: isMenuOpen ? "190px" : "17px",
            }}
          >
            <BsWindowDock />
            <p
              style={{
                display: isMenuOpen ? "block" : "none",
              }}
            >
              Inventory
            </p>
          </S.Inventory>
        </S.LinkRouter>

        <S.LinkRouter to="/order">
          <S.Order
            style={{
              width: isMenuOpen ? "190px" : "17px",
            }}
          >
            <BsBag />
            <p
              style={{
                display: isMenuOpen ? "block" : "none",
              }}
            >
              Order
            </p>
          </S.Order>
        </S.LinkRouter>
      </S.NavBar>
      <S.Button
        onClick={handleMenuIsOpen}
        style={{
          width: isMenuOpen ? "296px" : "116px",
          justifyContent: isMenuOpen ? "flex-end" : "center",
        }}
      >
        <MdKeyboardArrowLeft
          style={{
            transform: isMenuOpen ? "rotate(0deg)" : "rotate(180deg)",
          }}
        />
      </S.Button>
    </S.Container>
  );
}

export default Nav;
