import React from "react";

import * as S from "./styles";

function Attributes({ color, width }) {
  return (
    <S.Container style={{ backgroundColor: `${color}50` }}>
      <S.Content style={{ backgroundColor: color, width: `${width / 2}%` }} />
    </S.Container>
  );
}

export default Attributes;
