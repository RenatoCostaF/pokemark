import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3px;
  width: 250px;
  height: 400px;
  background-color: white;
  border-radius: 2%;
  text-transform: capitalize;
`;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 240px;
  height: 280px;
  background-color: #fff;
  border-radius: 2%;
  margin: 5px 0 5px 0;
  font-size: 14px;
`;
export const ContentTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const ContentTextType = styled.div`
  width: 100px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const ContentNameText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const ContentNumberText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Stats = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  font-size: 11px;
  margin: 5px;
`;

export const StatsText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
`;

export const ContentStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const ContentPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
export const Price = styled.p`
  font-size: 20px;
`;
export const ButtonPrice = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #fff;
  cursor: pointer;
  height: 30px;
  font-size: 25px;
`;
