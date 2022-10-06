import React, { useMemo } from "react";
import * as S from "./styles";

const TOTALPAGES = 13;

function Pagination({ setCurrentPage }) {
  const pages = useMemo(() => {
    const array = [];
    for (let i = 0; i < TOTALPAGES; i++) {
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
