import uuid from "react-uuid";
import styled from "styled-components";
import Column from "./Column";

export default function ColumnsList({ columns }) {
  return (
    <ListWrapper className="flex mb-6 overflow-auto -mr-4">
      {columns.map((column) => (
        <Column key={uuid()} column={column} />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  :nth-last-child {
    padding-right: 20px;
    margin-right: 40px;
  }
`;
