import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin: 5px;
  background-color: #fff;
  padding: 0px 25px 0px 25px;
`;
export const ContentBotton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin: 5px;
  background-color: #fff;
  padding: 0px 70px 0px 70px;
`;
export const ButtonBotton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 150px;
  height: 40px;
  background-color: #5570f1;
  color: #fff;
  transition: 0.2s;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  border: none;
  border-radius: 2px;

  &:hover {
    background-color: #000;
  }
`;
export const NameContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 200px;
  text-transform: capitalize;
`;
export const ImgContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 200px;
`;
export const QuantityContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100px;
`;
export const PriceContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 200px;
`;
export const ButtonQuantity = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #fff;
  cursor: pointer;
  height: 30px;
  font-size: 25px;
`;
