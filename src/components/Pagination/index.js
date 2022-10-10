import React, { useMemo } from "react";
import * as S from "./styles";

function Pagination({ setCurrentPage }) {
  const pages = useMemo(() => {
    const array = [];
    for (let i = 0; i < 13; i++) {
      array.push(i);
    }
    return array;
  }, []);

  return (
    <S.Container>
      {pages.map((page) => (
        <S.Button key={page} onClick={() => setCurrentPage(12 * page)}>
          {page + 1}
        </S.Button>
      ))}
    </S.Container>
  );
}

export default Pagination;
