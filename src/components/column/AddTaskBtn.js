import styled from "styled-components";
import grayPlus from "../../images/gray-plus.svg";

export default function AddTaskBtn() {
  return (
    <ButtonAddTask className="bg-transparent flex items-center justify-center text-silver mt-1">
      <img src={grayPlus} alt="" />
      Add new card
    </ButtonAddTask>
  );
}

const ButtonAddTask = styled.button`
  height: 30px;
`;
