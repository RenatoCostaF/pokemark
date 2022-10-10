import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 37px;
  background-color: #fff;
`;
export const Button = styled.button`
  cursor: pointer;
  width: 50px;
  background-color: #fff;
  border: 0px solid black;
  border-radius: 20px;
  font-size: 15px;

  &:hover {
    background-color: #5570f1;
    color: #FFF;
    transition: 0.25s;
  }
  &:focus {
    background-color: #5570f1;
    color: #FFF;
  }
`;
