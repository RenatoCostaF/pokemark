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

export const LinkRouter = styled(Link)`
  text-decoration: none;
`;
