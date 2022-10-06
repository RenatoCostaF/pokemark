import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
`;

export const Logo = styled.div`
  position: absolute;
  width: 123.49px;
  height: 52px;
  top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  position: absolute;
  width: 233px;
  height: 296px;
  left: 32px;
  right: 31px;
  top: 128px;
`;
export const MarketPlace = styled.div`
  background-color: white;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  gap: 10px;
  border-radius: 12px;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #5570f1;
    color: white;
    transition: 0.25s;
  }
`;

export const Inventory = styled.div`
  background-color: white;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  gap: 10px;
  border-radius: 12px;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #5570f1;
    color: white;
    transition: 0.25s;
  }
`;
export const Order = styled.div`
  background-color: white;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  gap: 10px;
  border-radius: 12px;
  cursor: pointer;
  color: black;
  /* transition: 0.2s; */

  &:hover {
    background-color: #5570f1;
    color: white;
    transition: 0.25s;
  }
`;
export const LinkRouter = styled(Link)`
  text-decoration: none;
`;
export const Button = styled.button`
  display: flex;
  border: 0px solid black;
  cursor: pointer;
  font-size: 40px;
  background-color: #fff;
`;
