import React, { useState } from "react";

import * as S from "./styles";

import { BsBag, BsWindowDock, BsGrid } from "react-icons/bs";
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
      <S.Content>
        <S.Logo
          style={{
            width: isMenuOpen ? "296px" : "116px",
            height: isMenuOpen ? "100px" : "100px",
            justifyContent: isMenuOpen ? "center" : "center",
          }}
        >
          <img src={Pokeball} alt="Pokeball" />
          <p
            style={{
              display: isMenuOpen ? "block" : "none",
            }}
          >
            Pokemark
          </p>
        </S.Logo>
        <S.NavBar
          style={{
            width: isMenuOpen ? "296px" : "116px",
            height: isMenuOpen ? "100vh" : "100vh",
            justifyContent: isMenuOpen ? "flex-start" : "flex-start",
          }}
        >
          <S.LinkRouter to="/">
            <S.MarketPlace
              style={{
                width: isMenuOpen ? "190px" : "17px",
              }}
            >
              <BsGrid />
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
            justifyContent: isMenuOpen ? "flex-end" : "flex-end",
          }}
        >
          <MdKeyboardArrowLeft
            style={{
              transform: isMenuOpen ? "rotate(0deg)" : "rotate(180deg)",
            }}
          />
        </S.Button>
      </S.Content>
    </S.Container>
  );
}

export default Nav;
