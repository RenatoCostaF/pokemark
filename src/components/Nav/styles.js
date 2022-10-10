import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
`;
export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transition: 0.5s;
  position: fixed;
`;

export const Logo = styled.div`
  position: fixed;
  top: 1px;
  gap: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  transition: 0.25s;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 89px;
`;
export const MarketPlace = styled.div`
  background-color: white;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 20px;
  gap: 10px;
  border-radius: 12px;
  cursor: pointer;
  color: black;
  transition: 0.25s;

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
  transition: 0.25s;

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
  transition: 0.25s;

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
  align-items: center;
  justify-content: flex-end;
  border: 0px solid black;
  cursor: pointer;
  font-size: 40px;
  background-color: #fff;
  position: fixed;
  transition: 0.5s;
`;
