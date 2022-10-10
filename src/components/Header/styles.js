import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 14px 21px;
  gap: 10px;
  background-color: white;
  
`;
export const MarktPlace = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
`;
export const CartButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  text-decoration: none;
  color: #000;
`;
export const CartQuantityItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -10px;
  right: 8px;
  font-size: 15px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #5570f1;
  color: #FFF;
  z-index: 0;
`;

export const LinkRouter = styled(Link)`
  text-decoration: none;
`;

